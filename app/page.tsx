import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    name: "Imaginify",
    category: "AI IMAGE TRANSFORMATION",
    description:
      "An AI-powered image editing platform with intelligent transformations, credit management, and payments.",
    technologies: ["Next.js", "TypeScript", "Cloudinary"],
    href: "/projects/",
    symbol: "✳",
    visualClass: "project-visual-imaginify",
  },
  {
    number: "02",
    name: "VibeCall",
    category: "REAL-TIME COMMUNICATION",
    description:
      "A video conferencing platform with meeting rooms, screen sharing, scheduling, and host controls.",
    technologies: ["Next.js", "Stream", "Clerk"],
    href: "/projects/",
    symbol: "◉",
    visualClass: "project-visual-vibecall",
  },
  {
    number: "03",
    name: "Resumind",
    category: "AI CAREER PLATFORM",
    description:
      "An AI-powered career platform for resume analysis, job matching, and actionable improvement insights.",
    technologies: ["React", "TypeScript", "AI"],
    href: "/projects/",
    symbol: "▤",
    visualClass: "project-visual-resumind",
  },
  {
    number: "04",
    name: "CoinPulse",
    category: "CRYPTO MARKET DATA",
    description:
      "A cryptocurrency market explorer featuring coin search, market statistics, and detailed coin information.",
    technologies: ["Next.js", "TypeScript", "CoinGecko"],
    href: "/projects/",
    symbol: "↗",
    visualClass: "project-visual-coinpulse",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="hero-section">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
          </div>

          <p className="hero-greeting">Hi, I&apos;m</p>

          <h1 className="hero-title">Shruti Kotgire</h1>

          <h2 className="hero-role">Software Engineer</h2>

          <p className="hero-description">
            I build thoughtful, high-performance web applications that solve
            real-world problems.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button-primary">
              View My Work <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/contact" className="button-secondary">
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span className="decoration-ring decoration-ring-one" />
          <span className="decoration-ring decoration-ring-two" />
          <span className="decoration-spark">✳</span>
          <span className="decoration-label">DESIGN · DEVELOP · DELIVER</span>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <div>
            <p>A COLLECTION OF MY WORK</p>

            <h2>
              Things I&apos;ve <span>built.</span>
            </h2>

            <p className="section-description">
              A collection of projects where ideas become useful, thoughtfully
              engineered experiences.
            </p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="project-card"
            >
              <div
                className={`project-visual ${project.visualClass}`}
                aria-hidden="true"
              >
                <span className="project-symbol">{project.symbol}</span>

                <span className="project-visual-name">{project.name}</span>

                <span className="project-open-icon">↗</span>
              </div>

              <div className="project-card-content">
                <div className="project-card-heading">
                  <div>
                    <p className="project-home-category">{project.category}</p>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="technology-tag">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
