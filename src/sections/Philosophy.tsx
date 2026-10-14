import React from 'react';
import { PROFILE } from '../data/profile';
import { Compass, Check } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" aria-label="Engineering Philosophy" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border">
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-accent">
          <Compass className="w-4 h-4" />
          <span>02 // Operating Principles</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
          Engineering Philosophy
        </h2>
        <p className="text-sm sm:text-base text-text-secondary mt-2">
          Software architectures should be judged by their resilience under edge conditions, failure mode transparency, and verifiable correctness—not theoretical promises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.philosophy.map((item) => (
          <div
            key={item.number}
            className="flex flex-col justify-between p-6 rounded-xl bg-surface-card border border-surface-border hover:border-surface-border-light transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded bg-dark-750 border border-surface-border">
                  {item.number}
                </span>
                <Check className="w-4 h-4 text-emerald-badge/80" />
              </div>
              <h3 className="text-base font-display font-semibold text-text-primary mb-3 tracking-tight">
                {item.principle}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-border/50 text-[11px] font-mono text-text-muted">
              Guiding rule for agent & system pipelines
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
