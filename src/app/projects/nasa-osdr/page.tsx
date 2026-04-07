import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "NASA OSDR | Amanda L. Hogan",
  description: "Microbiology in spaceflight technical brief and analysis.",
  openGraph: {
    title: "NASA OSDR | Amanda L. Hogan",
    images: ["/assets/img/Project5_agent.jpg"],
  },
};

const author = {
  name: "Amanda L. Hogan",
  picture: "/assets/prof_pic.jpg",
};

const markdown = `
## Overview
NASA OSDR is a technical brief focused on microbiology in spaceflight, synthesizing current datasets and open science resources.

## Role
Research synthesis, analysis, and technical writing.

## Sources + Tools
- NASA OSDR datasets
- Literature review
- Data visualization

## Notes
This page will expand with figures, references, and a downloadable brief.
`;

export default async function NasaOsdrPage() {
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
            title="NASA OSDR"
            coverImage="/assets/img/Project5_agent.jpg"
            date="2025-06-01"
            author={author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
