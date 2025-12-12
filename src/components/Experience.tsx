import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Prompt Engineering Intern",
    company: "Alesa AI",
    period: "September 2025 - October 2025",
    description:
      "worked on prompt engineering and evaluation for AI‑generated images targeting diverse countries and cultures. I designed and iteratively refined prompts across multiple large language models (including ChatGPT and Perplexity) to generate high‑quality image briefs, then compared model outputs to identify strengths, weaknesses, and failure modes. My role involved systematically optimizing prompts to better align with creative and business requirements, documenting best practices, and helping improve the consistency and reliability of the image generation pipeline",
    technologies: [
      "Chatgpt",
      "Gemini Nano-Banana model",
      "Perplexity",
      "Claude",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Spawn Labs",
    period: "2024 - 2025",
    description:
      " worked as a web development intern responsible for building the company’s website end to end according to the founder’s requirements. I collaborated closely with the design team to translate design mockups into responsive, production-ready pages, and implemented the frontend using Next.js, TypeScript, shadcn, and Aceternity UI to deliver a modern, consistent interface. I managed the project via GitHub, handling version control and iterative updates to ensure the codebase remained clean, maintainable, and aligned with evolving product needs.",
    technologies: ["Next.js", "Typescript", "Shadcn", "Tailwindcss","Aceternity UI"],
  },
  
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top",
      });

      gsap.from(".experience-card", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
            My journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 neon-text-cyan">
            EXPERIENCE
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-card relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary pulse-glow hidden md:block" />

                {/* Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card p-6 hover:neon-border transition-all duration-500 group">
                    {/* Flicker effect on hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:animate-flicker pointer-events-none rounded-xl" />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-secondary mt-1">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-display text-xs tracking-wider">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-display tracking-wider bg-muted/50 text-foreground/80 rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
