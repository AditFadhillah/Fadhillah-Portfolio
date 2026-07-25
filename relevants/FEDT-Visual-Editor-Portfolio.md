# Configurable Interactive Web Interface for the Fabrication Experiment Design Tool (FEDT)

**A block-based visual programming interface that lowers the barrier to designing, previewing, and running reproducible digital fabrication experiments.**

*University of Copenhagen — Department of Computer Science*
*Master's Thesis, 2026 · Advisor: Valkyrie Savage*

[Repository: github.com/AditFadhillah/Thesis_Submission](https://github.com/AditFadhillah/Thesis_Submission)

---

## TL;DR

FEDT (Fabrication Experiment Design Tool) lets HCI researchers describe fabrication experiments — 3D printing, laser cutting, knitting, and more — as executable Python programs, so procedures stay precise and reproducible. The catch: it's a command-line, code-first tool, which shuts out students and collaborators who aren't comfortable writing Python.

I designed and built a **web-based visual editor** on top of FEDT using **Google Blockly**, organized around **Design of Experiments (DOE)** principles. Instead of writing Python, researchers snap together blocks for *Define Factors → Fabricate → Measure*, and the system compiles their workspace into real, executable FEDT code — while also generating live design-table, measurement-table, and flowchart previews so the experiment can be inspected *before* any material or machine time is spent.

I validated the system by re-implementing **22 real fabrication experiments** drawn from FEDT's own demo suite and from published HCI fabrication papers (AirLogic, CircWood, FabHydro, BlowFab, ElectriPop, Aline, KnitPicking, G-ID, SPEERLoom, Trilaterate, DesignMouldGrow, and more). All 22 generated Python programs ran in the FEDT runtime without any manual edits.

`[SCREENSHOT: Hero shot — full editor in Evaluate mode, Blockly workspace on the left, generated code/flowchart/data tabs on the right]`

---

## The Problem

Fabrication experiments in HCI research (think: laser-cut mechanisms, 3D-printed structures, pneumatic actuators, textiles) require researchers to juggle a lot at once — geometry, machine settings, fabrication sequencing, and measurement protocols — while keeping everything reproducible enough that someone else could rerun the study. FEDT solves the reproducibility half of that problem beautifully: it treats an experiment as an instrumented Python function, and in return produces flowcharts, machine files, measurement templates, and CSV outputs automatically.

But FEDT's interaction model is a Python DSL run from the command line. That's a real barrier for:
- students who are new to programming,
- non-technical collaborators in a fabrication lab,
- and researchers who think visually/spatially about their study design rather than in loops and function calls.

**Research question:** *Can visual programming provide an alternative entry point to FEDT while preserving inspectable experiment structure and executable code generation, for the fabrication patterns that matter most in practice?*

---

## My Approach

Rather than mapping FEDT's Python API one-to-one onto Blockly blocks (which would just reproduce the original complexity in a different shape), I designed a smaller, **experiment-oriented abstraction** organized around four questions any researcher already asks when planning a study:

- **What varies?** → *Factors* and *levels*
- **What gets made?** → *Artifact design* (geometry, fabrication)
- **What's repeated, and in what order?** → *Runs*, `Parallel`/`Series` iteration
- **What's measured?** → *Measurement* operations

This became a **three-section scaffold** in the Blockly workspace — mirroring classic Design of Experiments methodology:

1. **Define Factors** — declare variables (material, laser power, infill %, geometry size…), their levels, and whether they should be tested in `Parallel` (any order) or `Series` (sequential). Nested factors automatically produce a full-factorial design.
2. **Fabricate** — geometry generation, machine configuration, and fabrication operations, referencing the factor variables defined above.
3. **Measure** — what data gets collected per fabricated object, either logged live or exported as a batch-entry template.

Because factors are always declared before they're used, the whole design space can be **statically previewed before a single machine cycle runs** — something FEDT's own paper-mode workflow didn't fully support (it only exposed flowcharts and counts, not a full tabular preview).

`[SCREENSHOT: Close-up of the three-section scaffold block (iteration_block) with Define Factors / Fabricate / Measure regions labeled]`

---

## System Architecture

The system is a local client-server app with three layers:

- **Frontend** — React + TypeScript, served by Vite, using Google Blockly for the editing workspace. A custom TypeScript code generator (`generatePython.ts`) walks the block tree directly (rather than using Blockly's built-in generator API) and emits FEDT-compatible Python.
- **Backend** — FastAPI (Python) + Uvicorn. Exposes FEDT operations over REST, dynamically loads generated code as a Python module via `importlib`, streams interactive execution over **Server-Sent Events (SSE)**, and runs an **AST-based static analyzer** that extracts design/measurement table structures from generated code *without executing any fabrication steps*.
- **FEDT core** — used completely unmodified. The backend just flips a `control.MODE` flag between `Evaluate()` (safe, no hardware) and `Execute()` (real fabrication + prompts) before running the generated module.

`[SCREENSHOT / DIAGRAM: System architecture diagram — Blockly frontend → FastAPI backend → in-process FEDT execution, showing the SSE and REST communication paths]`

### Two ways to look at the system

I evaluated the whole project from two angles, because either one alone isn't enough:

- **Visual Representation** — is the experiment's structure actually inspectable through blocks, tables, and flowcharts, without reading generated Python first?
- **API Translation** — does that visual structure reliably compile into valid, runnable FEDT Python that preserves the experiment's intended semantics?

---

## Key Features

### 1. Custom Blockly vocabulary, not a 1:1 API copy

Blocks are grouped into three functional categories in the palette: **Experiment Definition** (factors, scaffold), **Execution Setup** (geometry, fabrication, instructions, measurement), and **Programming Utilities** (control flow, variables, math, lists, text — for the cases that need general-purpose logic).

Device-specific blocks (e.g. `knitting_machine_knit`, `loom_fab`) hide API details behind dropdowns and typed fields — for example, a loom-type selector exposes five real loom classes (SPEERLoom, Jacq3GLoom, AlbaughLoom, AshfordLoom, TC2Loom) as a simple dropdown instead of requiring users to know Python class names.

`[SCREENSHOT: Block palette with all categories expanded, showing color-coding]`

`[SCREENSHOT: A device-specific block, e.g. laser_fab or loom_fab, showing its parameter fields/dropdowns]`

### 2. Live code generation panel

Every block change is reflected in a generated-code panel so users can see exactly what Python their diagram produces — this keeps the tool honest as a *translation layer*, not just a diagram editor, and lets more advanced users sanity-check or learn from the output.

`[CODE SNIPPET: Example generated FEDT experiment — nested Parallel/Series loops, GeometryFile, Laser.fab(), Calipers.measure_size(), BatchMeasurements accumulation]`

```python
# Example: generated code for a two-factor laser-cutting experiment
@fedt_experiment
def test_simple_laser_cut():
    results = BatchMeasurements.empty()
    # 1. Define Factors and Structure
    for material in Parallel(["wood", "acrylic"]):
        # 2. Fabricate
        cut_piece = Laser.fab(GeometryFile("uploaded/flower.svg"), material=material)
        # 3. Measure
        results += Calipers.measure_size(cut_piece, "width_mm")
    summarize(results.get_all_data())
```

### 3. AST-based static preview, before any fabrication happens

I wrote an AST analyzer (`_extract_design_structure`, `_extract_measurement_structure`) that parses the generated Python, walks nested `for` loops emitted by factor blocks, evaluates simple expressions (`range()`, `arange()` with `include_last` endpoint handling, list literals, arithmetic), and computes the Cartesian product of all declared factors via `itertools.product`. This produces a full **design table** and an empty **measurement table template** — before the laser cutter, printer, or knitting machine ever turns on.

This scaled to a 2,448-row design table (8 filament colors × 6 configuration IDs × 51 light-intensity steps) for one of the more complex validation cases.

`[SCREENSHOT: Data panel showing a generated Design Table and Measurement Table side-by-side, e.g. the Print Shrinkage 15-run example]`

### 4. Two modes of operation, mirroring FEDT's own Design/Execute split

- **Evaluate mode** — runs the experiment with device execution disabled; resolves factor structure and generates a flowchart for planning, combined with the AST-derived tables.
- **Execute mode** — a real, interactive run. The backend spawns a background thread, patches Python's `input()` to intercept FEDT's `instruction()` prompts, and streams `output`, `input_required`, `measurement_structure`, and `complete` events to the frontend over SSE — so the UI can show a modal (with "Done" / "Stop Experiment") every time the researcher needs to physically do something, like align calipers or swap material in the laser bed.

`[SCREENSHOT: The "Action Required" modal shown mid-execution, e.g. "Align the calipers around the width mm of the object, then close them around it."]`

`[SCREENSHOT: Flowchart tab showing the FEDT-generated execution flowchart for a run]`

### 5. Design tables and flowcharts stay linked to one underlying experiment state

Inspired by declarative-visualization work like Vega-Lite, the architecture keeps the Blockly workspace, generated code, design/measurement tables, and flowchart all traceable back to the same structured experiment specification — so nothing drifts out of sync as the user edits blocks.

### 6. Saved experiments & geometry/file management

Experiments can be saved and reloaded (workspace state stored as Blockly's native XML, including layout — not just the generated code). A file panel handles SVG/STL geometry uploads referenced by fabrication blocks, and an output panel surfaces generated flowcharts, CSVs, and key files after each run.

`[SCREENSHOT: Saved Experiments panel / Geometry Files upload panel]`

---

## Validation: 22 real fabrication experiments

Rather than a synthetic test suite, I re-implemented experiments drawn from **FEDT's own demonstration examples** and from **12 published HCI fabrication papers** (AirLogic, CircWood, ElectriPop, BlowFab, FabHydro, Aline, Developable Metamaterials, KnitPicking, G-ID, SPEERLoom, ./Trilaterate, Design-Mould-Grow), covering:

- standard factorial designs (e.g. 3 infill patterns × 5 repetitions = 15 runs),
- parametric geometry driven directly by factor values,
- mixed `Parallel`/`Series` nesting,
- device-specific fabrication (laser cutting, 3D printing, knitting, weaving looms),
- manual human-in-the-loop interventions (compressor setup, manual cutting/inflation, growth/drying waits),
- multi-modal measurement (size, weight, time, resistance, pressure, photos),
- and one large triple-nested factorial design (2,448 planned runs).

**Result:** all 22 generated programs compiled and ran in the real FEDT runtime with **zero manual edits**, correctly preserved FEDT-specific execution patterns (`Parallel`, `Series`, `include_last` endpoint inclusion, `BatchMeasurements` accumulation), and produced flowcharts and CSV outputs matching the intended structure.

`[SCREENSHOT: Side-by-side flowchart comparison — Blockly-generated vs. hand-written FEDT flowchart for the same experiment, e.g. "Force at Break"]`

`[TABLE / SCREENSHOT: Summary table of the 22 validated experiments and their scaffold-fit classification]`

### Where it breaks — and why that's worth documenting

Good validation work also means being honest about the edges. I found four real boundaries:

1. **Adaptive termination** — experiments where the number of iterations is decided at runtime (e.g. "keep adding paint coats until it looks right") don't fit a scaffold built around a pre-declared design space.
2. **Runtime assignment / conditional branching** — e.g. shuffled treatment order decided at runtime rather than declared upfront; representable with raw FEDT-style blocks, but outside the three-section scaffold.
3. **Systematic counterbalancing** — Latin-square ordering (as used in the *Trilaterate* study) isn't yet expressible; random selection is supported, systematic balancing is not.
4. **Generator coverage gaps** — some value expressions (e.g. list indexing, `lists_getIndex`) can be represented visually in the workspace but aren't yet translated into equivalent Python.

I treat these not as failures but as a clear map of "what declarative visual programming is good for" versus "where you still need to drop into code" — which is itself one of the thesis's contributions.

`[SCREENSHOT: The Paint Layers experiment's incomplete adaptive-termination attempt in Blockly, used to illustrate the scaffold's limits]`

---

## Formative Design Work

Before writing any Blockly code, I ran a low-fidelity **paper-prototyping session**: participants physically arranged sticky-note "blocks" to construct a material-breakage experiment (data collection → geometry loading → material iteration → laser cutting → manual instructions → measurement). This directly shaped the three-section scaffold, the need for explicit instruction/prompt blocks, and the emphasis on visible feedback (code, flowchart, and table previews) as trust-building mechanisms.

`[SCREENSHOT: Paper prototype photo — sticky notes arranged into an experiment workflow]`

`[SCREENSHOT: Early wireframe sketches of the eventual web layout]`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Visual editor | React, TypeScript, Vite, Google Blockly |
| Code generation | Custom TypeScript AST-walking generator → FEDT Python |
| Backend | Python, FastAPI, Uvicorn |
| Real-time execution | Server-Sent Events (SSE), background threads, `queue.Queue` |
| Static analysis | Python `ast` module |
| Execution engine | FEDT (unmodified), an embedded Python DSL for fabrication experiments |

---

## What I'd Explore Next

- A formal usability study comparing task completion, error rates, and confidence between the block interface and raw FEDT Python, across novice and experienced programmers.
- An "advanced mode" that relaxes the three-section scaffold for adaptive/runtime-dependent experiments, without losing the clarity that makes the declarative cases so easy to preview.
- Hierarchical/filterable views for very large design tables (the 2,448-row case is correct but not fun to scroll through).
- Full generator coverage for list-indexed and other computed value expressions.

---

## Screenshot Checklist

*(For my own reference when populating this page — replace each bracketed placeholder above.)*

1. Hero: full editor UI in Evaluate mode
2. Three-section scaffold block close-up
3. Architecture diagram
4. Block palette overview
5. A device-specific fabrication block (e.g. `laser_fab` or `loom_fab`)
6. Generated code panel
7. Design + Measurement table preview (Data panel)
8. "Action Required" execution modal
9. Flowchart tab (single run)
10. Saved Experiments / Geometry Files panel
11. Flowchart comparison (Blockly-generated vs. hand-written)
12. Validation summary table (22 experiments)
13. Paint Layers scaffold-limit example
14. Paper prototype photo
15. Early wireframe sketch
