import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { Github, ExternalLink, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

interface Props {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<Props> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Agentic AI', 'Supply Chain Security', 'Browser Systems', 'Distributed Systems', 'Cybersecurity ML'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const flagship = PROJECTS[0]; // Sentient Ops
  const secondaryProjects = filteredProjects.filter(p => filter === 'All' ? p.id !== flagship.id : true);

  return (
    <section id="work" aria-label="Selected Engineering Work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-surface-border gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span>01 // Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Systems & Autonomous Architecture
          </h2>
          <p className="text-sm sm:text-base text-text-secondary mt-1 max-w-2xl">
            Production-grade autonomous platforms, topological supply-chain verification, and real-time distributed sandboxes built with verifiable code provenance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-auto font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                filter === cat
                  ? 'bg-accent text-dark-950 border-accent font-semibold'
                  : 'bg-dark-850 text-text-secondary border-surface-border hover:border-surface-border-light hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Feature Editorial Card (Sentient Ops) - displayed when "All" is active */}
      {filter === 'All' && (
        <div className="relative mb-12 rounded-2xl bg-gradient-to-br from-dark-800 via-dark-850 to-dark-900 border border-surface-border p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
                    Flagship Architecture
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-750 text-text-secondary border border-surface-border">
                    {flagship.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-subtle text-emerald-badge border border-emerald-500/20">
                    {flagship.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-text-primary tracking-tight mb-3">
                  {flagship.name}
                </h3>

                <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 font-sans">
                  {flagship.shortDescription}
                </p>

                <div className="p-4 rounded-xl bg-dark-900/90 border border-surface-border/80 mb-6 font-mono text-xs space-y-2">
                  <div className="text-text-muted uppercase text-[10px] tracking-wider">Technical Thesis</div>
                  <div className="text-text-primary">{flagship.thesis}</div>
                </div>

                {/* Key Metrics Strip */}
                {flagship.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {flagship.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-dark-850 border border-surface-border/60">
                        <div className="text-[10px] font-mono text-text-muted">{m.label}</div>
                        <div className="text-xs font-mono text-text-primary font-semibold mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {flagship.technologies.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded bg-dark-800 text-text-muted border border-surface-border/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(flagship)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-dark-950 font-mono text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    <span>Inspect Full Case Study & DAG Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-text-primary font-mono text-xs border border-surface-border transition-colors"
                  >
                    <Github className="w-4 h-4 text-accent" />
                    <span>View Repository</span>
                  </a>

                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-transparent hover:bg-dark-800 text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
                    >
                      <span>Live UI</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Visual Schematic Diagram Preview */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-dark-900 border border-surface-border rounded-xl p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-border text-text-muted text-[11px]">
                  <span className="flex items-center gap-1.5 text-accent">
                    <Cpu className="w-3.5 h-3.5" />
                    Autonomous Task Orchestration
                  </span>
                  <span>v1.0-alpha</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded bg-dark-850 border border-surface-border/50">
                    <span className="text-text-muted text-[10px] block">01 // Input Synthesis</span>
                    <span className="text-text-primary font-semibold">User Goal → Dynamic Task DAG Decomposition</span>
                  </div>
                  <div className="p-3 rounded bg-dark-850 border border-accent/30 bg-accent/5">
                    <span className="text-accent text-[10px] block">02 // Model Arbitration</span>
                    <span className="text-text-primary font-semibold">Token Economics Routing: Claude 3.5 / OpenAI / Gemini / Ollama</span>
                  </div>
                  <div className="p-3 rounded bg-dark-850 border border-surface-border/50">
                    <span className="text-text-muted text-[10px] block">03 // Execution Swarm</span>
                    <span className="text-text-primary font-semibold">Coding Agent, Security Auditor & DevOps Tools</span>
                  </div>
                  <div className="p-3 rounded bg-dark-850 border border-surface-border/50">
                    <span className="text-text-muted text-[10px] block">04 // Memory Persistence</span>
                    <span className="text-text-primary font-semibold">Dual-Tier Context: Redis Ephemeral + Qdrant Embeddings</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/60 text-center">
                  <button
                    onClick={() => onSelectProject(flagship)}
                    className="text-xs text-accent hover:underline inline-flex items-center gap-1"
                  >
                    Click to examine full interactive pipeline flow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondaryProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-xl bg-surface-card border border-surface-border p-6 hover:border-surface-border-light transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-750 text-text-secondary border border-surface-border">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-emerald-badge flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
                {project.name}
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 font-sans line-clamp-3">
                {project.shortDescription}
              </p>

              {/* One-line Thesis */}
              <div className="p-3 rounded-lg bg-dark-850 border border-surface-border/60 mb-5 font-mono text-[11px] text-text-muted">
                <span className="text-accent/80 font-semibold block mb-0.5">Thesis:</span>
                <span className="text-text-secondary">{project.thesis}</span>
              </div>
            </div>

            <div>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1 mb-5">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-text-muted border border-surface-border/50">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-800 text-text-muted">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-surface-border/60">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="p-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-text-secondary hover:text-text-primary border border-surface-border transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo for ${project.name}`}
                      className="p-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-accent hover:text-accent-hover border border-surface-border transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
