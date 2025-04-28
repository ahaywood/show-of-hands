// src/app/components/Markdown.tsx
import { marked } from 'marked';

export const Markdown = ({ content }: { content: string }) => {
  const html = marked(content);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};