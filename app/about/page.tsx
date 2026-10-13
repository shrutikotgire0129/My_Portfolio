import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiGooglegemini,
  SiMongodb,
  SiConvex,
  SiMongoose,
  SiCloudinary,
  SiClerk,
  SiStripe,
  SiGit,
  SiGithub,
  SiPostman,
  SiReacthookform,
  SiZod,
} from "react-icons/si";
import {
  FiBarChart2,
  FiDatabase,
  FiGlobe,
  FiMessageCircle,
  FiServer,
  FiVideo,
} from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Skill = {
  name: string;
  icon?: IconType;
  fallback?: string;
};

type SkillGroup = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: SiCplusplus,
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Next.js Server Actions", icon: SiNextdotjs },
    ],
  },
  {
    title: "AI & APIs",
    icon: FiGlobe,
    skills: [
      { name: "Google Gemini API", icon: SiGooglegemini },
      { name: "REST APIs", icon: FiGlobe },
      { name: "CoinGecko API", fallback: "CG" },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Convex", icon: SiConvex },
      { name: "Mongoose", icon: SiMongoose },
      { name: "IndexedDB", icon: FiDatabase },
    ],
  },
  {
    title: "Cloud & Media",
    icon: SiCloudinary,
    skills: [
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Stream Video SDK", icon: FiVideo },
      { name: "Stream Chat SDK", icon: FiMessageCircle },
      { name: "Stream Node SDK", icon: FiServer },
    ],
  },
  {
    title: "Authentication & Payments",
    icon: SiClerk,
    skills: [
      { name: "Clerk", icon: SiClerk },
      { name: "Stripe", icon: SiStripe },
    ],
  },
  {
    title: "Libraries & Tools",
    icon: SiGithub,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Recharts", icon: FiBarChart2 },
      { name: "Zod", icon: SiZod },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="about-page about-main-page">
        <p>GET TO KNOW ME</p>

        <h1 className="about-title">
          A little about <span>me.</span>
        </h1>

        <div className="about-intro">
          <p>
            I’m Shruti Kotgire, a software engineer and full-stack developer who
            enjoys turning ideas into useful, thoughtfully designed web
            applications.
          </p>

          <p>
            I work with React, Next.js, TypeScript, and Node.js. Through
            hands-on projects, I’ve explored authentication, database
            integration, APIs, AI-powered features, and responsive user
            interfaces.
          </p>

          <p>
            I’m continuously strengthening my problem-solving skills and
            computer science fundamentals while working toward software
            engineering opportunities where I can learn, contribute, and grow.
          </p>
        </div>

        <div className="about-divider" />

        <section className="about-skills">
          <p>WHAT I WORK WITH</p>

          <h2 className="about-section-title">Technical skills</h2>

          <p className="skills-description">
            Technologies and tools I use to build full-stack web applications.
          </p>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-heading">
                    <GroupIcon
                      className="skill-category-icon"
                      aria-hidden="true"
                    />
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <span className="skill-tag" key={skill.name}>
                          {SkillIcon ? (
                            <SkillIcon
                              className="skill-logo"
                              aria-hidden="true"
                            />
                          ) : (
                            <span className="skill-fallback" aria-hidden="true">
                              {skill.fallback}
                            </span>
                          )}

                          <span>{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="about-divider" />

        <section className="about-resume">
          <div>
            <p>MY RESUME</p>

            <h2 className="about-section-title">
              A closer look at my journey.
            </h2>

            <p className="resume-description">
              Explore my technical skills, projects, and professional profile.
            </p>
          </div>

          <a
            href="/assets/Resume%20Software.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            View Resume <span aria-hidden="true">↗</span>
          </a>
        </section>
      </section>
      <Footer />
    </main>
  );
}
