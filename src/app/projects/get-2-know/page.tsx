import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostTitle } from "@/app/_components/post-title";
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

const markdown = `
I created this game as part of my application materials for the [Brooke Owens Fellowship](https://www.brookeowensfellowship.org/) in 2022. I created it in Python and used Pygame. You can see the code on my GitHub [here](https://github.com/amandalhogan/AmandaGame) and play the click-through below!
`;

export default async function Get2KnowPage() {
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
          <PostTitle>Get2Know Game</PostTitle>
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="mt-8">
              <Link
                href="/projects/get-2-know/play"
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
