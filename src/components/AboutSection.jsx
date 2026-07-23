import React from 'react';
import { Code, User, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative"> 
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Developer with a User-Centred Approach</h3>
            <p className="text-muted-foreground">
              I recently completed my MSc in Computer Science at the University of Copenhagen,
              where I worked with software development, algorithms, computer systems,
              UI technology, and program analysis.
            </p>
            <p>
              I enjoy turning complex technical workflows into practical tools that are
              understandable, reliable, and genuinely useful for real users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button"> 
                Contact Me 
              </a>
                
              <a href="/CV.pdf" download className="cosmic-button"> 
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10"> 
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development </h4>
                  <p className="text-muted-foreground">
                    Full-stack experience with React, TypeScript, Python, FastAPI,
                    and backend analysis workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10"> 
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                  <p className="text-muted-foreground">
                    Strong focus on interaction design and building interfaces that make
                    complex systems easier to use.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10"> 
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Collaboration and Delivery </h4>
                  <p className="text-muted-foreground">
                    Comfortable collaborating across disciplines, documenting decisions,
                    and iterating from prototype to working solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};