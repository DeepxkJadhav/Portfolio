import React from 'react';
import { CAPABILITIES } from '../data/projects';
import { Cpu, Layers, Binary, Network, Boxes, Terminal, ArrowUpRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-accent" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-emerald-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-cyan-400" />;
      default: return <Cpu className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="capabilities" aria-label="Technical Capabilities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border">
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          <span>03 // Core Domains</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
          Evidence-Backed Engineering Capabilities
        </h2>
        <p className="text-sm sm:text-base text-text-secondary mt-2">
          Structured by architectural purpose rather than arbitrary percentage bars. Each capability links directly to its verified repository implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-xl bg-surface-card border border-surface-border hover:border-surface-border-light transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-dark-750 border border-surface-border">
                  {getIcon(group.iconName)}
                </div>
                <h3 className="text-base font-display font-semibold text-text-primary">
                  {group.domain}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                {group.description}
              </p>

              <div className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg bg-dark-850/80 border border-surface-border/50 text-xs flex flex-col justify-between gap-1"
                  >
                    <div className="font-mono text-text-primary font-medium">{skill.name}</div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
                      <span>Evidenced in:</span>
                      <a
                        href={skill.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>{skill.evidencedBy}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-surface-border/40 text-[10px] font-mono text-text-muted uppercase tracking-wider">
              Domain 0{idx + 1} • Verified in Code
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
