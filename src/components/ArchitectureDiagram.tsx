import React, { useState } from 'react';
import { ProjectArchitectureComponent, ProjectArchitectureFlow } from '../types';
import { ArrowRight, Box, Cpu, Database, Network } from 'lucide-react';

interface Props {
  components: ProjectArchitectureComponent[];
  dataFlow: ProjectArchitectureFlow[];
  projectName: string;
}

export const ArchitectureDiagram: React.FC<Props> = ({ components, dataFlow, projectName }) => {
  const [selectedComp, setSelectedComp] = useState<number | null>(null);

  const getIconForRole = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('router') || n.includes('engine') || n.includes('decomposition')) return <Cpu className="w-4 h-4 text-accent" />;
    if (n.includes('memory') || n.includes('store') || n.includes('vector') || n.includes('db')) return <Database className="w-4 h-4 text-emerald-400" />;
    if (n.includes('network') || n.includes('sync') || n.includes('flow') || n.includes('broker')) return <Network className="w-4 h-4 text-blue-400" />;
    return <Box className="w-4 h-4 text-purple-400" />;
  };

  return (
    <div className="bg-surface-card border border-surface-border rounded-xl p-5 md:p-6 my-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-surface-border gap-2">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-accent uppercase">System Architecture</span>
          <h4 className="text-base font-semibold text-text-primary tracking-tight">{projectName} — Topological Component Flow</h4>
        </div>
        <span className="text-xs font-mono text-text-muted self-start sm:self-auto px-2.5 py-1 rounded bg-dark-750 border border-surface-border">
          {components.length} Subsystems • {dataFlow.length} Flow Paths
        </span>
      </div>

      {/* Interactive Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {components.map((comp, idx) => {
          const isSelected = selectedComp === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedComp(isSelected ? null : idx)}
              className={`text-left p-3.5 rounded-lg border transition-all duration-200 ${
                isSelected
                  ? 'bg-dark-750 border-accent shadow-sm shadow-accent/10'
                  : 'bg-dark-850 border-surface-border/80 hover:border-surface-border-light hover:bg-dark-800'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {getIconForRole(comp.name)}
                <span className="text-xs font-medium text-text-primary font-mono truncate">{comp.name}</span>
              </div>
              <p className="text-[12px] text-text-secondary leading-relaxed line-clamp-2 mb-2">{comp.role}</p>
              <div className="flex items-center justify-between pt-1 border-t border-surface-border/50 text-[10px] font-mono text-text-muted">
                <span>{comp.tech}</span>
                <span className="text-accent/80 font-mono">0{idx + 1}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Data Flow Pipeline Sequence */}
      <div className="bg-dark-900 border border-surface-border/70 rounded-lg p-4">
        <div className="text-[11px] font-mono text-text-muted tracking-wider uppercase mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Data Flow Propagation Pipeline
        </div>
        <div className="space-y-2">
          {dataFlow.map((flow, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center text-xs gap-2 py-2 px-3 rounded bg-dark-850/70 border border-surface-border/50 font-mono"
            >
              <div className="flex items-center gap-2 shrink-0 min-w-[280px]">
                <span className="text-accent font-semibold">{flow.from}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
                <span className="text-text-primary font-semibold">{flow.to}</span>
              </div>
              <div className="text-text-muted text-[11px] sm:ml-auto flex items-center gap-1">
                <span className="text-accent/60">payload:</span>
                <span className="text-text-secondary">{flow.data}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
