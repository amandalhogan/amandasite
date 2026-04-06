import Starfield from '@/app/_components/starfield'
import Link from "next/link"
import Script from "next/script"

export default function Home() {
  const timeline = [
    {
      period: "2025–Present",
      role: "Operations Engineer",
      category: "Industry",
      org: "Labric, Inc.",
      detail: "Operations Engineer",
      link: "https://labric.co",
      linkLabel: "Company Site",
      tags: ["Automation", "SaaS"],
    },
    {
      period: "2024–2025",
      role: "Education",
      category: "Education",
      org: "Rice University",
      detail:
        "M.S. in Space Studies (Space Systems concentration)",
      tags: ["Space Systems", "GPA 3.7"],
    },
    {
      period: "2024–2025",
      role: "Research",
      category: "Industry",
      org: "NASA",
      detail: "Microbiology in Spaceflight Technical Brief",
      link: "https://www.nasa.gov/wp-content/uploads/2024/05/microbiology-in-space-overview.pdf?emrc=67da361640dd3",
      tags: ["Space Biology", "Technical Brief"],
    },
    {
      period: "2024",
      role: "Research",
      category: "Research",
      org: "Baylor College of Medicine",
      detail: "Computational SIDS Machine Learning Project",
      link: "https://youtu.be/dX1PIfC2Y28?si=IvuT9SwqulJWoNZB",
      tags: ["ML", "Health"],
    },
    {
      period: "2023",
      role: "Research",
      category: "Industry",
      org: "Pivot Bio",
      detail: "Soybean Microbe Engineering",
      link: "https://www.pivotbio.com/",
      linkLabel: "Company Site",
      tags: ["Synthetic Biology", "AgTech"],
    },
    {
      period: "2022",
      role: "Research",
      category: "Industry",
      org: "Cemvita, Inc.",
      detail: "Hydrogen-Producing Microbes",
      link: "https://www.cemvita.com/",
      linkLabel: "Company Site",
      tags: ["Bioengineering", "Energy"],
    },
    {
      period: "2021–2024",
      role: "Research",
      category: "Research",
      org: "Rice University",
      detail: "Coral Genomics Research",
      tags: ["Genomics", "Climate"],
    },
    {
      period: "2020–2024",
      role: "Education",
      category: "Education",
      org: "Rice University",
      detail:
        "B.S. in Biosciences (Cell Biology & Genetics concentration), Minor in Data Science",
      tags: ["Biosciences", "Data Science"],
    },
  ]

  return (
    <main className="min-h-screen bg-[#fdfbf7]"> {/* Garden White background */}
      
      {/* 1. PROFESSIONAL HEADER (Melanie Daveid vibe) */}
      <section className="max-w-5xl mx-auto pt-24 pb-12 px-6">
        <h1 className="text-6xl font-light tracking-tighter text-gray-900 mb-4">
          Amanda <span className="font-serif italic text-emerald-800">L.</span> Hogan
        </h1>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-widest text-gray-500">
          <span>M.S. Space Studies</span>
          <span>•</span>
          <span>Bio-Systems Designer</span>
          <span>•</span>
          <span>Los Angeles</span>
        </div>
      </section>

      {/* 2. PROJECT GRID (Format.com vibe) */}
      <section className="max-w-5xl mx-auto px-6 py-20 rounded-t-[100px] overflow-hidden">
        <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-12">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Project 1: Mechanical Lily */}
          <Link href="/projects/mechanical-lily" className="group block">
            <div className="overflow-hidden bg-gray-100 mb-4 rounded-sm">
              <img 
                src="/assets/img/Project4_mech.png" 
                alt="Mechanical Lily"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium">Mechanical Lily</h3>
            <p className="text-gray-500 font-serif italic">Light-sensitive kinetic sculpture</p>
          </Link>

          {/* Project 2: NASA Research */}
          <Link href="/projects/nasa-osdr" className="group block md:mt-24">
            <div className="overflow-hidden bg-gray-100 mb-4 rounded-sm">
              <img 
                src="/assets/img/Project5_agent.jpg" 
                alt="NASA Research"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium">NASA OSDR</h3>
            <p className="text-gray-500 font-serif italic">Microbiology in spaceflight technical brief</p>
          </Link>

          {/* Project 3: Get2Know Game */}
          <Link href="/projects/get-2-know" className="group block md:mt-12">
            <div className="overflow-hidden bg-gray-100 mb-4 rounded-sm">
              <img
                src="/assets/img/Project1_Get2Know2.png"
                alt="Get2Know Game"
                className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium">Get2Know Game</h3>
            <p className="text-gray-500 font-serif italic">
              A python (pygame) &quot;Get to Know Amanda&quot; Q &amp; A style click-through game.
            </p>
          </Link>

          {/* Project 4: Data Visualization */}
          <a
            href="https://sites.google.com/view/amandahogan/home"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="overflow-hidden bg-gray-100 mb-4 rounded-sm">
              <img
                src="/assets/img/Project2_DataViz2.jpg"
                alt="Airline Data Viz"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium">Airline Data Viz</h3>
            <p className="text-gray-500 font-serif italic">
              Data visualizations for a data science course.
            </p>
          </a>

        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all text-sm uppercase tracking-widest"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* 3. CREATIVE ZONE: THE GARDEN (Space vibes) */}
      <section className="relative bg-[#0a0a0c] text-white py-32 px-6 mt-20 rounded-t-[100px] overflow-hidden">
        <Starfield />        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">The Digital Garden</h2>
          <p className="text-gray-400 mb-12 leading-relaxed">
            A collection of logs on carnivorous plants, oil painting, and the intersection of biology and space exploration.
          </p>
          
          {/* Link to your Posts */}
          <a 
        href="/posts" 
      className="inline-block border border-emerald-500 text-emerald-400 px-8 py-3 rounded-full hover:bg-emerald-500 hover:text-white transition-all font-medium"
    >
      Open the Logs
    </a>
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
              Experience Timeline
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
              Research & Applied Work
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-400">
            <span className="h-[1px] w-16 bg-gray-300" />
            2020–Present
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isRight = i % 2 === 1
              return (
                <div
                  key={`${item.org}-${item.detail}`}
                  className={`relative md:flex ${isRight ? "md:justify-end" : "md:justify-start"}`}
                >
                  <div className="absolute left-[7px] md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full bg-emerald-600 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />

                  <div
                    className={`ml-10 md:ml-0 md:w-[46%] rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-6 py-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${
                      isRight ? "md:mr-0 md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400">
                      <span>{item.period}</span>
                      <span className="h-[1px] w-8 bg-gray-300" />
                      <span>{item.category}</span>
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mt-2">
                      {item.org}
                    </h4>
                    <p className="text-gray-600 mt-1">{item.detail}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs uppercase tracking-widest text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-emerald-700 mt-4 hover:text-emerald-900"
                      >
                        {item.linkLabel ?? "View Source"}
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. MORE ABOUT ME */}
      <section className="bg-[#63967d] py-20 px-6 relative rounded-t-[100px] overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[320px] h-[320px]">
              <img
                src="/assets/img/water.jpg"
                alt=""
                className="absolute left-0 top-6 w-40 h-40 object-cover rounded-2xl rotate-[-6deg] shadow-md"
              />
              <img
                src="/assets/img/swell.jpg"
                alt=""
                className="absolute right-0 top-0 w-40 h-40 object-cover rounded-2xl rotate-[6deg] shadow-md"
              />
              <img
                src="/assets/img/leaves1.jpg"
                alt=""
                className="absolute left-6 bottom-0 w-44 h-28 object-cover rounded-2xl rotate-[3deg] shadow-md"
              />
              <img
                src="/assets/AmandaHeadshot.jpg"
                alt="Amanda L. Hogan"
                className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              More about me
            </h2>
            <div className="space-y-4 text-gray-900">
              <p className="text-gray-900 leading-relaxed">
                I love biology, human systems, and space. I am driven by curiosity and creativity. To get in touch, please send me an email, or connect with me on LinkedIn!
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="mailto:amanda347h@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-gray-900 hover:text-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                  amanda347h@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/amandahogan17"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gray-900 hover:text-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-800"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                  </svg>
                  linkedin.com/in/amandahogan17
                </a>
              </div>
            </div>
            </div>
            <div className="flex justify-start lg:justify-end mt-6 lg:mt-0">
              <div className="flex flex-col items-start">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-700 mb-3">
                  Currently reading
                </p>
                <div id="gr_custom_widget_1775432761">
                  <div className="gr_custom_container_1775432761">
                    <h2 className="gr_custom_header_1775432761">
                      <a
                        style={{ textDecoration: "none" }}
                        rel="nofollow"
                        href="https://www.goodreads.com/review/list/125248775-amanda?shelf=currently-reading&utm_medium=api&utm_source=custom_widget"
                      >
                        What I&#39;m Currently Reading:
                      </a>
                    </h2>
                    <div className="gr_custom_each_container_1775432761">
                      <div className="gr_custom_book_container_1775432761">
                        <a
                          title="The Emperor of All Maladies: A Biography of Cancer"
                          rel="nofollow"
                          href="https://www.goodreads.com/review/show/7395615103?utm_medium=api&utm_source=custom_widget"
                        >
                          <img
                            alt="The Emperor of All Maladies: A Biography of Cancer"
                            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1280771091l/7170627._SX98_.jpg"
                          />
                        </a>
                      </div>
                      <div className="gr_custom_title_1775432761">
                        <a
                          rel="nofollow"
                          href="https://www.goodreads.com/review/show/7395615103?utm_medium=api&utm_source=custom_widget"
                        >
                          The Emperor of All Maladies: A Biography of Cancer
                        </a>
                      </div>
                      <div className="gr_custom_author_1775432761">
                        by{" "}
                        <a
                          rel="nofollow"
                          href="https://www.goodreads.com/author/show/3032451.Siddhartha_Mukherjee"
                        >
                          Siddhartha Mukherjee
                        </a>
                      </div>
                    </div>
                    <br style={{ clear: "both" }} />
                    <center>
                      <a rel="nofollow" href="https://www.goodreads.com/">
                        <img
                          alt="goodreads.com"
                          style={{ border: 0 }}
                          src="https://s.gr-assets.com/images/widget/widget_logo.gif"
                        />
                      </a>
                    </center>
                    <noscript>
                      Share{" "}
                      <a rel="nofollow" href="https://www.goodreads.com/">
                        book reviews
                      </a>{" "}
                      and ratings with Amanda, and even join a{" "}
                      <a rel="nofollow" href="https://www.goodreads.com/group">
                        book club
                      </a>{" "}
                      on Goodreads.
                    </noscript>
                  </div>
                </div>

                <Script
                  src="https://www.goodreads.com/review/custom_widget/125248775.What%20I'm%20Currently%20Reading:?cover_position=left&cover_size=medium&num_books=1&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_updated&widget_bg_color=fffefa&widget_bg_transparent=&widget_border_width=1&widget_id=1775432761&widget_text_color=63967d&widget_title_size=small&widget_width=medium"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/favicon/transparent-fav.png"
          alt="Site mark"
          className="absolute bottom-6 right-6 w-10 h-10 opacity-90"
        />
      </section>
    </main>
  )
}
