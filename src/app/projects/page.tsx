import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/_components/container";

export const metadata: Metadata = {
  title: "Projects | Amanda L. Hogan",
  description: "Selected projects by Amanda L. Hogan.",
};

const projects = [
  {
    title: "Mechanical Lily",
    href: "/projects/mechanical-lily",
    image: "/assets/img/Project4_mech.png",
    blurb: "Light-sensitive kinetic sculpture",
  },
  {
    title: "NASA OSDR",
    href: "/projects/nasa-osdr",
    image: "/assets/img/Project5_agent.jpg",
    blurb: "Microbiology in spaceflight technical brief",
  },
  {
    title: "Get2Know Game",
    href: "/projects/get-2-know",
    image: "/assets/img/Project1_Get2Know2.png",
    blurb:
      'A python (pygame) "Get to Know Amanda" Q & A style click-through game.',
    external: false,
  },
  {
    title: "Airline Data Viz",
    href: "https://sites.google.com/view/amandahogan/home",
    image: "/assets/img/Project2_DataViz2.jpg",
    blurb: "Data visualizations for a data science course.",
    external: true,
  },
  {
    title: "Silly Compounds",
    href: "/projects/silly-compounds",
    image: "/assets/img/Project3_Silly2.png",
    blurb:
      'One of my first python "games," meant to be a fun way of introducing compound words to kids.',
    external: false,
  },
  {
    title: "OpenAI API Agents",
    href: "/projects/openai-api-agents",
    image: "/assets/img/Project5_agent.jpg",
    blurb:
      "Playing around with agentic AI to create personal assistants",
    external: false,
  },
  {
    title: "Range: art and design",
    href: "https://lying-look-30b.notion.site/A-s-Art-2c0028c5919880a7aa22ddd370c907ab?source=copy_link",
    image: "/assets/img/range.jpg",
    blurb:
      "Understanding how my many interests, including creative persuits, fit together.",
    external: true,
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <section className="mb-32 pt-12">
          <h1 className="text-4xl font-serif mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="overflow-hidden bg-gray-100 mb-3 rounded-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={
                        project.title === "Get2Know Game"
                          ? "w-full aspect-[4/3] max-h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          : "w-full aspect-[3/4] max-h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    />
                  </div>
                  <h2 className="text-lg font-medium">{project.title}</h2>
                  <p className="text-gray-500 font-serif italic">
                    {project.blurb}
                  </p>
                </>
              );

              return project.external ? (
                <a
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group max-w-[420px]"
                >
                  {content}
                </a>
              ) : (
                <Link key={project.href} href={project.href} className="group max-w-[420px]">
                  {content}
                </Link>
              );
            })}
          </div>
        </section>
      </Container>
    </main>
  );
}
