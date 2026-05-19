import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostTitle } from "@/app/_components/post-title";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Published briefs on human spaceflight | Amanda L. Hogan",
  description: "Microbiology in spaceflight technical brief and analysis.",
  openGraph: {
    title: "Published briefs on human spaceflight | Amanda L. Hogan",
    images: ["/assets/img/Project5_agent.jpg"],
  },
};

const microbiologyBriefUrl =
  "https://www.nasa.gov/wp-content/uploads/2024/05/microbiology-in-space-overview.pdf?emrc=418cec";

const introMarkdown = `
As a Health and Safety Standards Integrator for NASA, I contributed to so many exciting projects. An especially cool project for me was creating a technical brief for Microbiology in Human Spaceflight. This involved consolidating all relevant standards from NASA-STD-3001 (standards ranging from Suit Materials Cleanability to Water Quality Monitoring and Alerting), regulatory standards from adjacent industries and agencies, lessons learned from past ISS incidents or close calls, and relevant Earth-based research.
`;

const bodyMarkdown = `
After it was published, I contributed to other technical briefs like the Spacesuits Overview and the Moon to Mars Architecture, as well as some white papers and internal reference sheets.

In this position, I also managed 8 risk areas (such as medical, sleep, micro host risk, etc.) and performed risk assessments of health and medical operations for the Human System Risk Board. Additionally, the standards would be periodically reviewed and updated if current research supported any changes. These discussions were always so fun because we consulted subject matter experts who were often working on amazing research.

Another project I worked on was tracing historical requirements (from the MSIS, man-systems-integration-standards) to the current standard. This was to have a proper record of where certain requirements came from, and while it wasn't the most exciting job, I became very familiar with the standards, and wrote some code to be able to match the old and new standard language more easily.
`;

export default async function NasaOsdrPage() {
  const introContent = await markdownToHtml(introMarkdown);
  const bodyContent = await markdownToHtml(bodyMarkdown);

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
          <PostTitle>Published briefs on human spaceflight</PostTitle>
          <PostBody>
            <div dangerouslySetInnerHTML={{ __html: introContent }} />
            <div className="my-10 overflow-hidden rounded-sm border border-gray-200 bg-white">
              <iframe
                src={microbiologyBriefUrl}
                title="Microbiology in Human Spaceflight technical brief"
                className="h-[720px] w-full"
              />
            </div>
            <a
              href={microbiologyBriefUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-emerald-800 px-6 py-3 text-sm font-bold uppercase tracking-widest text-emerald-800 transition-colors hover:bg-emerald-800 hover:text-white"
            >
              Open Microbiology Brief
            </a>
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: bodyContent }} />
          </PostBody>
        </article>
      </Container>
    </main>
  );
}
