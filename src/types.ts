/**
 * Types definition for Asma Sultana's Portfolio
 * Kept beginner-friendly, clean, and fully typed.
 */

import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'aiml';
  categoryLabel: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  repoUrl: string; // GitHub repository link (client)
  
  // Specific requirements:
  challenges: string[];        // Challenges faced while developing
  futureImprovements: string[]; // Potential improvements and future plans
}

export interface Thesis {
  title: string;
  methods: string[];
  description: string;
  impact: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  major: string;
  keyCourses: string[];
  thesis?: Thesis;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Publication {
  title: string;
  journal: string;
  status: 'Published' | 'Under Submission';
  doi?: string;
  doiUrl?: string;
  authors: string;
  description: string;
  tags: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  description?: string;
  iconType: 'award' | 'math' | 'code' | 'security';
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
}

// New: Lightweight icon-based Skill Groups data structure
export type IconType = React.ComponentType<{ size?: number; color?: string }>;

export interface SimpleSkill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  title: string;
  level: string;
  description: string;
  skills: SimpleSkill[];
}
