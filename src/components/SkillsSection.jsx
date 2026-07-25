import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  // programming languages used in projects
  { name: "Python", level: 90, category: "language" },
  { name: "TypeScript", level: 80, category: "language" },
  { name: "Java", level: 70, category: "language" },
  { name: "F#", level: 65, category: "language" },
  { name: "GDScript", level: 70, category: "language" },

  // frontend skills
  { name: "React", level: 85, category: "frontend" },
  { name: "Google Blockly", level: 80, category: "frontend" },
  { name: "HTML", level: 85, category: "frontend" },
  { name: "CSS/Tailwind", level: 80, category: "frontend" },
  { name: "Figma Prototyping", level: 75, category: "frontend" },

  // backend and data skills
  { name: "FastAPI", level: 80, category: "backend" },
  { name: "REST API Design", level: 80, category: "backend" },
  { name: "AI / Machine Learning", level: 75, category: "backend" },
  { name: "Pyodide Integration", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "Supabase", level: 75, category: "backend" },
  { name: "AST-based Static Analysis", level: 80, category: "backend" },

  // tools and methods
  { name: "Git", level: 85, category: "tools" },
  { name: "Testing and Debugging", level: 80, category: "tools" },
  { name: "Agentic Coding Workflows", level: 75, category: "tools" },
  { name: "Azure", level: 70, category: "tools" },
  { name: "DCR Graph Modeling", level: 85, category: "tools" },
  { name: "Godot", level: 75, category: "tools" },
  { name: "SECO Analysis", level: 80, category: "tools" },
  { name: "User Research and Interaction Design", level: 80, category: "tools" },
];

const categories = ["all", "language", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
            >  
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skills, key) => (
            <div 
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">
                  {skills.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skills.level + "%"}}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skills.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};