import { Layout } from "../marketing/Layout";
import { RequestInfo } from "@redwoodjs/sdk/worker";

import { Markdown } from "@/app/components/Markdown";

const MarkdownPage = async({ ctx }: RequestInfo) => {
  // const content = await ctx.fetch(`/legal/${ctx.params.slug}.md?raw`);
  return <Layout pathname="/legal">
    <Markdown content={ctx?.content ?? ""} />
  </Layout>
}

export { MarkdownPage }