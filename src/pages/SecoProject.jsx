import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ScreenshotPlaceholder = ({ label }) => {
  return (
    <div className="w-full rounded-xl border-2 border-dashed border-primary/40 bg-card p-10 text-center">
      <p className="text-lg font-semibold">Screenshot Placeholder</p>
      <p className="text-muted-foreground mt-2">{label}</p>
      <p className="text-sm text-muted-foreground mt-1">
        Add your image later in this section.
      </p>
    </div>
  );
};

export const SecoProject = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <div className="container max-w-4xl mx-auto space-y-12 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <section className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            University Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Godot Learning Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            A Software Ecosystem Analysis and UX Design Case Study
          </p>
          <p className="text-muted-foreground">
            SECO Analysis, SRMA, Stakeholder Mapping, User Research, Business Modelling, Figma
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/Fadhillah-Portfolio/pdfs/seco-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Research PDF
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold"> </h2>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-hero.png"
            alt="SECO project hero screenshot"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project is a deep-dive analysis of the Godot game engine as a software
            ecosystem, combined with a proposed browser-based learning platform that helps
            developers navigate fragmented learning resources.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Godot offers free and open-source access, but learning content is scattered
            across docs, YouTube channels, and forums. Beginners struggle to find level-
            appropriate guides, while experienced users struggle to find concept-first,
            code-first material.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Research Approach</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Software ecosystem mapping across foundation, contributors, vendors, and users.</li>
            <li>SRMA analysis of Godot architecture and modularity.</li>
            <li>Power vs. interest stakeholder classification.</li>
            <li>Business Model Canvas and multisided value proposition analysis.</li>
            <li>End-user development theory and learning complexity progression.</li>
          </ul>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-stakeholder.png"
            alt="SECO project stakeholder overview"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Architecture Analysis</h2>
          <p className="text-muted-foreground leading-relaxed">
            The analysis documented Godot's Core, Scene, Servers, and Drivers layers,
            node and scene composition, signal-based loose coupling, and extension model
            through GDScript, C#/.NET, and GDExtension/C++.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-godotArchitecture.png"
            alt="SECO project Godot architecture overview"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">User Research</h2>
          <p className="text-muted-foreground leading-relaxed">
            Three personas represented different skill levels: Tina (beginner), Sam
            (intermediate), and Emma (advanced, Unity-switcher). The design focus was
            Tina using a design-for-one, validate-for-many strategy.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-persona.png"
            alt="SECO project personas overview"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-beginnerMap.png"
            alt="SECO project beginner learning journey overview"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Proposed Solution</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Curated beginner, intermediate, and expert learning paths.</li>
            <li>Smart search separating official docs and community tutorial results.</li>
            <li>Embedded YouTube tutorials and in-page Godot Web Editor workflows.</li>
            <li>Progress tracking, ratings, and reviews backed by Supabase and PostgreSQL.</li>
          </ul>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-proposedArchitecture.png"
            alt="SECO project proposed architecture"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Prototype</h2>
          <p className="text-muted-foreground leading-relaxed">
            The design moved from whiteboard sketches to high-fidelity interactive Figma
            wireframes focused on first-time beginner experience.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-whiteboard.png"
            alt="SECO project whiteboard sketch"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-figma1.png"
            alt="SECO project Figma wireframe"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-figma2.png"
            alt="SECO project Figma search"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Business Model</h2>
          <p className="text-muted-foreground leading-relaxed">
            The concept curates Godot learning resources into level-matched pathways,
            supported by collaboration with established creators and community promotion.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/seco/seco-businessModel.png"
            alt="SECO project business model canvas"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tools and Methods</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>SECO and architecture analysis (SRMA, stakeholder mapping).</li>
            <li>Persona development and user story mapping.</li>
            <li>Business Model Canvas and multisided value proposition methods.</li>
            <li>Low-fidelity sketching and high-fidelity Figma prototyping.</li>
            <li>Proposed stack: Jekyll, Sphinx, Algolia, Supabase, PostgreSQL, YouTube API.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
