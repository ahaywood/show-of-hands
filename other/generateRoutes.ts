#!/usr/bin/env node

import * as fs from 'fs/promises';
import * as path from 'path';

interface RouteMatch {
  route: string;
  startIndex: number;
  endIndex: number;
}

async function findMatchingBracket(content: string, startIndex: number): Promise<number> {
  let count = 1;
  let i = startIndex;

  while (count > 0 && i < content.length) {
    if (content[i] === '[') count++;
    if (content[i] === ']') count--;
    i++;
  }

  return i - 1;
}

async function extractRoutesFromContent(content: string, prefix = ''): Promise<string[]> {
  const routes: string[] = [];
  const routeRegex = /route\("([^"]+)"/g;
  const indexRegex = /index\(/g;
  const prefixRegex = /prefix\("([^"]+)",\s*\[/g;

  let match;

  // Find all prefixed route blocks
  while ((match = prefixRegex.exec(content)) !== null) {
    const prefixPath = match[1];
    const startIndex = match.index + match[0].length;
    const endIndex = await findMatchingBracket(content, startIndex);
    const nestedContent = content.substring(startIndex, endIndex);

    // Recursively process nested routes with combined prefix
    const nestedRoutes = await extractRoutesFromContent(
      nestedContent,
      prefix + prefixPath
    );
    routes.push(...nestedRoutes);
  }

  // Find all regular routes
  while ((match = routeRegex.exec(content)) !== null) {
    // Skip if this route is part of a prefix block (we already processed those)
    const beforeMatch = content.substring(0, match.index);
    const lastPrefixIndex = beforeMatch.lastIndexOf('prefix(');
    const lastBracketIndex = beforeMatch.lastIndexOf(']');

    if (lastPrefixIndex === -1 || lastBracketIndex > lastPrefixIndex) {
      const route = prefix + match[1];
      routes.push(route);
    }
  }

  // Find index routes (which map to "/")
  if (indexRegex.test(content)) {
    routes.push(prefix + "/");
  }

  // Remove duplicates
  return [...new Set(routes)];
}

async function generateLinksFile(routes: string[]) {
  const content = `import { defineLinks } from "@redwoodjs/sdk/router";

export const link = defineLinks(${JSON.stringify(routes, null, 2)});
`;

  await fs.writeFile(
    path.resolve(process.cwd(), 'src/app/shared/links.ts'),
    content,
    'utf-8'
  );
}

async function main() {
  try {
    const workerContent = await fs.readFile(
      path.resolve(process.cwd(), 'src/worker.tsx'),
      'utf-8'
    );

    const routes = await extractRoutesFromContent(workerContent);
    await generateLinksFile(routes);
    console.log('✨ Successfully generated links.ts');
  } catch (error) {
    console.error('Error generating routes:', error);
    process.exit(1);
  }
}

main();
