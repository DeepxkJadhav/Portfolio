import React from 'react';
import { PROFILE } from '../data/profile';
import { Award, GraduationCap, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" aria-label="About & Credentials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography & Photo */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span>05 // Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight mb-6">
            Engineering Identity
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans mb-8">
            {PROFILE.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-surface-card border border-surface-border font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-text-muted pb-2 border-b border-surface-border">
              <span>Location & Availability</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-primary">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{PROFILE.location} ({PROFILE.timezone})</span>
            </div>
            <p className="text-text-secondary text-[11px] leading-relaxed">
              {PROFILE.availability}
            </p>
          </div>
        </div>

        {/* Right Column: Verified Credentials & Education */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-surface-card border border-surface-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-dark-750 border border-surface-border text-accent">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Education</span>
                <h3 className="text-base font-display font-bold text-text-primary">
                  {PROFILE.education.institution}
                </h3>
              </div>
            </div>

            <div className="text-xs font-mono text-accent mb-2">
              {PROFILE.education.degree}
            </div>
            <div className="text-xs text-text-muted mb-4">
              {PROFILE.education.specialization}
            </div>

            <ul className="space-y-2 text-xs text-text-secondary">
              {PROFILE.education.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent font-mono mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Card */}
          <div className="p-6 rounded-2xl bg-surface-card border border-surface-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-dark-750 border border-surface-border text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Industry Certifications</span>
                <h3 className="text-base font-display font-bold text-text-primary">
                  Verified Accreditations
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {PROFILE.certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-dark-850 border border-surface-border/60">
                  <div className="text-xs font-mono font-semibold text-text-primary">
                    {cert.title}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mt-1">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-400 font-semibold">{cert.badgeCode}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-surface-card border border-surface-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-dark-750 border border-surface-border text-purple-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Communication</span>
                <h3 className="text-base font-display font-bold text-text-primary">
                  Spoken Languages
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              {PROFILE.languages.map((lang, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-dark-850 border border-surface-border/50">
                  <div className="text-xs text-text-primary font-semibold">{lang.name}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">{lang.level.split(' ')[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
