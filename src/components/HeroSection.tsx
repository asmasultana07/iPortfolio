/**
 * Requirement 2: Designation and Introduction
 * - Display professional designation with typewriter animation
 * - Include a photo of myself
 * Requirement 3: Resume Download Button
 * - Clearly visible button in hero section that triggers immediate resume download
 * Requirement 4: Social Links
 * - Embedded buttons linking to GitHub, LinkedIn, Kaggle, Facebook
 */

import React, { useState, useEffect } from 'react';
import { portfolioOwner } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';
import {
  Download,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect to display professional designations
  useEffect(() => {
    const currentRole = portfolioOwner.designations[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % portfolioOwner.designations.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Image Block: UPPER in Mobile & Tablet (order-1), Right Column in Desktop (lg:order-2 lg:col-span-5) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] flex items-center justify-center">
              
              {/* Monospace Developer Syntax Matrix covering the lower 1/3 part in slate-600 / slate-500 */}
              <div className="absolute top-[64%] bottom-0 -left-4 sm:-left-8 md:-left-12 -right-4 sm:-right-8 md:-right-12 pointer-events-none select-none font-mono text-[11px] sm:text-xs md:text-sm text-slate-600 z-0">
                {/* Row 1 (~top of lower third) */}
                <span className="absolute top-[2%] left-1 sm:-left-2 text-slate-600 font-semibold tracking-tight">&lt;React.js /&gt;</span>
                <span className="absolute top-[1%] right-1 sm:-right-2 text-slate-600 font-semibold tracking-tight">Nest.js</span>
                <span className="absolute top-[12%] left-8 sm:left-6 text-slate-500 font-medium">TypeScript</span>
                <span className="absolute top-[13%] right-8 sm:right-6 text-slate-500 font-medium">JavaScript</span>

                {/* Row 2 (mid of lower third) */}
                <span className="absolute top-[28%] left-0 sm:-left-3 text-slate-500 font-medium">$ npm install</span>
                <span className="absolute top-[27%] right-0 sm:-right-3 text-slate-600 font-semibold">Node.js</span>
                <span className="absolute top-[40%] left-6 sm:left-4 text-slate-600 font-semibold">Tailwind CSS</span>
                <span className="absolute top-[41%] right-6 sm:right-4 text-slate-500 font-medium">MongoDB</span>

                {/* Row 3 (lower part of third) */}
                <span className="absolute top-[56%] left-1 sm:-left-2 text-slate-600 font-medium">REST APIs</span>
                <span className="absolute top-[55%] right-1 sm:-right-2 text-slate-500 font-medium">PyTorch</span>
                <span className="absolute top-[68%] left-6 sm:left-3 text-slate-500 font-mono text-[10px] sm:text-xs">const [state, setState]</span>
                <span className="absolute top-[67%] right-6 sm:right-3 text-slate-600 font-mono">git push origin</span>

                {/* Base Line */}
                <span className="absolute bottom-2 left-2 sm:left-0 text-slate-500 font-medium">&lt;div class=&quot;container&quot;&gt;</span>
                <span className="absolute bottom-2 right-2 sm:right-0 text-slate-600 font-semibold">npm run dev</span>
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-slate-500 text-[10px] sm:text-xs whitespace-nowrap font-mono tracking-wider">
                  /* MERN Stack &bull; Clean Architecture &bull; JWT Auth */
                </span>
              </div>

              {/* Portrait Photo - No border box, no background card */}
              <img
                src={portfolioOwner.photo}
                alt="Asma Sultana"
                className="relative z-10 w-full h-auto object-contain select-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Details Block: BELOW in Mobile & Tablet (order-2), Left Column in Desktop (lg:order-1 lg:col-span-7) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-950/70 border border-violet-800/40 rounded-full text-xs font-medium text-violet-300 self-center lg:self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Frontend &amp; Software Engineering Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="text-base sm:text-lg font-medium text-slate-300">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mt-1">
                {portfolioOwner.name}
              </h1>
            </div>

            {/* Requirement 2: Professional Designation display */}
            <div className="min-h-12 flex items-center justify-center lg:justify-start flex-wrap">
              <span className="text-xl sm:text-2xl text-slate-300 font-medium mr-2">
                I am a passionate
              </span>
              <span className="text-xl sm:text-2xl font-bold text-blue-300 border-b-2 border-blue-300 pb-0.5">
                {displayText}
                <span className="animate-pulse text-blue-300">|</span>
              </span>
            </div>

            {/* Introduction: Replaced long aspiring text with concise MERN stack statement */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              {portfolioOwner.shortBio}
            </p>

            {/* Requirement 4: Social Links Buttons */}
            <div className="pt-2 w-full flex flex-col items-center lg:items-start">
              <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block mb-3">
                Social Profiles:
              </span>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {portfolioOwner.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#170a29] border border-purple-900/50 hover:border-violet-500/60 hover:bg-violet-950/40 text-slate-200 hover:text-white transition-all text-xs font-medium group cursor-pointer"
                  >
                    <img
                      src={`/assets/${
                        social.name === 'GitHub'
                          ? 'github-blue.png'
                          : social.name === 'LinkedIn'
                          ? 'linkedin-blue.png'
                          : social.name === 'Kaggle'
                          ? 'icons-kaggle.png'
                          : 'facebook-blue.png'
                      }`}
                      alt={social.name}
                      className="w-4 h-4 object-contain"
                    />
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-violet-300 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Requirement 3: Resume Download Button (Clearly visible, single click download) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                type="button"
                onClick={downloadResumeFile}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-purple-500 shadow-xl shadow-violet-950/50 transition-all hover:scale-[1.03] cursor-pointer"
              >
                <Download className="w-4 h-4 text-violet-100" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
