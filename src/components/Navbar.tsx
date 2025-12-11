import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#footer' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-3' : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            className="font-display text-2xl font-bold bg-cyber-gradient bg-clip-text text-transparent"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          >
            CYBER<span className="text-primary">.</span>DEV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="font-display text-sm tracking-wider text-foreground/80 hover:text-primary neon-underline transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-500',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-cyber-navy/95 backdrop-blur-xl crt-overlay">
          <div className="absolute inset-0 cyber-grid opacity-20" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="font-display text-3xl tracking-wider text-foreground hover:text-primary transition-all hover:tracking-widest"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'fade-in 0.5s ease-out forwards' : 'none',
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
