import React from 'react';
import { ArrowUp, Github, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-dark-950 py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded bg-dark-800 border border-surface-border flex items-center justify-center font-bold text-accent">
            DJ
          </div>
          <div>
            <span className="text-text-primary font-semibold">{PROFILE.name}</span>
            <span className="text-text-muted mx-2">•</span>
            <span className="text-text-secondary">{PROFILE.title}</span>
          </div>
        </div>

        {/* Verification & Tech details */}
        <div className="flex items-center gap-2 text-text-muted">
          <ShieldCheck className="w-4 h-4 text-emerald-badge" />
          <span>Engineering After Dark • Verifiable Provenance</span>
        </div>

        {/* Actions: GitHub & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent flex items-center gap-1 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>@DeepxkJadhav</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="p-2 rounded-lg bg-dark-850 hover:bg-dark-800 text-text-secondary hover:text-text-primary border border-surface-border transition-colors flex items-center gap-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-surface-border/40 text-center text-text-muted text-[11px]">
        © {currentYear} {PROFILE.name}. Built with React, TypeScript, and Tailwind CSS. Hosted on GitHub Pages.
      </div>
    </footer>
  );
};
