import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "OpenAI API Agents | Amanda L. Hogan",
  description: "Playing around with agentic AI to create personal assistants.",
  openGraph: {
    title: "OpenAI API Agents | Amanda L. Hogan",
    images: ["/assets/img/Project5_agent.jpg"],
  },
};

const author = {
  name: "Amanda L. Hogan",
  picture: "/assets/prof_pic.jpg",
};

const markdown = `
## Overview
Playing around with agentic AI to create personal assistants.

## Notes
I will add experiments, prompts, and learnings here as this grows.
`;

export default async function OpenAiApiAgentsPage() {
  const content = await markdownToHtml(markdown);

  return (
    <main>
      <Container>
        <article className="mb-32">
          <a
            href="/"
            className="text-xs uppercase tracking-widest text-emerald-800 font-bold hover:underline"
          >
            ← Back to Portfolio
          </a>
          <PostHeader
            title="OpenAI API Agents"
            coverImage="/assets/img/Project5_agent.jpg"
            date="2025-03-01"
            author={author}
          />
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </PostBody>
        </article>
      </Container>
    </main>
  );
}
