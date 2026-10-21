/**
 * Requirement 7: Educational Qualification
 * - Mention educational background in detail
 * - Kicker in text-blue-300
 * - Session on top, CGPA below under the session
 * - Title "Major Academic Coursework" size
 * - Undergraduate Thesis feature
 * - "Achievements & Participations" section placed after the education box
 */

import React from 'react';
import { educationData, achievementsData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, FileText, Trophy, Shield, Code2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'award': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'math': return <Award className="w-5 h-5 text-violet-400" />;
      case 'security': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'code': return <Code2 className="w-5 h-5 text-blue-400" />;
      default: return <Award className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="education" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with text-blue-300 kicker */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            Educational Qualification
          </h2>
          <p className="text-sm text-slate-400">
            Comprehensive details of my undergraduate degree in Computer Science and Engineering from University of Asia Pacific.
          </p>
        </div>

        {/* Education Highlight Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-blue-300/10 border border-purple-900/40 glow-card relative overflow-hidden space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-violet-950/70 border border-violet-800/40 rounded-2xl text-violet-300 shrink-0 mt-1">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                {/* 1. BSc title in line */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {educationData.degree}
                </h3>
                
                {/* 2. Remove location, in this position take CGPA */}
                <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base mt-1">
                  <span className="text-violet-300 font-semibold">{educationData.institution}</span>
                  {/* <span className="text-slate-500">·</span> */}
                  {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 font-mono font-bold text-xs sm:text-sm shadow">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>CGPA: {educationData.cgpa}</span>
                  </span> */}
                </div>

                {/* 3. Session in below */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono pt-1">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <span>Session: {educationData.period}</span>
                </div>
              </div>
            </div>

            <span className="self-start px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-800/40 text-violet-300 text-xs font-mono font-medium">
              Graduated
            </span>
          </div>

          {/* Undergraduate Thesis Spotlight (remains exactly as same) */}
          {educationData.thesis && (
            <div className="p-6 rounded-2xl bg-[#110521] border border-violet-800/40 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-300">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Undergraduate Thesis Project</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-violet-950 text-violet-300 border border-violet-800/40">
                  NLP &amp; Transformers
                </span>
              </div>

              <h4 className="text-lg font-bold font-heading text-white">
                {educationData.thesis.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {educationData.thesis.description}
              </p>

              <div className="space-y-1.5 pt-1">
                {educationData.thesis.methods.map((method, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-violet-400 font-bold mt-0.5">•</span>
                    <span>{method}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-emerald-300 flex items-start gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{educationData.thesis.impact}</span>
              </div>
            </div>
          )}

          {/* Major Academic Coursework: 2 columns with larger title */}
          <div className="pt-2">
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2.5">
              <BookOpen className="w-6 h-6 text-violet-400" />
              <span>Major Academic Coursework</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationData.keyCourses.map((course) => (
                <div
                  key={course}
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-medium bg-blue-300/10 border border-purple-800/40 text-slate-200 hover:border-violet-400/50 hover:bg-[#250f40] transition-colors flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Achievements & Activities Card - Converted to 1 single column */}
        <div className="max-w-4xl mx-auto mt-8 p-8 sm:p-10 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Achievements &amp; Participations</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Competitions, Honors &amp; Certifications
            </span>
          </div>

          {/* 1 Column Layout */}
          <div className="grid grid-cols-1 gap-3.5">
            {achievementsData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-violet-950/70 border border-violet-800/30 shrink-0 mt-0.5">
                  {getAchievementIcon(item.iconType)}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs text-violet-300 font-mono font-medium">
                      {item.organization}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
