import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Silly Compounds | Amanda L. Hogan",
  description:
    'One of my first python "games," meant to be a fun way of introducing compound words to kids.',
  openGraph: {
    title: "Silly Compounds | Amanda L. Hogan",
    images: ["/assets/img/Project3_Silly2.png"],
  },
};

const author = {
  name: "Amanda L. Hogan",
  picture: "/assets/prof_pic.jpg",
};

const markdown = `
## Overview
One of my first python "games," meant to be a fun way of introducing compound words to kids.

## Tech
- Python

## Notes
More details coming soon.
`;

export default async function SillyCompoundsPage() {
  const content = await markdownToHtml(markdown);

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title="Silly Compounds"
            coverImage="/assets/img/Project3_Silly2.png"
            date="2024-11-01"
            author={author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
