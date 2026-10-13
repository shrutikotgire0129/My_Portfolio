import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    name: "Imaginify",
    category: "AI Image Transformation SaaS",
    description:
      "Imaginify is a full-stack AI-powered image transformation platform that enables users to upload, edit, organize, and download images through a modern SaaS interface. It combines cloud-based image processing with secure authentication, persistent user data, credit-based usage, and payment integration.",
    highlights: [
      "AI image restoration to enhance old or damaged images.",
      "Generative fill to extend images beyond their original boundaries.",
      "Object removal, object recoloring, and automatic background removal.",
      "Authenticated user accounts with protected routes and personal image management.",
      "Credit-based transformation usage and Stripe-powered credit purchases.",
      "Cloudinary integration for image uploads, storage, transformations, and optimized delivery.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/shrutikotgire0129/imaginify",
    live: "https://imaginify-six-gold.vercel.app/",
  },
  {
    number: "02",
    name: "VibeCall",
    category: "Real-Time Video Conferencing",
    description:
      "VibeCall is a full-stack video conferencing application for creating, scheduling, joining, and managing online meetings. It brings real-time communication, meeting access controls, participant management, and meeting history into a unified interface.",
    highlights: [
      "Create instant meetings, schedule future calls, and join through meeting links.",
      "Personal meeting rooms, upcoming meetings, previous meetings, and a calendar view.",
      "Real-time audio and video communication with microphone and camera controls.",
      "Screen sharing, in-meeting chat, participant lists, and meeting recordings.",
      "Passcode-protected meetings and waiting rooms for controlled access.",
      "Host controls, participant permissions, multiple meeting layouts, and end-call-for-everyone functionality.",
      "Clerk authentication and Stream's real-time video and chat infrastructure.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Clerk",
      "Stream Video",
      "Stream Chat",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github: "https://github.com/shrutikotgire0129/vibeCall",
    live: "https://vibe-call-nine.vercel.app/",
  },
  {
    number: "03",
    name: "Resumind",
    category: "AI Career Optimization Platform",
    description:
      "Resumind is an AI-powered career optimization platform that helps job seekers evaluate their resumes, tailor them to specific job descriptions, improve resume content, organize applications, and measure their job-search progress. It connects resume analysis, job matching, application tracking, and career analytics in one workflow.",
    highlights: [
      "AI resume analysis covering overall score, ATS compatibility, content, structure, tone, and skills.",
      "Job-description analysis that identifies matching and missing skills, keywords, experience alignment, and improvement opportunities.",
      "AI-assisted rewriting of resume sections while preserving the candidate's original facts and explaining suggested changes.",
      "Resume versioning to maintain role-specific resumes and compare their performance.",
      "Job application tracking across wishlist, applied, assessment, interview, offer, and rejection stages.",
      "Application search, filtering, sorting, pagination, follow-up tracking, and CSV export.",
      "Career analytics for ATS score history, keyword coverage, skill coverage, job-specific match scores, and application outcomes.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Google Gemini API",
      "Clerk",
      "Cloudinary",
      "IndexedDB",
      "Tailwind CSS",
      "Recharts",
    ],
    github: "https://github.com/shrutikotgire0129/resumind",
    live: "https://resumind-cyan-seven.vercel.app/",
  },
  {
    number: "04",
    name: "CoinPulse",
    category: "Cryptocurrency Market Tracker",
    description:
      "CoinPulse is a responsive cryptocurrency market tracking application that helps users explore digital assets and understand current market conditions. It uses CoinGecko REST APIs to retrieve market data and presents prices, market statistics, and coin-specific information through a structured, reusable interface.",
    highlights: [
      "Market overview with key cryptocurrency market information.",
      "Browse available cryptocurrencies and explore their market data.",
      "Interactive search modal for quickly finding a coin.",
      "Individual coin detail pages with current prices and market information.",
      "Market capitalization, trading volume, and price-change information.",
      "Server-side API integration with a separated data-fetching layer and typed responses.",
      "Loading and fallback states for asynchronous requests, plus responsive layouts for desktop, tablet, and mobile.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "CoinGecko REST API",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github: "https://github.com/shrutikotgire0129/CoinPulse",
    live: "https://coin-pulse-eight-rho.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="about-page projects-page">
        <div className="about-container">
          <p>SELECTED WORK</p>

          <h1 className="about-title">
            Built with <span>purpose.</span>
          </h1>

          <p className="about-description">
            A closer look at the applications I have built across AI-powered
            tools, real-time communication, career optimization, and financial
            data. Each project reflects my focus on practical functionality,
            thoughtful interfaces, and full-stack engineering.
          </p>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-detail-card" key={project.number}>
                <div className="project-detail-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h2>{project.name}</h2>

                <p className="project-detail-description">
                  {project.description}
                </p>

                <h3 className="project-highlights-heading">Key features</h3>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <h3 className="project-highlights-heading">Technologies</h3>

                <div className="project-tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-detail-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
