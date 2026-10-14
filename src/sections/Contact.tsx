import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { Mail, Github, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" aria-label="Contact Information" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-dark-800 to-dark-900 border border-surface-border p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-750 border border-surface-border mb-6 font-mono text-xs text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Initiate Connection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-text-primary tracking-tight mb-4">
            Let's Engineer Reliable <br className="hidden sm:inline" />
            Autonomous Systems.
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-text-secondary leading-relaxed mb-10 font-sans">
            Open for discussions on autonomous multi-agent infrastructure, topological code analysis, and high-impact AI systems engineering roles.
          </p>

          {/* Primary Email Card */}
          <div className="max-w-md mx-auto mb-10 p-2 rounded-2xl bg-dark-900 border border-surface-border flex items-center justify-between gap-2 shadow-inner">
            <div className="flex items-center gap-2.5 px-3 overflow-hidden text-xs font-mono text-text-primary">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="truncate">{PROFILE.email}</span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-text-secondary hover:text-text-primary font-mono text-xs border border-surface-border transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-accent text-dark-950 hover:bg-accent-hover font-mono text-xs font-semibold transition-colors"
              >
                <span>Send Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Additional Links Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-750 text-text-primary border border-surface-border transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>github.com/DeepxkJadhav</span>
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-750 text-text-primary border border-surface-border transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
