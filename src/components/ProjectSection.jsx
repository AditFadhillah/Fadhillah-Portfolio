import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of project one.",
    image: "/projects/project-one.png",
    tags: ["JavaScript", "React"],
    demoURL: "https://example.com/project-one",
    gitURL: "https://example.com/project-one"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of project two.",
    image: "/projects/project-two.png",
    tags: ["HTML", "CSS"],
    demoURL: "https://example.com/project-two",
    gitURL: "https://example.com/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of project three.",
    image: "/projects/project-three.png",
    tags: ["Node.js", "Express"],
    demoURL: "https://example.com/project-three",
    gitURL: "https://example.com/project-three"
  }
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
          Cool <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Feel free to check them out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key} 
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                /> 
              </div>

              <div className='p-6'>
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoURL} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                      rel="noopener noreferrer"
                    > 
                      <ExternalLink size={20} /> 
                    </a>
                    <a 
                      href={project.gitURL} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                      rel="noopener noreferrer"
                    >  
                      <Github size={20} /> 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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