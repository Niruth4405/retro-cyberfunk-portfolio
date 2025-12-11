import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Quantum Dashboard',
    category: 'Web App',
    description: 'A real-time analytics dashboard with 3D data visualization and predictive insights.',
    longDescription: 'Built using React, Three.js, and D3.js, this dashboard provides enterprise clients with real-time analytics, predictive modeling, and stunning 3D data visualizations. Features include customizable widgets, real-time collaboration, and AI-powered insights.',
    technologies: ['React', 'Three.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    color: 'primary',
    image: null,
  },
  {
    id: 2,
    title: 'Neural Art Generator',
    category: 'Creative Tech',
    description: 'AI-powered generative art platform using machine learning and WebGL.',
    longDescription: 'An experimental platform that combines machine learning with creative coding. Users can generate unique artworks using various AI models, customize parameters in real-time, and export their creations as NFTs or high-resolution prints.',
    technologies: ['Python', 'TensorFlow', 'WebGL', 'GLSL', 'React'],
    color: 'secondary',
    image: null,
  },
  {
    id: 3,
    title: 'CryptoVault',
    category: 'Fintech',
    description: 'Secure cryptocurrency portfolio manager with advanced trading features.',
    longDescription: 'A comprehensive cryptocurrency management platform featuring real-time portfolio tracking, automated trading strategies, and bank-grade security. Integrates with major exchanges and provides detailed analytics.',
    technologies: ['Next.js', 'TypeScript', 'Web3.js', 'Redis', 'AWS'],
    color: 'accent',
    image: null,
  },
  {
    id: 4,
    title: 'EcoTrack',
    category: 'Mobile App',
    description: 'Carbon footprint tracker with gamification and community challenges.',
    longDescription: 'A mobile-first application that helps users track and reduce their carbon footprint through gamification, community challenges, and personalized recommendations. Features include barcode scanning, location-based suggestions, and social sharing.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    color: 'primary',
    image: null,
  },
  {
    id: 5,
    title: 'SoundScape VR',
    category: 'XR Experience',
    description: 'Immersive VR music visualization experience with spatial audio.',
    longDescription: 'An award-winning VR experience that transforms music into immersive visual landscapes. Features real-time audio analysis, procedural generation, and support for major VR platforms. Used by artists and venues worldwide.',
    technologies: ['Unity', 'C#', 'FMOD', 'Oculus SDK', 'HLSL'],
    color: 'secondary',
    image: null,
  },
  {
    id: 6,
    title: 'DevFlow',
    category: 'SaaS',
    description: 'Developer productivity platform with AI-assisted code review.',
    longDescription: 'A comprehensive developer productivity suite featuring AI-powered code review, automated documentation, team analytics, and integration with popular development tools. Helps teams ship better code faster.',
    technologies: ['Next.js', 'OpenAI', 'GraphQL', 'Prisma', 'Vercel'],
    color: 'accent',
    image: null,
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-violet/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">Selected work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 neon-text-cyan">
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Hologram Preview */}
              <div className="aspect-video relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/30 via-cyber-violet to-${project.color}/10`} />
                
                {/* Glitch effect on hover */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 animate-flicker">
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                )}
                
                {/* Project icon/preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent scan-line" />
                </div>

                {/* Neon frame draw effect */}
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
                    strokeDashoffset={hoveredProject === project.id ? '0%' : '100%'}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className={`font-display text-xs tracking-wider text-${project.color} uppercase`}>
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
              {/* Neon border */}
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
                <h4 className="font-display text-sm tracking-wider text-foreground mb-3">Technologies</h4>
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
                <button className="flex items-center gap-2 px-6 py-3 bg-cyber-gradient font-display text-sm tracking-wider text-white rounded-lg hover:opacity-90 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </button>
                <button className="flex items-center gap-2 px-6 py-3 glass-card font-display text-sm tracking-wider text-foreground hover:border-primary/50 transition-colors">
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
