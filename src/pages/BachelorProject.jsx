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

export const BachelorProject = () => {
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
            Bachelor's Thesis - University of Copenhagen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Task List Application for Nursing Home Caregivers
          </h1>
          <p className="text-xl text-muted-foreground">
            Process-aware mHealth system powered by DCR Graphs
          </p>
          <p className="text-muted-foreground">
            Python, Kivy, DCR Designer, DCR Active Repository, MySQL, Azure
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/Fadhillah-Portfolio/pdfs/bachelor-report.pdf"
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
            src="/Fadhillah-Portfolio/images/bachelor/bach-hero.png"
            alt="Bachelor project hero screenshot"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            A mobile task-management proof of concept for Danish nursing homes that
            replaces broad routine labels with detailed, shift-specific, real-time tasks.
            Workflow logic is driven by Dynamic Condition Response graphs instead of hard-coded
            rules, enabling process-aware behavior and role-based visibility.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Problem</h2>
          <p className="text-muted-foreground leading-relaxed">
            Existing systems at the case-study nursing home listed high-level routines
            without granular tasks or clear shift differentiation. Caregivers often had to
            document from memory later, increasing risk of missing or inaccurate records.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Solution</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Granular, individually trackable tasks per resident.</li>
            <li>Shift and role-based task visibility (day, evening, night).</li>
            <li>Timestamped, attributed notes per task and resident.</li>
            <li>Real-time updates to reduce duplicate or conflicting actions.</li>
            <li>Admin controls for shift management and GDPR-compliant user removal.</li>
          </ul>
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-login.png"
            alt="Bachelor project login screenshot"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-resident.png"
            alt="Bachelor project resident screenshot"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-notes.png"
            alt="Bachelor project notes screenshot"
            className="w-full rounded-xl border border-border"
          />
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-admin.png"
            alt="Bachelor project admin screenshot"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How It Works: DCR Graph Engine</h2>
          <p className="text-muted-foreground leading-relaxed">
            Resident workflows are modeled as DCR graphs with condition, response,
            include, and exclude relations. Graphs are authored in DCR Designer and
            executed through DCR Active Repository via REST APIs to fetch enabled tasks,
            complete tasks, and manage notes.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-dcr.png"
            alt="Bachelor project DCR graph"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Architecture</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Frontend: Python and Kivy (cross-platform mobile UI).</li>
            <li>Process engine: DCR Active Repository via REST APIs.</li>
            <li>Database: MySQL on Microsoft Azure.</li>
            <li>Live synchronization using scheduled polling for tasks and notes.</li>
          </ul>
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-architecture.png"
            alt="Bachelor project architecture diagram"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">My Role and Process</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Participatory design interviews with caregivers at Hotherhaven Plejehjem.</li>
            <li>Modeled resident workflows with role boundaries and dependencies.</li>
            <li>Built Kivy client for authentication, resident selection, task rendering, and notes.</li>
            <li>Designed and implemented MySQL schema and Azure-hosted data layer.</li>
            <li>Executed unit and exploratory testing to validate multi-user behavior.</li>
            <li>Documented SWOT and security considerations for future iterations.</li>
          </ul>
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-participatory.png"
            alt="Bachelor project participatory design artifact"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Key Findings from Testing</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Identified race condition when duplicate simulations were created concurrently.</li>
            <li>Improved authentication flow to prevent unauthorized data exposure.</li>
            <li>Validated notes UI behavior for typical note lengths and documented edge cases.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Outcome</h2>
          <p className="text-muted-foreground leading-relaxed">
            The project showed DCR graphs can support real-world mobile healthcare task
            management, improving shift-specific execution and documentation clarity while
            highlighting future needs in performance, visual polish, and data security.
          </p>
          <img
            src="/Fadhillah-Portfolio/images/bachelor/bach-align.png"
            alt="Bachelor project alignment diagram"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tech Stack and Methodologies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Python, Kivy, DCR Graphs, DCR Designer, DCR Active Repository, MySQL, Azure,
            Buildozer, Participatory Design, PAIS, SWOT, Unit Testing, Exploratory Testing.
          </p>
        </section>
      </div>
    </div>
  );
};
