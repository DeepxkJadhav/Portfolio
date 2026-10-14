import React from 'react';
import { ArrowDown, Github, Mail, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { ComputationalGraphCanvas } from '../components/ComputationalGraphCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Engineering Focus"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient from-dark-850 via-dark-900 to-dark-950"
    >
      {/* Background Interactive Signature Visual */}
      <ComputationalGraphCanvas />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      {/* Atmospheric Top Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full z-10 flex flex-col items-start">
        {/* Verification / Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-850 border border-surface-border mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-text-secondary tracking-wide">
            {PROFILE.title}
          </span>
          <span className="hidden sm:inline-block text-text-muted">•</span>
          <span className="hidden sm:inline-block text-xs font-mono text-text-muted">
            {PROFILE.location}
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-text-primary tracking-tightest leading-[1.06] mb-6">
          BUILDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-[#d8e2ff] to-accent">
            INTELLIGENT SYSTEMS.
          </span>
        </h1>

        {/* Narrative Thesis Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-text-secondary font-sans leading-relaxed mb-10">
          {PROFILE.tagline}
        </p>

        {/* Primary and Secondary CTA Button Group */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-dark-950 font-mono text-xs font-semibold hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-800 text-text-primary font-mono text-xs border border-surface-border hover:border-surface-border-light hover:bg-dark-750 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent text-text-muted hover:text-text-primary font-mono text-xs transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Real-World Systems Pillars Strip */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-surface-border/60">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/40 border border-surface-border/50">
            <Cpu className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-text-primary font-semibold">Autonomous Workflows</div>
              <div className="text-[11px] text-text-muted mt-0.5">Task DAG decomposition & multi-agent swarms</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/40 border border-surface-border/50">
            <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-text-primary font-semibold">Topological Integrity</div>
              <div className="text-[11px] text-text-muted mt-0.5">Persistent homology & supply-chain drift analysis</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/40 border border-surface-border/50">
            <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-text-primary font-semibold">Multi-Model Routing</div>
              <div className="text-[11px] text-text-muted mt-0.5">Dynamic cost/latency arbitration across LLMs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="relative mt-12 mx-auto flex items-center justify-center text-text-muted">
        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="flex flex-col items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase hover:text-accent transition-colors"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
