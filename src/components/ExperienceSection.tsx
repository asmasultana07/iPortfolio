/**
 * Requirement 8: Experience Section
 * - Professional experience in detail
 * - Research Volunteer at AMIA 2025 (American Medical Informatics Association)
 * - Frontend Developer Intern at Eutropia IT Solution
 */

import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, FlaskConical, FileSpreadsheet, Code2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getExperienceIcon = (role: string) => {
    const lower = role.toLowerCase();
    if (lower.includes('research') || lower.includes('volunteer')) {
      return <FlaskConical className="w-6 h-6 text-violet-400" />;
    }
    if (lower.includes('monitoring') || lower.includes('data')) {
      return <FileSpreadsheet className="w-6 h-6 text-emerald-400" />;
    }
    return <Code2 className="w-6 h-6 text-blue-400" />;
  };

  return (
    <section id="experience" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with text-blue-300 kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Professional Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            Work &amp; Research Experience
          </h2>
          <p className="text-sm text-slate-400">
            Practical engineering experience delivering client web solutions, research monitoring, and biomedical informatics screening.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-blue-300/10 border border-purple-900/40 glow-card relative overflow-hidden space-y-6"
            >
              {/* Header: Icon + Role & Company on left, Session tag on right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-violet-950/70 border border-violet-800/40 rounded-2xl text-violet-300 shrink-0">
                    {getExperienceIcon(exp.role)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-sm text-slate-300 mt-1">
                      <span className="text-violet-300 font-semibold">{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Session on top right (no role repetition) */}
                <div className="flex items-center shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-950/80 border border-violet-800/40 text-violet-300 font-mono font-semibold text-xs rounded-lg shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                {exp.description}
              </p>

              {/* Achievements & Responsibilities */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Responsibilities &amp; Outcomes:
                </div>
                <div className="space-y-2.5">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
