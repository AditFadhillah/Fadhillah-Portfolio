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
            <h3 className="text-2xl font-semibold"> Expert in Theories of Computer Science</h3>
            <p className="text-muted-foreground">
              With over 4 years of experience in software development, 
              I have a strong foundation in computer science principles. 
            </p>
            <p>
              My academic background as a Computer Science MSc student at 
              Copenhagen University has equipped me with a deep understanding of algorithms, 
              data structures, and software engineering practices.
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
                    Proficient in multiple programming languages and frameworks.
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
                    Passionate about creating user-friendly interfaces and experiences.
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
                  <h4 className="font-semibold text-lg"> Project Management </h4>
                  <p className="text-muted-foreground">
                    Experienced in collaborating in projects from ideas to completion using different methodologies.
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