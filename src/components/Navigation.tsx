import React, { useState, useEffect } from 'react';
import { Github, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'capabilities', 'philosophy', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work', id: 'work' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Credentials', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          aria-label="Deepak Jadhav — Home"
        >
          <div className="w-8 h-8 rounded-lg bg-dark-800 border border-surface-border flex items-center justify-center font-mono text-xs font-bold text-accent group-hover:border-accent/50 transition-colors">
            DJ
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-text-primary group-hover:text-accent transition-colors font-display">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
              AI Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-850/60 p-1.5 rounded-full border border-surface-border/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-dark-750 text-accent font-medium shadow-sm border border-surface-border'
                    : 'text-text-secondary hover:text-text-primary hover:bg-dark-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Secondary External Links */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 border border-surface-border hover:border-surface-border-light text-text-primary hover:text-accent text-xs font-mono transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 border border-surface-border hover:border-surface-border-light text-text-primary hover:text-accent text-xs font-mono transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg bg-dark-850 border border-surface-border text-text-secondary hover:text-text-primary transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-b border-surface-border px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-text-secondary hover:text-accent hover:bg-dark-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-surface-border flex flex-col gap-2 font-mono text-xs">
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-dark-850 border border-surface-border text-text-primary"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-dark-950 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub (@DeepxkJadhav)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
