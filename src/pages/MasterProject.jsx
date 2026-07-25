import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectImage } from "../components/ProjectImage";
import { ThemeToggle } from "../components/ThemeToggle";

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

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold">{children}</h2>
);

export const MasterProject = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <ThemeToggle />
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
            Master's Thesis - University of Copenhagen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Configurable Interactive Web Interface for the Fabrication Experiment Design Tool
          </h1>
          <p className="text-xl text-muted-foreground">
            Block-based visual programming for reproducible digital fabrication experiments
          </p>
          <p className="text-muted-foreground">
            Department of Computer Science, 2026 · Advisor: Valkyrie Savage
          </p>
          <p className="text-primary">
            React, TypeScript, Blockly, FastAPI, Python, AST Analysis, Server-Sent Events
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/AditFadhillah/Thesis_Submission"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Source Code
            </a>
            <a
              href="/Fadhillah-Portfolio/pdfs/Master_Thesis_FEDT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Thesis PDF
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle> </SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            FEDT helps HCI researchers write reproducible fabrication experiments as Python
            programs. It is very powerful, but it is also code-first and command-line based,
            which is difficult for many students and collaborators.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In this thesis, I built a web-based visual editor using Google Blockly.
            Users create experiments with blocks using a clear workflow:
            Define Factors, Fabricate, and Measure. The system then generates real FEDT
            Python code and gives live previews of design table, measurement table,
            and flowchart before running any machine.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I validated the editor by re-implementing 22 real experiments from FEDT demos
            and published fabrication papers. All generated programs ran in FEDT with
            zero manual code edits.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-hero.png"
            alt="Hero screenshot"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>The Problem</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            Fabrication experiments in HCI involve many moving parts: geometry,
            machine settings, fabrication sequence, and measurement steps.
            FEDT handles reproducibility very well by treating experiments as
            executable programs, but writing those programs directly in Python
            can be a barrier for users who are less comfortable with coding.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Research question: can visual programming become an easier entry point to FEDT,
            while still keeping experiments inspectable and executable?
          </p>
        </section>

        <section className="space-y-4">
          <SectionTitle>My Approach</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            I did not copy the FEDT Python API one-to-one into blocks. Instead,
            I designed an experiment-oriented abstraction based on common planning
            questions used in Design of Experiments.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>What varies: factors and levels.</li>
            <li>What gets made: geometry and fabrication operations.</li>
            <li>What repeats and in which order: Parallel and Series iteration.</li>
            <li>What gets measured: measurement operations per artifact.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This became a three-section scaffold in the workspace.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Define Factors: variables, levels, and nesting for factorial combinations.</li>
            <li>Fabricate: geometry creation and machine actions using factor values.</li>
            <li>Measure: data collection, logging, and batch measurement templates.</li>
          </ul>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-3section.png"
            alt="Three-section scaffold screenshot"
            className="block w-3/4 mx-auto rounded-xl border border-border"
          />
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-3sectionexample.png"
            alt="Three-section scaffold example screenshot"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>System Architecture</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            The system is a local client-server application with three layers.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Frontend: React + TypeScript + Blockly (Vite). A custom generator walks
              the block tree and emits FEDT-compatible Python.
            </li>
            <li>
              Backend: FastAPI + Uvicorn. It loads generated code dynamically,
              streams events with Server-Sent Events, and controls execution mode.
            </li>
            <li>
              FEDT core: used unmodified. The backend switches between Evaluate mode
              and Execute mode using FEDT controls.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            I evaluated the system from two views: visual representation quality
            and API translation correctness.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-architecture.png"
            alt="System architecture diagram"
            className="w-full rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>Key Features</SectionTitle>
          <h3 className="text-xl font-semibold">1. Custom Blockly vocabulary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Blocks are grouped into Experiment Definition, Execution Setup,
            and Programming Utilities. Device-specific blocks hide FEDT API details
            behind typed fields and dropdowns.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-category.png"
            alt="Block palette with categories and color coding"
            className="w-3/4 mx-auto rounded-xl border border-border"
          />
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-circwood.png"
            alt="Block example: circwood experiment"
            className="w-full rounded-xl border border-border"
          />

          <h3 className="text-xl font-semibold">2. Live code generation panel</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every block change updates generated Python immediately, so users can inspect
            the exact FEDT code and learn from the translation.
          </p>
          <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto text-sm text-muted-foreground">
{`@fedt_experiment
def test_simple_laser_cut():
    results = BatchMeasurements.empty()
    for material in Parallel(["wood", "acrylic"]):
        cut_piece = Laser.fab(GeometryFile("uploaded/flower.svg"), material=material)
        results += Calipers.measure_size(cut_piece, "width_mm")
    summarize(results.get_all_data())`}
          </pre>

          <h3 className="text-xl font-semibold">3. AST-based static preview</h3>
          <p className="text-muted-foreground leading-relaxed">
            The backend parses generated Python with AST and extracts design structure
            and measurement structure without running fabrication hardware. This enables
            pre-run design and measurement table previews.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The approach scales to large designs, including a validated 2,448-row
            design table case.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-table.png"
            alt="Generated design table and measurement table"
            className="w-3/4 rounded-xl mx-auto border border-border"
          />

          <h3 className="text-xl font-semibold">4. Evaluate and Execute modes</h3>
          <p className="text-muted-foreground leading-relaxed">
            Evaluate mode supports safe planning. Execute mode supports real runs with
            human-in-the-loop prompts. Input requests are streamed to the UI using SSE,
            where users can continue or stop at each instruction step.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-userinput.png"
            alt="User input during execution"
            className="block w-1/2 mx-auto rounded-xl border border-border"
          />
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-flowchart.png"
            alt="System flowchart"
            className="block w-full mx-auto rounded-xl border border-border"
          />

          <h3 className="text-xl font-semibold">5. Unified experiment state</h3>
          <p className="text-muted-foreground leading-relaxed">
            Blockly workspace, generated code, tables, and flowchart all map to the same
            underlying experiment state, so views stay consistent while editing.
          </p>

          <h3 className="text-xl font-semibold">6. Saved experiments and file handling</h3>
          <p className="text-muted-foreground leading-relaxed">
            Workspace state can be saved and restored as Blockly XML, including layout.
            Geometry uploads and output files are managed in dedicated panels.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-save.png"
            alt="System flowchart"
            className="block w-full mx-auto rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>Validation on 22 Real Experiments</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            I validated the system with FEDT demos and 12 published HCI fabrication
            papers, including AirLogic, CircWood, ElectriPop, BlowFab, FabHydro,
            Aline, KnitPicking, G-ID, SPEERLoom, Trilaterate, and Design-Mould-Grow.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Coverage included factorial designs, nested Parallel and Series loops, and device-specific workflows.</li>
            <li>Coverage included manual interventions and multi-modal measurement collection.</li>
            <li>One case reached 2,448 planned runs.</li>
            <li>All 22 generated programs ran in FEDT with zero manual edits.</li>
          </ul>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-comparison.png"
            alt="Comparison of generated vs hand-written FEDT"
            className="block w-3/4 mx-auto rounded-xl border border-border"
          />
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-summary.png"
            alt="Validation summary table"
            className="block w-full mx-auto rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>Boundaries and Known Limits</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            Documenting limits was an important part of this thesis.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Adaptive termination patterns decided at runtime are not fully represented by the scaffold.</li>
            <li>Runtime assignment and conditional ordering are possible with raw blocks but outside the scaffold model.</li>
            <li>Systematic counterbalancing methods like Latin-square are not yet supported.</li>
            <li>Some generator translation gaps remain for list-indexed expressions.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <SectionTitle>Formative Design Work</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">
            Before implementation, I ran low-fidelity paper prototyping sessions.
            Participants physically arranged sticky-note blocks to construct
            fabrication workflows. This directly informed the three-section scaffold,
            explicit instruction prompts, and the need for visible feedback panels.
          </p>
          <ProjectImage
            src="/Fadhillah-Portfolio/images/master/master-prototype.png"
            alt="Paper prototype"
            className="block w-3/4 mx-auto rounded-xl border border-border"
          />
        </section>

        <section className="space-y-4">
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-card/60">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Layer</th>
                  <th className="text-left px-4 py-3 font-semibold">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="px-4 py-3">Visual editor</td>
                  <td className="px-4 py-3">React, TypeScript, Vite, Google Blockly</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Code generation</td>
                  <td className="px-4 py-3">Custom TypeScript AST-walking generator to FEDT Python</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Backend</td>
                  <td className="px-4 py-3">Python, FastAPI, Uvicorn</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Real-time execution</td>
                  <td className="px-4 py-3">Server-Sent Events, background threads, queue.Queue</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Static analysis</td>
                  <td className="px-4 py-3">Python ast module</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Execution engine</td>
                  <td className="px-4 py-3">FEDT runtime (unmodified)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle>What I Would Explore Next</SectionTitle>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Formal usability study versus raw FEDT Python for novice and advanced users.</li>
            <li>Advanced mode for adaptive runtime-dependent experiments.</li>
            <li>Better views for very large design tables to reduce scrolling overhead.</li>
            <li>Full generator coverage for computed and indexed value expressions.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};
