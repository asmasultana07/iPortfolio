import React, { useMemo, useState } from "react";
import {
  Search,
  Globe,
  Database,
  Cpu,
  Wrench,
  Code2,
  Layers,
  Brain,
  Users,
  Bug,
  Sparkles,
} from "lucide-react";

import { skillGroups } from "../data/portfolioData";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
};

type SkillGroup = {
  title: string;
  level: string;
  description: string;
  skills: Skill[];
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Globe size={18} />,
  "Backend & APIs": <Code2 size={18} />,
  "Databases & DBMS": <Database size={18} />,
  "AI, ML & Data Science": <Cpu size={18} />,
  "Tools & DevOps": <Wrench size={18} />,
  "Core Engineering Concepts": <Brain size={18} />,
};

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Databases", value: "database" },
  { label: "AI & ML", value: "ai" },
  { label: "Tools", value: "tools" },
  { label: "Core Skills", value: "core" },
];

const matchesCategory = (title: string, filter: string) => {
  const value = title.toLowerCase();

  switch (filter) {
    case "frontend":
      return value.includes("frontend");
    case "backend":
      return value.includes("backend");
    case "database":
      return value.includes("database");
    case "ai":
      return value.includes("ai, ml");
    case "tools":
      return value.includes("tools");
    case "core":
      return value.includes("core");
    default:
      return true;
  }
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = skillGroups as SkillGroup[];

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories
      .filter((category) => matchesCategory(category.title, activeCategory))
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
          skill.name.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }, [categories, activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="relative border-t border-purple-900/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">
            Technical Competencies
          </span>

          <h2 className="mt-3 mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Skills <span className="text-violet-400">&amp; Expertise</span>
          </h2>

          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            Technologies and tools I use to build web applications, explore
            machine learning, and solve engineering problems.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2 rounded-xl border border-purple-900/40 bg-[#170a29] p-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                  activeCategory === filter.value
                    ? "bg-violet-600 text-white shadow-md shadow-violet-900/40"
                    : "text-slate-400 hover:bg-violet-950/60 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search a technology..."
              aria-label="Search skills"
              className="w-full rounded-xl border border-purple-900/40 bg-[#160a24] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2  ">
          {filteredCategories.map((category) => (
            <article
              key={category.title}
              className="glow-card rounded-2xl border border-purple-900/40 bg-blue-300/10 p-5 sm:p-6"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-800/40 bg-violet-950/70 text-violet-400">
                  {categoryIcons[category.title] ?? <Layers size={18} />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-base font-bold text-white">
                      {category.title}
                    </h3>

                    <span className="shrink-0 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                      {category.level}
                    </span>
                  </div>

                </div>
              </div>

              {/* Technology Logo Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex min-h-16 items-center justify-start gap-2 rounded-xl border border-purple-900/40 bg-[#11051e]/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-violet-950/40"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-950/70 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                        <SkillIcon size={20} color="default" />
                      </div>

                      <p className="text-left text-xs font-medium leading-5 text-slate-300 transition-colors group-hover:text-white">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Results */}
        {filteredCategories.length === 0 && (
          <div className="rounded-2xl border border-purple-900/40 bg-[#170a29]/60 py-14 text-center">
            <Sparkles className="mx-auto mb-3 text-violet-400" size={28} />

            <h3 className="font-semibold text-white">No skills found</h3>

            <p className="mt-2 text-sm text-slate-400">
              Try another keyword or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
