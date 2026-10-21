/**
 * Requirement 11: Footer (Optional)
 * - Simple and elegant footer for better presentation
 * - Easy section navigation, copyright, and back-to-top button
 * - Cleaned brand header and removed social links (moved to Contact section)
 */

import React from 'react';
import { portfolioOwner } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Footer menu - same as navbar (Experience hidden)
  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Publication', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="py-12 border-t border-purple-900/30 bg-[#0c0414] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand info: Just Name */}
          <div>
            <span className="font-bold text-white text-base font-heading tracking-wide">
              {portfolioOwner.name}
            </span>
          </div>

          {/* Quick links - Same order as Navbar */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300 font-mono">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-mono"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-[11px] font-mono">
            &copy; {new Date().getFullYear()} Asma Sultana. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
