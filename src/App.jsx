import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionTitle } from "./components/SectionTitle";
import { blogPosts, experience, projects, techStackCategories } from "./data";

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

function App() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [showGithubAvatar, setShowGithubAvatar] = useState(true);
  const [stylizedAvatarSrc, setStylizedAvatarSrc] = useState("");
  const [canUseStylizedAvatar, setCanUseStylizedAvatar] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const featuredTechStack = techStackCategories.slice(0, 2);
  const supportingTechStack = techStackCategories.slice(2);

  useEffect(() => {
    const avatarSources = [
      "/avatar-1600.webp.png",
      "/avatar-1600.webp",
      "https://i.postimg.cc/FR4wLGw6/Chat-GPT-Image-9-lut-2026-13-57-38.png"
    ];

    let isMounted = true;

    const tryLoadAvatar = (index = 0) => {
      if (index >= avatarSources.length) {
        if (isMounted) {
          setCanUseStylizedAvatar(false);
        }
        return;
      }

      const candidateSrc = avatarSources[index];
      const testImage = new Image();
      testImage.src = candidateSrc;

      testImage.onload = () => {
        // Avoid visibly pixelated avatars by requiring enough source resolution.
        if (!isMounted) return;
        if (testImage.naturalWidth >= 1000) {
          setStylizedAvatarSrc(candidateSrc);
          setCanUseStylizedAvatar(true);
          return;
        }
        tryLoadAvatar(index + 1);
      };

      testImage.onerror = () => {
        if (!isMounted) return;
        tryLoadAvatar(index + 1);
      };
    };

    tryLoadAvatar();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!canUseStylizedAvatar) return undefined;

    const switchAvatar = setInterval(() => {
      setShowGithubAvatar((prev) => !prev);
    }, 4000);

    return () => clearInterval(switchAvatar);
  }, [canUseStylizedAvatar]);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent. Thank you!");
      formRef.current.reset();
    } catch {
      setStatus("Could not send message yet. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-bg text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.14),transparent_30%)]" />

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <p className="text-sm font-semibold tracking-wider text-neonBlue">DAWID // QA</p>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#skills" className="hover:text-neonBlue">Skills</a>
            <a href="#experience" className="hover:text-neonBlue">Experience</a>
            <a href="#projects" className="hover:text-neonBlue">Projects</a>
            <a href="#contact" className="hover:text-neonBlue">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionAnim}
          className="grid items-center gap-8 rounded-2xl border border-slate-800 bg-card/80 p-6 shadow-neon md:grid-cols-[1.25fr_1fr] md:p-10"
        >
          <div>
            <p className="mb-3 inline-block rounded-full border border-neonPurple/50 px-3 py-1 text-xs uppercase tracking-widest text-neonPurple">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Dawid Chryc - QA Specialist & IT Engineer
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
              Software Test Engineer with 3.5+ years of experience ensuring reliable, high-quality web applications
              through manual, API, and automated testing. I help teams release faster with confidence by preventing
              production issues, improving test coverage, and delivering clear, business-focused quality insights. I also
              apply AI-enabled QA workflows to accelerate test design, defect analysis, and delivery efficiency.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
              {["Automation Testing", "API Verification", "Validation QA", "CI/CD Mindset"].map((chip) => (
                <span key={chip} className="rounded-full border border-neonBlue/40 bg-slate-900 px-3 py-1 text-neonBlue">
                  {chip}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-lg bg-neonBlue px-5 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-neon"
            >
              Hire Me
            </a>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-neonPurple/40 shadow-purple">
            <img
              src="https://github.com/Shongini.png?size=800"
              srcSet="
                https://github.com/Shongini.png?size=400 400w,
                https://github.com/Shongini.png?size=800 800w
              "
              sizes="(max-width: 768px) 100vw, 320px"
              alt="Dawid Chryc portrait from GitHub"
              loading="eager"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${showGithubAvatar || !canUseStylizedAvatar ? "opacity-100" : "opacity-0"}`}
            />
            <img
              src={stylizedAvatarSrc}
              alt="Dawid Chryc portrait stylized"
              loading="eager"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${!showGithubAvatar && canUseStylizedAvatar ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim}>
          <SectionTitle
            eyebrow="Core Toolkit"
            title="Tech Stack"
            subtitle="Primary QA strengths first, followed by supporting tools in a clean enterprise-style layout."
          />
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {featuredTechStack.map(({ title, icon: Icon, items }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-neonBlue/30 bg-gradient-to-br from-slate-900/90 to-slate-950/80 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-neonBlue/70 hover:shadow-neon"
                >
                  <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-neonBlue/80 to-transparent opacity-80" />
                  <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.16),transparent_40%)]" />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-xl border border-neonPurple/40 bg-slate-900/80 p-3 text-xl text-neonBlue transition group-hover:text-white">
                        <Icon />
                      </span>
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-100 transition group-hover:border-neonPurple/50 md:px-3 md:py-1 md:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {supportingTechStack.map(({ title, icon: Icon, items }) => (
                <article
                  key={title}
                  className="group relative flex h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/75 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-neonPurple/50 hover:shadow-purple"
                >
                  <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-neonPurple/70 to-transparent opacity-80" />
                  <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_45%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-sm text-neonBlue transition group-hover:text-white">
                        <Icon />
                      </span>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-200 transition group-hover:border-neonBlue/40 md:px-3 md:py-1 md:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim}>
          <SectionTitle
            eyebrow="Journey"
            title="Experience Timeline"
            subtitle="From operational excellence to validation and QA delivery in regulated and fast-paced environments."
          />
          <div className="space-y-4 border-l border-neonBlue/40 pl-4 md:pl-6">
            {experience.map((item) => (
              <div key={item.company} className="relative rounded-xl border border-slate-800 bg-card p-4">
                <span className="absolute -left-[1.7rem] top-6 h-3 w-3 rounded-full bg-neonBlue md:-left-[2rem]" />
                <p className="text-xs uppercase tracking-widest text-neonPurple">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.company}</h3>
                <p className="text-sm text-neonBlue">{item.role}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neonBlue/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim}>
          <SectionTitle
            eyebrow="Builds"
            title="Featured Projects"
            subtitle="Testing-focused projects with GitHub links and practical demo concepts for vibecoding workflows."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-slate-800 bg-card p-5">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <div className="mt-5 flex gap-3 text-sm">
                  <a className="text-neonBlue hover:text-white" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="text-neonPurple hover:text-white" href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim}>
          <SectionTitle
            eyebrow="Insights"
            title="Latest Blog Posts"
            subtitle="Short practical notes from my QA process and automation approach."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-xl border border-slate-800 bg-card p-5">
                <p className="text-xs text-slate-400">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <Link to="/blog" className="mt-6 inline-block text-sm text-neonBlue hover:text-white">
            Open full blog feed &rarr;
          </Link>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionAnim}>
          <SectionTitle
            eyebrow="Connect"
            title="Contact"
            subtitle="Looking for a QA specialist to improve your release confidence? Let us talk."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-3 rounded-xl border border-slate-800 bg-card p-5">
              <input
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-neonBlue"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-neonBlue"
                name="reply_to"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                className="min-h-28 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-neonBlue"
                name="message"
                placeholder="Your message..."
                required
              />
              <button type="submit" className="rounded-lg bg-neonPurple px-4 py-2 text-sm font-semibold text-white hover:shadow-purple">
                Send Message
              </button>
              <p className="text-xs text-slate-400">{status}</p>
            </form>

            <div className="rounded-xl border border-slate-800 bg-card p-5">
              <p className="text-sm text-slate-300">Find me online and download my CV:</p>
              <div className="mt-4 space-y-3 text-sm">
                <a href="mailto:hello@example.com" className="flex items-center gap-2 text-neonBlue hover:text-white">
                  <FaEnvelope /> Email
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neonBlue hover:text-white">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neonBlue hover:text-white">
                  <FaGithub /> GitHub
                </a>
                <a href="/cv-dawid-chryc.txt" className="inline-block rounded-lg border border-neonGreen/50 px-4 py-2 text-neonGreen hover:bg-neonGreen/10">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>{year} Dawid Chryc. Crafted in React + Vite + Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
