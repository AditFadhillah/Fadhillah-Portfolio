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

export const PukProject = () => {
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
            PyMon
          </h1>
          <p className="text-xl text-muted-foreground">
            A Serious-Game Platform for Learning Python Programming
          </p>
          <p className="text-muted-foreground">
            React, TypeScript, Godot, Pyodide, Supabase, PostgreSQL
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://aditfadhillah.github.io/PyMon/"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/AditFadhillah/PyMon/"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Source Code
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Hero Screenshot</h2>
          <ScreenshotPlaceholder label="Full interface: game world on the left and Python editor on the right" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            PyMon is a browser-based serious game where students solve Python exercises
            directly inside a Pokemon-inspired adventure world. Instead of switching
            between an editor, assignments, and game context, learning and gameplay happen
            in one place to reduce startup friction and improve focus.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Motivation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Many beginner programmers lose momentum before writing their first line of code
            due to setup complexity and context switching. PyMon explores whether a
            game-based environment can lower those barriers and support deeper engagement
            in programming practice.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Features</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Integrated Learning Environment</h3>
            <p className="text-muted-foreground">
              Exploration and programming happen together. Encountering Pokemon launches
              a coding challenge in the built-in editor, so students stay in flow.
            </p>
            <ScreenshotPlaceholder label="Exploration mode screenshot" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Programming Challenges</h3>
            <p className="text-muted-foreground">
              The game contains 34 exercises across four regions: Forest (loops), Beach
              (dictionaries), Volcano (regular expressions), and Swamp (tuples and
              advanced structures).
            </p>
            <ScreenshotPlaceholder label="Programming battle: task description, editor, output, Pokemon encounter" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Gamification</h3>
            <p className="text-muted-foreground">
              Progress is supported by collections, XP, achievements, login streaks,
              leaderboards, and team competition to encourage continued practice.
            </p>
            <ScreenshotPlaceholder label="Achievement page / leaderboard / Pokemon collection" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Technical Architecture</h2>
          <p className="text-muted-foreground">
            React and TypeScript power the interface, Godot handles gameplay,
            Pyodide executes Python in-browser, and Supabase with PostgreSQL stores
            progress, achievements, and rankings.
          </p>
          <ScreenshotPlaceholder label="Architecture diagram" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Engineering Challenges</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Safe execution of arbitrary Python code in the browser via Pyodide.</li>
            <li>Reliable communication between React UI, Godot gameplay, and TypeScript logic.</li>
            <li>Automatic task validation and beginner-friendly runtime feedback.</li>
            <li>Reducing repetitive challenge selection while preserving randomness.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Research and Results</h2>
          <p className="text-muted-foreground">
            The mixed-method evaluation included analytics, logs, observation, and
            interviews. Pilot study: 41 registered participants, 22 active users,
            one-week deployment.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Lower startup friction for beginning programming tasks.</li>
            <li>Better context preservation between exploration and coding.</li>
            <li>Different mechanics motivated different student profiles.</li>
          </ul>
          <ScreenshotPlaceholder label="Usage heatmap / session duration visualization" />
        </section>
      </div>
    </div>
  );
};
