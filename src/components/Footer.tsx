import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Niruth4405', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/niruth-ananth-19a9961b3/', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/u/0/#inbox', label: 'Email' },
];

const terminalLines = [
  '> Initializing contact protocols...',
  '> Loading social interfaces...',
  '> Connection established.',
  '> Ready for transmission.',
];

export const Footer = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < terminalLines.length) {
        setDisplayedLines(prev => [...prev, terminalLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Easter egg handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <footer id="footer" className="py-20 relative overflow-hidden bg-cyber-navy/80">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal Section */}
        <div className="glass-card p-6 max-w-2xl mx-auto mb-12 font-mono">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">contact_terminal.sh</span>
          </div>
          
          <div className="space-y-2 min-h-[120px]">
            {displayedLines.map((line, index) => (
              <div
                key={index}
                className="terminal-text text-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {line}
              </div>
            ))}
            {displayedLines.length >= terminalLines.length && (
              <div className="terminal-text text-sm animate-pulse">
                {">"} <span className="border-r-2 border-neon-lime pr-1">_</span>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-4 glass-card hover:neon-border transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Let's Build Something <span className="neon-text">Amazing</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>
          <Link
            to="mailto:niruthananth03@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-gradient font-display text-sm tracking-wider text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            GET IN TOUCH
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="font-display tracking-wider">
              © 2024 CYBER.DEV — ALL RIGHTS RESERVED
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-xs">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Easter Egg Terminal Boot */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 bg-cyber-navy flex items-center justify-center p-8 animate-fade-in">
          <div className="font-mono text-accent text-sm max-w-2xl w-full space-y-2">
            <div>CYBER.DEV SYSTEMS v2.0.24</div>
            <div>Initializing boot sequence...</div>
            <div className="text-primary">[OK] Loading neural interface</div>
            <div className="text-primary">[OK] Establishing quantum link</div>
            <div className="text-primary">[OK] Synchronizing with mainframe</div>
            <div className="text-secondary mt-4">
              {"// Thanks for exploring! You found the easter egg. 🎮"}
            </div>
            <div className="text-muted-foreground mt-2">
              Press any key to return...
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
