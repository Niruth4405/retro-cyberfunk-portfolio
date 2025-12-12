import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Bachelor of Engineering in Electronics & Telecommunications',
    school: 'Dayananda Sagar College of Engineering',
    period: '2022 - 2026 (Expected)',
    focus: 'Matlab, Digital communications, Wireless communication, Microcontrollers',
  },
];

export const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.education-card', {
        scrollTrigger: {
          trigger: '.education-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Scan bar effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scan-line" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-sm tracking-[0.3em] text-accent uppercase">
            Learning path
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="text-accent">EDUCATION</span>
          </h2>
        </div>

        {/* Education Cards centered */}
        <div className="flex justify-center mb-16">
          <div className="education-grid grid grid-cols-1 max-w-xl w-full gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="education-card glass-card p-6 relative overflow-hidden group"
              >
                {/* Terminal frame effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-muted/30 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-secondary/60" />
                  <span className="font-mono text-xs text-muted-foreground ml-4">
                    education_record.log
                  </span>
                </div>

                <div className="pt-10 space-y-4">
                  {/* Icon and Degree */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{edu.degree}</h3>
                      <p className="text-secondary text-sm">{edu.school}</p>
                    </div>
                  </div>

                  {/* Period and Focus */}
                  <div className="font-mono text-sm space-y-2 text-muted-foreground">
                    <div>
                      <span className="text-primary">period:</span> {edu.period}
                    </div>
                    <div>
                      <span className="text-primary">focus:</span> {edu.focus}
                    </div>
                  </div>
                </div>

                {/* Typing animation cursor */}
                <div className="absolute bottom-4 right-4 font-mono text-xs text-primary animate-pulse">
                  <span className="border-r-2 border-primary pr-1">_</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
