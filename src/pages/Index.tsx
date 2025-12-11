import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* CRT Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 crt-overlay opacity-50" />
      
      {/* Main Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
