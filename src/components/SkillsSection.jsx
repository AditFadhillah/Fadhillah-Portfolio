import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    // programming languages
  { name: "Python", level: 80, category: "language" },
  { name: "C#", level: 75, category: "language" },
  { name: "F#", level: 70, category: "language" },

  // frontend skills
  { name: "HTML/CSS", level: 60, category: "frontend"},
  { name: "JavaScript", level: 70, category: "frontend"},
  { name: "React", level: 60, category: "frontend"},
  { name: "Tailwind CSS", level: 60, category: "frontend"},

  // backend skills
  { name: "postgreSQL", level: 70, category: "backend"},
  { name: "Node.js", level: 50, category: "backend"},
  { name: "DCRgraph", level: 80, category: "backend"},

  // tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Jupyter Notebook", level: 70, category: "tools" },
  { name: "Microsoft Azure", level: 60, category: "tools" },
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
              key="{key}" 
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
              className="bg-card p-6 rounded-g shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 classname="font-semibold text-lg">
                  {skills.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skills.level + "%"}}
                />
              </div>

              <div className="text-right mt-1">
                <span classname="text-sm text-muted-foreground">{skills.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};