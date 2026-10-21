/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Asma Sultana - Professional Portfolio Application
 * Recreated with React, TypeScript, and Tailwind CSS.
 * 
 * All 12 Requirements Implemented:
 * 1. Fully responsive Navigation Bar with easy access to all sections
 * 2. Designation and Introduction with live typewriter effect and personal photo
 * 3. Clearly visible Resume Download Button (with instant single-click file download)
 * 4. Social Links (GitHub, LinkedIn, Kaggle, Facebook)
 * 5. Detailed About Me (programming journey, work enjoyed, hobbies, personality)
 * 6. Graphical Skills Section (categorized with visual progress bars)
 * 7. Detailed Educational Qualification (BSc in CSE from UAP, CGPA 3.59)
 * 8. Professional Experience (AMIA 2025 Research Volunteer, Eutropia Internship)
 * 9. Projects Section in card format with "View More / Details" button leading to:
 *    - Main technology stack
 *    - Brief description
 *    - Live project link
 *    - GitHub repository link (client)
 *    - Challenges faced while developing
 *    - Potential improvements and future plans
 * 10. Contact Information (Email, Phone, WhatsApp with direct chat link)
 * 11. Simple and elegant Footer
 * 12. Full responsiveness and clean UI across all devices
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  // State for the currently selected project to show in the details modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0f0717] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      {/* 1. Fully Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Home: Hero Section - Designation, Photo, Resume Download, Socials */}
        <HeroSection />

        {/* About Me Section: Journey, Work Enjoyed, Hobbies, Personality */}
        <AboutSection />

        {/* Education Section */}
        <EducationSection />

        {/* Skills Section in Graphical Format */}
        <SkillsSection />

        {/* Projects Section in Card Format with View More / Details */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Publications Section */}
        <PublicationsSection />

        {/* Experience Section - NOT in Navbar, only in page */}
        <ExperienceSection />

        {/* Contact Information: Email, Phone, WhatsApp */}
        <ContactSection />
      </main>

      {/* Project Detail Modal (Challenges & Future Plans) */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
