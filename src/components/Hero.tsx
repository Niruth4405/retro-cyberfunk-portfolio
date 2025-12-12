import { useEffect, useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import gsap from "gsap";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-tagline", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-location", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      // Animate hologram
      gsap.from(".hologram-container", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen relative flex items-center overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="space-y-6">
          <div className="hero-title">
            <span className="font-display text-sm tracking-[0.3em] text-primary uppercase block mb-2">
              Welcome to my portfolio
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">I'm</span>
              <span className="neon-text block">NIRUTH</span>
              <span className="neon-text-cyan block">ANANTH</span>
            </h1>
          </div>

          <p className="hero-subtitle font-display text-xl md:text-2xl text-secondary">
            Full-Stack Developer
          </p>

          <p className="hero-tagline text-muted-foreground text-lg max-w-md leading-relaxed">
            {"22-year-old final-year engineering student focussing on\
            full-stack web development and AI. I am keen to keep learning while\
            exploring job and internship opportunities in software engineering."}
          </p>

          <div className="hero-location flex items-center gap-2 text-muted-foreground">
            <div className="relative">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="font-display text-sm tracking-wider">
              Bangalore, IN
            </span>
          </div>

          <div className="hero-cta flex gap-4 pt-4">
            <a
              href="#projects"
              className="glass-card px-8 py-3 font-display text-sm tracking-wider text-foreground hover:text-primary border-primary/50 hover:border-primary neon-border transition-all hover:scale-105"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#footer"
              className="bg-cyber-gradient px-8 py-3 font-display text-sm tracking-wider text-white rounded-xl hover:opacity-90 transition-all hover:scale-105"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* Hologram Container */}
        <div
          ref={imageRef}
          className="hologram-container relative flex justify-center items-center"
        >
          {/* Outer Ring */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-primary/30 animate-rotate-slow" />
          <div
            className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-secondary/20 animate-rotate-slow"
            style={{ animationDirection: "reverse", animationDuration: "25s" }}
          />

          {/* Hologram Frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden animate-float">
            {/* Profile Photo */}
            <img
              src={profilePhoto}
              alt="Niruth Ananth"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-secondary/20" />

            {/* Scan Line Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent scan-line" />
            </div>

            {/* Glitch overlay */}
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full animate-pulse pulse-glow" />
          <div
            className="absolute -bottom-4 -left-4 w-3 h-3 bg-secondary rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/2 -right-8 w-2 h-2 bg-accent rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-display text-xs tracking-widest text-muted-foreground">
          SCROLL
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};
