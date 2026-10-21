/**
 * Publications & Research Section
 * - Showcases published journal paper in BMJ Health & Care Informatics
 * - Showcases paper under submission to Nature Health
 * - Kicker in text-blue-300
 */

import React from 'react';
import { publicationsData } from '../data/portfolioData';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Scholarly Contributions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            Publications &amp; Research
          </h2>
          <p className="text-sm text-slate-400">
            Peer-reviewed health informatics and machine learning research contributions.
          </p>
        </div>

        {/* Publications Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {publicationsData.map((pub, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-blue-300/10 border border-purple-900/40 glow-card relative overflow-hidden"
            >
              {/* Status & Journal Badges with Icon */}
              <div className="flex items-start gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="p-3.5 bg-violet-950/70 border border-violet-800/40 rounded-2xl text-violet-300 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1 flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${
                        pub.status === 'Published'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50'
                          : 'bg-amber-950/80 text-amber-300 border border-amber-800/50'
                      }`}
                    >
                      {pub.status === 'Published' ? '✓ Published Journal Paper' : '⏳ Under Submission'}
                    </span>
                    <span className="text-xs font-mono font-bold text-violet-300 px-3 py-1 bg-violet-950/70 border border-violet-800/40 rounded-lg">
                      {pub.journal}
                    </span>
                  </div>

                  {pub.doi && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-300 hover:text-blue-200 underline"
                    >
                      <span>DOI: {pub.doi}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3 leading-snug">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 mb-4 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-slate-400 font-sans font-semibold">Authors: </span>
                {pub.authors}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {pub.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/60 border border-purple-800/40 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {pub.doiUrl && (
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-md shadow-violet-900/30 cursor-pointer"
                  >
                    <span>View Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
