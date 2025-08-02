import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
  >
    <div className="container max-2-4xl mx-auto text-center z-10">
      <div className="space-y-6">
        <img
            src="/Fadhillah-Portfolio/croppedCVimage.png"
            alt="Aditya Fadhillah"
            className="mx-auto rounded-full w-50 h-50 object-cover mb-4 shadow-lg border-4 border-primary"  
          />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in"> Hey, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
            {" "}
            Aditya 
          </span>
          <span className="text-gradient opacity-0 animate-fade-in-delay-2"> 
            {" "}
            Fadhillah
          </span>
        </h1>

        <p className="text-lg md-text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I am passionate about software development, problem-solving,
          and innovative solutions.
        </p>

        <div>
          <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4">
            View My Work
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">  Scroll </span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </div>
  </section>
};
