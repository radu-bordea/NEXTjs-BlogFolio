import Image from "next/image";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiSnowflake,
  SiZod,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaMicrosoft } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";

// ── Types ────────────────────────────────────────────────────────────
type Tech = {
  label: string;
  icon: React.ElementType;
  color: string;
};

// ── Stack definitions ────────────────────────────────────────────────
const webStack: Tech[] = [
  { label: "Next.js", icon: SiNextdotjs, color: "#374151" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#0ea5e9" },
  { label: "Prisma", icon: SiPrisma, color: "#7c3aed" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { label: "Zod", icon: SiZod, color: "#3068b7" },
  { label: "MongoDB", icon: SiMongodb, color: "#16a34a" },
  { label: "Vercel", icon: SiVercel, color: "#374151" },
];

const dataStack: Tech[] = [
  { label: "MS Fabric", icon: FaMicrosoft, color: "#0078d4" },
  { label: "Snowflake", icon: SiSnowflake, color: "#29b5e8" },
  { label: "Power BI", icon: BsBarChartFill, color: "#d97706" },
  { label: "SQL", icon: TbSql, color: "#ea580c" },
];

// ── TechCard ─────────────────────────────────────────────────────────
function TechCard({ icon: Icon, label, color }: Tech) {
  return (
    <div className="group flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border border-gray-400/50 bg-gray-200 hover:bg-white hover:border-gray-400 hover:shadow-md transition-all duration-200 cursor-default min-w-[80px]">
      <Icon
        style={{ color }}
        className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
      />
      <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

// ── SectionTitle ─────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xl font-bold text-gray-500 tracking-tight">
        {children}
      </h2>
      <div className="flex-1 h-px bg-gray-400/50" />
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* ── Intro ── */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-14">
          <div className="relative shrink-0 w-24 h-24">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400 shadow-md">
              <Image
                src="/images/profile.jpg"
                alt="profile image"
                className="object-cover w-full h-full"
                width={96}
                height={96}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-gray-300" />
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-sky-100 text-sky-600 border border-sky-200">
                Next.js Developer
              </span>
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-100 text-amber-600 border border-amber-200">
                Data Engineer
              </span>
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-200 text-gray-500 border border-gray-400/40">
                Freelancer
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-500 mb-2 tracking-tight">
              Hey, I&apos;m Radu
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              I build fast web apps and data pipelines — and I love sharing what
              I learn.
            </p>
          </div>
        </div>

        {/* ── Bio ── */}
        <div className="mb-14">
          <SectionTitle>About Me</SectionTitle>
          <div className="rounded-2xl border border-gray-400/40 bg-gray-200/60 p-6 text-gray-600 leading-relaxed text-[0.95rem] space-y-3">
            <p>
              I&apos;m a{" "}
              <span className="text-gray-500 font-semibold">
                freelance Next.js developer
              </span>{" "}
              and{" "}
              <span className="text-gray-500 font-semibold">data engineer</span>{" "}
              based in Romania. I help businesses ship polished, performant web
              products — from landing pages to full-stack SaaS apps — and build
              robust data pipelines that turn raw data into real decisions.
            </p>
            <p>
              On the web side I work with Next.js, TypeScript, Tailwind, and
              modern databases. On the data side I design analytical models and
              deliver insights through{" "}
              <span className="text-gray-500 font-medium">
                Microsoft Fabric
              </span>
              , <span className="text-gray-500 font-medium">Snowflake</span>,
              and <span className="text-gray-500 font-medium">Power BI</span>.
            </p>
            <p className="text-gray-500/70">
              This blog is where I document what I build, what I break, and what
              I learn along the way.
            </p>
          </div>
        </div>

        {/* ── Web Dev Stack ── */}
        <div className="mb-10">
          <SectionTitle>Web Development Stack</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {webStack.map((tech) => (
              <TechCard key={tech.label} {...tech} />
            ))}
          </div>
        </div>

        {/* ── Data Engineering Stack ── */}
        <div className="mb-14">
          <SectionTitle>Data Engineering Stack</SectionTitle>
          <div className="flex flex-wrap gap-3">
            {dataStack.map((tech) => (
              <TechCard key={tech.label} {...tech} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-gray-500 hover:bg-gray-600 text-white text-sm font-bold transition-colors shadow-md"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="px-5 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 text-gray-600 hover:text-gray-700 text-sm font-semibold transition-colors"
          >
            Read Blog
          </a>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 text-gray-600 hover:text-gray-700 text-sm font-semibold transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
