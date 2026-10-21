/**
 * Requirement 9: Detailed Project Page / Modal
 * Contains:
 * - Project name & image
 * - Main technology stack used
 * - Brief description
 * - Live project link
 * - GitHub repository link (client)
 * - Challenges faced while developing the project
 * - Potential improvements and future plans for the project
 */

import React, { useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Prevent background scroll and support ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-blue-300/10 border border-purple-800/60 rounded-3xl p-6 sm:p-8 custom-scrollbar shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Tag */}
        <div className="inline-block px-3 py-1 bg-violet-950/80 border border-violet-800/50 rounded-lg text-xs font-mono text-violet-300 mb-2">
          {project.categoryLabel}
        </div>

        {/* Project Name */}
        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4 pr-10">
          {project.title}
        </h3>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-purple-700/40 bg-black/50 mb-6 aspect-video max-h-80 relative flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover sm:object-contain"
          />
        </div>

        {/* Content Body */}
        <div className="space-y-6">
          
          {/* 1. Brief Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Project Description
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 2. Main Technology Stack Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>Main Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#250f3b] border border-purple-800/40 text-violet-200 text-xs font-mono font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Challenges Faced While Developing */}
          <div className="p-5 rounded-2xl bg-[#1b0833] border border-amber-900/40 space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Challenges Faced While Developing</span>
            </h4>
            <ul className="space-y-2 pt-1">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Potential Improvements & Future Plans */}
          <div className="p-5 rounded-2xl bg-[#120a26] border border-violet-800/40 space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-violet-300 font-semibold flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-violet-400" />
              <span>Potential Improvements &amp; Future Plans</span>
            </h4>
            <ul className="space-y-2 pt-1">
              {project.futureImprovements.map((improvement, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Live Project & GitHub Repository Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-900/40 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Project Link</span>
                </a>
              )}

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository (Client)</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
