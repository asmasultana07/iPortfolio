/**
 * Navigation Bar (Navbar)
 * - Removed logo box
 * - Removed under-name text, displays full name "Asma Sultana"
 * - Mobile dropdown covers ~1/3 part of the screen on the right with frosted glass background blur matching the reference image
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { portfolioOwner } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle shadow & blur change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler to target section
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navbar এ Experience hide থাকবে
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Publication', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#150727]/90 backdrop-blur-md border-b border-purple-900/40 shadow-lg shadow-purple-950/20'
            : 'bg-[#0f0717]/80 backdrop-blur-sm border-b border-purple-900/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          {/* Brand: Just full name, no logo, no subtitle text - INCREASED TEXT SIZE */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="cursor-pointer group flex items-center"
          >
            <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white group-hover:text-violet-300 transition-colors">
              {portfolioOwner.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-violet-300 transition-colors cursor-pointer py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-violet-400 after:absolute after:bottom-0 after:left-0 after:transition-all font-mono"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action: Download Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={downloadResumeFile}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-lg shadow-md shadow-violet-900/30 transition-all hover:scale-[1.02] cursor-pointer"
              title="Download resume file directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-2xl text-white hover:text-violet-300 cursor-pointer transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (1/3 Width with Frosted Glass Background Blur, matching uploaded image) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Subtle click-outside backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* 1/3 Part Right-aligned Dropdown matching image_a1a4e07e.png */}
          <div
            className="fixed top-0 right-0 w-[42%] min-w-[170px] max-w-[240px] bg-white/45 backdrop-blur-xl shadow-2xl z-50 flex flex-col p-4 space-y-4 rounded-bl-2xl border-l border-b border-white/20 animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close 'X' Button at the top right */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-gray-200 text-3xl font-light leading-none p-1 transition-transform hover:scale-110 cursor-pointer"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            {/* Nav Links in clean font-mono styling as shown in image */}
            <ul className="flex flex-col space-y-2 font-mono font-semibold text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left px-2 py-2 text-gray-800 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Resume Download inside dropdown */}
            <div className="pt-2 border-t border-white/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResumeFile();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-violet-700/80 hover:bg-violet-600 rounded-lg shadow-sm transition-all cursor-pointer font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
