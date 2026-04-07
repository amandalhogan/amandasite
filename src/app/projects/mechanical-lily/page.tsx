import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Mechanical Lily | Amanda L. Hogan",
  description: "Light-sensitive kinetic sculpture inspired by biomimicry.",
  openGraph: {
    title: "Mechanical Lily | Amanda L. Hogan",
    images: ["/assets/img/Project4_mech.png"],
  },
};

const author = {
  name: "Amanda L. Hogan",
  picture: "/assets/prof_pic.jpg",
};

const markdown = `
## Overview
Mechanical Lily is a light-sensitive kinetic sculpture that responds to changing illumination. The form draws from botanical structures while the motion system is grounded in small-scale mechatronics.

## Role
Concept, CAD modeling, fabrication, embedded programming.

## Tools + Materials
- Arduino
- CAD + laser-cut components
- Light sensor + servos

## Notes
This page is a living project log. I will add process photos, diagrams, and build notes as they are documented.
`;

export default async function MechanicalLilyPage() {
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
            title="Mechanical Lily"
            coverImage="/assets/img/Project4_mech.png"
            date="2025-05-20"
            author={author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}
