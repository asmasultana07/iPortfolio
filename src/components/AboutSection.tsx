import React from 'react';
import { portfolioOwner } from '../data/portfolioData';
import {
  Target,
  Code2,
  Gamepad2,
  BookOpen,
  Palette,
  Camera,
  Smile,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { aboutMe, careerObjective } = portfolioOwner;

  // Icon mapping for hobbies matching text4 design
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-violet-300" />;
      case 'Music':
        return <Sparkles className="w-5 h-5 text-violet-300" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-violet-300" />;
      case 'Film':
        return <Sparkles className="w-5 h-5 text-violet-300" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-violet-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-300" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            About Me
          </h2>
          <p className="text-sm text-slate-400">
            Discover my background, programming journey, technical passion, hobbies, and the values that drive my work.
          </p>
        </div>

        {/* 1. Career Objective Full-Width Feature Card (Updated with text1) */}
        <div className="max-w-5xl mx-auto mb-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1e0a35]/90 via-[#160728]/95 to-[#0e0419] border border-purple-800/50 glow-card relative overflow-hidden">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-violet-600 rounded-2xl text-white shadow-lg shadow-violet-600/30">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold">
                Professional Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Career Objective
              </h3>
            </div>
          </div>

          {/* text1 Headline & Body */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-200">
              {careerObjective.headline || 'A CSE graduate, problem solver, and lifelong learner.'}
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {careerObjective.summary}
            </p>
          </div>

          {/* Highlights & Research bullet points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5 border-t border-white/10">
            {careerObjective.bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Programming Journey & Work I Enjoy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 2. Programming Journey Card (Updated with text2 image text & styling) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  My Programming Journey
                </h3>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {aboutMe.journeyParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* 3. The Work I Enjoy Most Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  The Work I Enjoy Most
                </h3>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {aboutMe.workEnjoyedParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hobbies & Interests (text4 design) & Personality */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4. Hobbies & Interests Card (Updated exactly to text4 design & text) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 shrink-0">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Hobbies &amp; Interests
                </h3>
              </div>

              {/* 5 structured rows exactly matching text4 screenshot */}
              <div className="space-y-4">
                {aboutMe.hobbiesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-violet-950/80 border border-violet-800/50 flex items-center justify-center text-violet-300 shrink-0 shadow-sm">
                        {getHobbyIcon(item.icon)}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-snug">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* 5. Personality & Mindset Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-600/90 border border-violet-500/40 flex items-center justify-center text-white shadow-md shadow-violet-600/20 shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Personality &amp; Mindset
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {aboutMe.personality}
              </p>

              {/* Personality traits tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {['Detail-Oriented', 'Curious Learner', 'Calm & Methodical', 'Empathetic Collaborator' ].map((trait) => (
                  <span
                    key={trait}
                    className="px-2.5 py-1 text-xs font-mono bg-violet-950/60 border border-violet-800/40 text-violet-300 rounded-md"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
