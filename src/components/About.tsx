import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Zap, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Code2, label: "5+ Years Experience", color: "primary" },
  { icon: Palette, label: "Creative Design", color: "secondary" },
  { icon: Zap, label: "Performance First", color: "accent" },
  { icon: Globe, label: "Global Projects", color: "primary" },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".highlight-card", {
        scrollTrigger: {
          trigger: ".highlight-cards",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
            Get to know me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 neon-text">
            ABOUT ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Card */}
          <div className="about-card glass-card p-8 space-y-6 crt-overlay">
            <h3 className="font-display text-2xl text-secondary">
              Student | Full-Stack Developer | AI Enthusiast
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I am a final-year Electronics and Telecommunications engineering student from Bengaluru, interested in full-stack web development and AI."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I work with JavaScript, TypeScript, and Python, building projects using Next.js, Prisma, Supabase, PostgreSQL, and MongoDB, and deploying them on Vercel and GitHub."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                " I have experience with REST APIs, authentication using Next-Auth and Clerk, Git-based collaboration, and exploring ML and LLM tools like LangChain and Hugging Face. I am eager to learn and take up job or internship opportunities in software engineering."
              }
            </p>
          </div>

          {/* Visual Element */}
          <div className="about-image relative">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Neon frame */}
              <div className="absolute inset-0 rounded-xl border border-primary/30" />
              <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-primary to-transparent" />
              <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-primary to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-px bg-gradient-to-l from-secondary to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-secondary to-transparent" />

              {/* Terminal Style Content */}
              <div className="font-mono text-sm space-y-2">
                <div className="terminal-text">
                  <span className="text-primary">$</span> whoami
                </div>
                <div className="text-foreground/80 pl-4">
                  Fullstack_developer
                </div>
                <div className="terminal-text mt-4">
                  <span className="text-primary">$</span> cat skills.txt
                </div>
                <div className="text-foreground/80 pl-4 space-y-1">
                  <div>→ React / Next.js / TypeScript</div>
                  <div>→ Node.js / Python / Java</div>
                  <div>→ MongoDB / PostgreSQL / Supabase</div>
                  <div>{"→ Express.js / Nest.js / Next.js(server-side)"}</div>
                </div>
                <div className="terminal-text mt-4">
                  <span className="text-primary">$</span> echo $PASSION
                </div>
                <div className="text-foreground/80 pl-4">
                  <div>→ Traveling</div>
                  <div>→ Aviation Enthusiast</div>
                  <div>→ Basketball Player</div>
                  <div>→ Formula 1 Enthusiast</div>

                </div>
                <div className="terminal-text mt-4 animate-pulse">
                  <span className="text-primary">$</span>{" "}
                  <span className="border-r-2 border-primary">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        {/* <div className="highlight-cards grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card glass-card p-6 text-center hover:neon-border transition-all duration-300 group"
            >
              <item.icon
                className={`w-8 h-8 mx-auto mb-3 text-${item.color} group-hover:scale-110 transition-transform`}
              />
              <span className="font-display text-sm tracking-wider text-foreground/80">
                {item.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
