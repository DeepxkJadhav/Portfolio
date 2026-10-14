import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Milestone, ShieldCheck } from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-auto bg-surface-card border border-surface-border rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-surface-border pb-6 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-medium">
                Deep Dive Case Study
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-750 text-text-secondary border border-surface-border">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-subtle text-emerald-badge border border-emerald-500/20">
                {project.status}
              </span>
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-1 font-sans">
              {project.thesis}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study dialog"
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-dark-750 border border-transparent hover:border-surface-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-750 hover:bg-dark-700 text-text-primary text-xs font-mono border border-surface-border transition-colors"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>Inspect Source Code</span>
            <ExternalLink className="w-3 h-3 text-text-muted" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-dark-950 hover:bg-accent-hover text-xs font-mono font-medium transition-colors"
            >
              <span>Explore Live Interface</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.releaseUrl && (
            <a
              href={project.releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-750 hover:bg-dark-700 text-text-primary text-xs font-mono border border-surface-border transition-colors"
            >
              <span>Download Release v0.1</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>
          )}
        </div>

        {/* Section 1: Problem & Technical Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-dark-850/80 border border-surface-border">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">01. The Problem</h3>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">{caseStudy.problem}</p>
          </div>
          <div className="p-5 rounded-xl bg-dark-850/80 border border-surface-border">
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent mb-2">02. Why It Is Technically Interesting</h3>
            <p className="text-sm text-text-secondary leading-relaxed font-sans">{caseStudy.whyInteresting}</p>
          </div>
        </div>

        {/* Section 2: Architecture Schematics */}
        <ArchitectureDiagram
          projectName={project.name}
          components={caseStudy.architectureComponents}
          dataFlow={caseStudy.dataFlow}
        />

        {/* Section 3: Engineering Decisions & Trade-Offs */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
            03. Architectural Trade-offs & Decisions
          </h3>
          <div className="space-y-4">
            {caseStudy.decisions.map((dec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-dark-850 border border-surface-border">
                <div className="flex items-center gap-2 mb-2 font-mono text-sm text-text-primary font-semibold">
                  <span className="text-accent text-xs">§{idx + 1}</span>
                  <h4>{dec.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary mb-3 leading-relaxed">{dec.description}</p>
                <div className="text-xs p-3 rounded bg-dark-900 border border-surface-border/60 text-text-muted font-mono">
                  <span className="text-accent/90 font-semibold mr-1">Trade-off Analysis:</span>
                  {dec.tradeoff}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Testing & Empirical Verification */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
            04. Empirical Verification & Testing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.verification.map((v, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-dark-850 border border-surface-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-badge shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-text-primary font-semibold mb-1">{v.method}</div>
                  <div className="text-xs text-text-secondary leading-relaxed">{v.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Limitations & Next Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-surface-border">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400/90 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Known Limitations
            </h3>
            <ul className="space-y-2 text-xs text-text-secondary">
              {caseStudy.limitations.map((lim, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-text-muted font-mono mt-0.5">•</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent mb-3 flex items-center gap-1.5">
              <Milestone className="w-4 h-4 text-accent" />
              Next Engineering Milestones
            </h3>
            <ul className="space-y-2 text-xs text-text-secondary">
              {caseStudy.nextMilestones.map((ms, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent font-mono mt-0.5">→</span>
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-surface-border/50 flex flex-wrap items-center justify-between text-[11px] font-mono text-text-muted gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-badge" />
            <span>Verified from repository commit history & test artifacts.</span>
          </div>
          <button
            onClick={onClose}
            className="text-accent hover:underline text-xs"
          >
            Close Case Study [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
