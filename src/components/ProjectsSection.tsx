/**
 * Requirement 9: Projects Section
 * - Showcase best projects in card format
 * - Each project card must contain:
 *   - Project name
 *   - Project image
 *   - "View More / Details" button
 * - Clicking "View More / Details" triggers detailed modal
 */

import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack' | 'aiml'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400">
            A curated collection of my best projects spanning frontend design, client-side web applications, and machine learning models.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#170a29] border border-purple-900/40 rounded-2xl w-fit mx-auto mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('frontend')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              filter === 'frontend'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Frontend UI
          </button>
          <button
            type="button"
            onClick={() => setFilter('fullstack')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              filter === 'fullstack'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Web Apps &amp; Database
          </button>
          <button
            type="button"
            onClick={() => setFilter('aiml')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              filter === 'aiml'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI &amp; Machine Learning
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#170a29]/80 border border-purple-900/40 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden glow-card"
            >
              <div>
                {/* 1. Project Image */}
                <div
                  className="relative h-48 w-full bg-black/60 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170a29] via-transparent to-transparent opacity-70" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#10041d]/85 backdrop-blur-md border border-white/10 rounded-lg text-[11px] font-mono text-violet-300">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* 2. Project Name & Description */}
                <div className="p-6">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-white mb-2 font-heading group-hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Main Tech Stack preview */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#25103b] border border-purple-800/30 text-slate-300 text-[11px] font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-slate-400 text-[11px] font-mono">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. "View More / Details" Button & Links */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center gap-3 mt-auto">
                {/* Primary Button as required */}
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-md shadow-violet-900/40 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                {/* Direct quick action buttons */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Open live project"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="View GitHub repository (client)"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
