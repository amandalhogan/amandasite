import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Silly Compounds | Amanda L. Hogan",
  description:
    "One of my first python click-through games, meant to be a fun way of introducing compound words to kids.",
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
One of my first python click-through games, meant to be a fun way of introducing compound words to kids. I made this around 2021, and updated it to embed in this portfolio. The original file can be found here: <https://github.com/amandalhogan/amandalhogan.github.io/blob/gh-pages/projects/3_project/SillyCompoundsFinalGame.py>
`;

export default async function SillyCompoundsPage() {
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
            title="Silly Compounds"
            coverImage="/assets/img/Project3_Silly2.png"
            date="2024-11-01"
            author={author}
          />
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="mt-8">
              <Link
                href="/projects/silly-compounds/play"
                className="inline-block rounded-full border border-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-widest text-emerald-800 transition-colors hover:bg-emerald-800 hover:text-white"
              >
                Play Game
              </Link>
            </div>
          </PostBody>
        </article>
      </Container>
    </main>
  );
}
