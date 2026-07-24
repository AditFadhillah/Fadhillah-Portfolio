import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Master Thesis: Interactive Web Interface for FEDT",
    description:
      "Designed and implemented a visual editor for the Fabrication Experiment Design Tool, connecting configurable blocks to executable Python specifications.",
    tags: ["React", "TypeScript", "Blockly", "FastAPI", "Python", "AST Analysis"],
    demoURL: null,
    gitURL: null,
    detailPath: null,
    cardImage: null,
  },
  {
    id: 2,
    title: "Bachelor Project: Task List for Nursing Home Care",
    description:
      "Built a proof-of-concept task list application that translated care workflows into a structured digital tool with role-aware task handling.",
    tags: ["DCR Graphs", "Database Integration", "Cloud App Development", "UX"],
    demoURL: null,
    gitURL: null,
    detailPath: "/projects/bachelor",
    cardImage: "/Fadhillah-Portfolio/images/bachelor/bach-hero.png",
  },
  {
    id: 3,
    title: "PUK Project: PyMon",
    description:
      "Built a serious-game learning platform where students solve Python challenges inside a Pokemon-inspired game world with integrated coding, progression, and feedback.",
    tags: ["React", "TypeScript", "Godot", "Pyodide", "Supabase", "PostgreSQL"],
    demoURL: null,
    gitURL: null,
    detailPath: "/projects/puk",
    cardImage: "/Fadhillah-Portfolio/images/puk/puk-hero.png",
  },
  {
    id: 4,
    title: "SECO Project: Godot Learning Platform Analysis",
    description:
      "Analyzed Godot as a software ecosystem and designed a browser-based learning platform concept to reduce tutorial fragmentation and improve onboarding.",
    tags: ["SECO", "SRMA", "UX Research", "Stakeholder Mapping", "Figma"],
    demoURL: null,
    gitURL: null,
    detailPath: "/projects/seco",
    cardImage: "/Fadhillah-Portfolio/images/seco/seco-hero.png",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of academic projects that reflect my focus on practical software,
          user-centred systems, and technical problem solving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const CardContent = (
              <>
                <div className="h-2 bg-primary/60" />

                <div className="px-6 pt-6">
                  {project.cardImage ? (
                    <img
                      src={project.cardImage}
                      alt={`${project.title} preview`}
                      className="w-full h-44 object-cover rounded-lg border border-border"
                    />
                  ) : (
                    <div className="w-full h-44 rounded-lg border-2 border-dashed border-primary/40 bg-background/40 flex items-center justify-center text-sm text-muted-foreground">
                      Project image placeholder
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-5">
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary font-medium">
                      {project.detailPath ? "View Details" : "Details coming soon"}
                    </span>

                    <div className="flex space-x-3">
                      {project.demoURL && (
                        <a 
                          href={project.demoURL} 
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        > 
                          <ExternalLink size={20} /> 
                        </a>
                      )}
                      {project.gitURL && (
                        <a 
                          href={project.gitURL} 
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >  
                          <Github size={20} /> 
                        </a>
                      )}
                    </div>
                </div>
                </div>
              </>
            );

            if (project.detailPath) {
              return (
                <Link
                  to={project.detailPath}
                  key={project.id}
                  className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover text-left"
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover text-left"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center gap-2 mx-auto" 
            target="_blank"
            href="https://github.com/AditFadhillah"
          > 
            Check My GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}