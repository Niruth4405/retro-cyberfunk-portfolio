import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", level: 98, category: "Frontend" },
  { name: "CSS", level: 96, category: "Frontend" },
  { name: "Javascript", level: 85, category: "Languages" },
  { name: "MongoDB", level: 92, category: "Database" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Languages" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Three.js", level: 85, category: "Creative" },
  { name: "Python", level: 82, category: "Languages" },
  { name: "Open AI", level: 80, category: "All" },
  { name: "Express.js", level: 78, category: "Backend" },
  { name: "CI/CD", level: 65, category: "DevOps" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "Kubernetes", level: 65, category: "DevOps" },
  { name: "AWS", level: 65, category: "DevOps" },
  { name: "Terraform", level: 40, category: "DevOps" },
  { name: "Supabase", level: 85, category: "All" },
  { name: "GSAP", level: 65, category: "Creative" },
  { name: "Next.js", level: 92, category: "Frontend" },
  { name: "Next.js (server-side)", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 65, category: "Database" },
  { name: "GitHub", level: 70, category: "All" },
  { name: "Prisma", level: 75, category: "Database" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Creative",
  "Database",
  "DevOps",
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Run GSAP only once, not on every category change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-chip", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Tech stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 neon-text">
            SKILLS
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-display text-sm tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground neon-border"
                  : "glass-card text-foreground/70 hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.category}`}
              className="skill-chip glass-card p-5 relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                transform:
                  hoveredSkill === skill.name
                    ? "rotateY(5deg) rotateX(5deg)"
                    : "none",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyber-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>

                {/* Category tag */}
                <span className="inline-block mt-3 text-xs text-muted-foreground font-display tracking-wider">
                  {skill.category}
                </span>
              </div>

              {/* Neon border animation */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Visual Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "10+", label: "Technologies" },
            { value: "10+", label: "Projects" },
            { value: "3+", label: "Years Coding" },
            { value: "∞", label: "Learning" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="font-display text-sm tracking-wider text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
