import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Get2Know Game | Amanda L. Hogan",
  description:
    'A python (pygame) "Get to Know Amanda" Q & A style click-through game.',
  openGraph: {
    title: "Get2Know Game | Amanda L. Hogan",
    images: ["/assets/img/Project1_Get2Know2.png"],
  },
};

const author = {
  name: "Amanda L. Hogan",
  picture: "/assets/prof_pic.jpg",
};

const markdown = `
## Overview
A python (pygame) "Get to Know Amanda" Q & A style click-through game. It is a playful introduction built as a mini interactive experience.

## Tech
- Python
- Pygame

## Links
- GitHub: https://github.com/amandalhogan/AmandaGame
`;

export default async function Get2KnowPage() {
  const content = await markdownToHtml(markdown);

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title="Get2Know Game"
            coverImage="/assets/img/Project1_Get2Know2.png"
            date="2025-01-15"
            author={author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
