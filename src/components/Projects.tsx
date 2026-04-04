import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, X } from "lucide-react";

import portfolio from "../assets/ProjectPics/Portfolio .png";
import virtual from "../assets/ProjectPics/virtualAi.png";
import summit from "../assets/ProjectPics/summit.png";
import Linkedin from "../assets/ProjectPics/Linkedin.png";
import book from "../assets/ProjectPics/bookAPI.png";
import login from "../assets/ProjectPics/login.png";
import weather from "../assets/ProjectPics/Weather.png";
import spreadsheet from "../assets/ProjectPics/Spreadsheets.png";
import notes from "../assets/ProjectPics/NotesApp.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Portfolio Website",
    category: "Web App",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS",
    longDescription:
      "Personal portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion, featuring animated sections, responsive layout and project highlights.",
    image: portfolio,
    github: "https://github.com/Niruth4405/portfolioWeb",
    live: "https://portfolio-web-2025.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    color: "primary",
  },
  {
    title: "Landing Page",
    category: "Web App",
    description: "Modern landing page with responsive design",
    longDescription:
      "A clean, modern marketing landing page with responsive layout, smooth scroll and CTA-focused sections.",
    image: virtual,
    github: "https://github.com/username/landing",
    live: "https://lp-vfba.vercel.app/",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    color: "secondary",
  },
  {
    title: "IEDC DSCE Website",
    category: "Web App",
    description:
      "Website for Innovation and Entrepreneurship Development Cell to promote E-summit 2024",
    longDescription:
      "Event website for IEDC DSCE’s E‑Summit 2024 with schedules, speaker info and responsive sections for desktop and mobile.",
    image: summit,
    github: "https://github.com/Niruth4405/E-Summit",
    live: "https://e-summit24.vercel.app/",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    color: "accent",
  },
  {
    title: "Linkedin Clone",
    category: "UI Clone",
    description: "A clone of Linkedin home page (Not responsive)",
    longDescription:
      "UI clone of LinkedIn’s home page focusing on layout, typography and component structure.",
    image: Linkedin,
    github: "https://github.com/Niruth4405/Linkedin-Clone",
    live: "https://linkedin-clone-six-orcin.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    color: "primary",
  },
  {
    title: "Finance Dashboard",
    category: "Web App",
    description: " finance dashboard that turns real-time financial data into clear, intelligent insights through a polished multi-page interface with analytics, transactions, accounts, and decision-ready reporting",
    longDescription:
      "A documentation‑focused project built as part of an internship test, showcasing clear layout and structured content.",
    image: book,
    github: "https://github.com/Niruth4405/zorvyn",
    live: "https://finance-dashboard-five-phi.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    color: "secondary",
  },
  {
    title: "Login and Signup page",
    category: "UI Design",
    description: "Login & Signup page design for college website",
    longDescription:
      "Auth UI with separate login and signup flows designed for a college website.",
    image: login,
    github: "https://github.com/Niruth4405/DSCE-project",
    live: "https://dsce-project.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "accent",
  },
  {
    title: "Weather App",
    category: "Web App",
    description: "Regular weather app using OpenWeather API",
    longDescription:
      "Weather dashboard that shows current conditions and basic info using the OpenWeather API.",
    image: weather,
    github: "https://github.com/Niruth4405/Weather-app",
    live: "https://weather-app-three-rust-57.vercel.app/",
    technologies: ["React.js", "CSS", "JavaScript", "OpenWeather API"],
    color: "primary",
  },
  {
    title: "Spreadsheets App",
    category: "Web App",
    description: "A simple spreadsheet application with basic functionalities",
    longDescription:
      "Lightweight spreadsheet‑style app with cells, rows and simple operations implemented in React.",
    image: spreadsheet,
    github: "https://github.com/Niruth4405/Spreadsheets",
    live: "https://spreadsheets-dt5ibkuhv-niruth-ananths-projects.vercel.app/",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    color: "secondary",
  },
  {
    title: "PromptHub (Work in Progress)",
    category: "Web App",
    description:
      "An enterprise level application that allows users to share and discover AI prompts",
    longDescription:
      "PromptHub is a community platform where creators share, discover, and remix AI prompts. Users showcase portfolio-style profiles, publish prompts with outputs, follow others, build collections, and monetize their work. Featuring dark/light mode, analytics, admin dashboard, and rich social features, it empowers prompt engineers to collaborate and grow",
    image: notes,
    github: "https://github.com/Niruth4405/PromptHub",
    live: "https://share.google/xZ7zCFxl67EGfCjdw",
    technologies: [
      "Next.js",
      "Next-auth",
      "Typescript",
      "Prisma",
      "MongoDB",
      "radix-UI"
    ],
    color: "accent",
  },
];

type Project = (typeof projects)[number];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-violet/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
            Selected work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 neon-text-cyan">
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card glass-card relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Hologram Preview */}
              <div className="aspect-video relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${project.color}/30 via-cyber-violet to-${project.color}/10`}
                />

                {hoveredProject === project.title && (
                  <div className="absolute inset-0 animate-flicker">
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent scan-line" />
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke={`hsl(var(--${project.color}))`}
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    strokeDasharray="100%"
                    strokeDashoffset={
                      hoveredProject === project.title ? "0%" : "100%"
                    }
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className={`font-display text-xs tracking-wider text-${project.color} uppercase`}
                >
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-display tracking-wider bg-muted/30 text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-display tracking-wider text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-navy/90 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-cyber-violet to-secondary/20">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-destructive/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl font-bold text-foreground/10">
                  {selectedProject.title.charAt(0)}
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-primary/30" />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <span className="font-display text-sm tracking-wider text-secondary uppercase">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-3xl text-foreground mt-2 mb-4 neon-text">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-display text-sm tracking-wider text-foreground mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-display tracking-wider bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-cyber-gradient font-display text-sm tracking-wider text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-card font-display text-sm tracking-wider text-foreground hover:border-primary/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
