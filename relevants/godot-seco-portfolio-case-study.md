# Godot learning platform: a software ecosystem (SECO) analysis and UX design project

## Overview

This project is a deep-dive analysis of the Godot game engine as a software ecosystem, combined with a proposed design solution for a browser-based learning platform that helps new and experienced developers navigate Godot's fragmented tutorial landscape. The work spans ecosystem theory, software architecture analysis, stakeholder mapping, user research, business modelling, and interactive prototyping.

**[SCREENSHOT: Cover image or title slide of the project]**

---

## The problem

Godot is a free, open-source game engine with no licensing fees and full source code access, but its learning resources are scattered across YouTube channels, official docs, and community forums of varying quality and skill level. New users struggle to find tutorials that match their experience level, while intermediate and experienced developers often can't find concept-first, code-first content that respects their existing expertise.

## Research approach

The project combined several analytical lenses to understand Godot as a socio-technical ecosystem before designing a solution:

- **Software ecosystem (SECO) mapping** — modelling the relationships between the Godot Foundation, core engine team, community contributors, plugin/asset developers, and end users.
- **Semantically Rich Modular Architecture (SRMA) theory** (Pruijt & Brinkkemper, 2014) — used to analyse how Godot's node-based, layered architecture (Core, Scene, Servers, Drivers) achieves modularity and loose coupling through its signal system.
- **Power vs. interest stakeholder grid** (Eden & Ackermann, 1998) — classifying stakeholders such as Orchestrators, Vendors, Niche Players, and Context Setters.
- **Business Model Canvas and Multisided Value Proposition Canvas** (Osterwalder & Pigneur, 2010; Belleflamme & Neysen, 2021) — mapping value creation between game developers and plugin/asset creators as two distinct sides of the platform.
- **End-user development theory** (Lieberman et al., 2006; Ardito et al., 2012) — analysing Godot's "gentle slope of complexity," from visual project settings through GDScript to full GDExtension programming, and its "design-develop-use-evolve" perpetual beta cycle.

**[SCREENSHOT: Ecosystem map / stakeholder diagram overview]**

## Architecture analysis

A major part of the project involved reverse-engineering and documenting Godot's internal architecture: the Core, Scene, Servers, and Drivers layers; the node/scene composition model; the signal-based observer pattern for loose coupling between nodes; and the extension system (GDScript, C#/.NET, GDExtension/C++) that lets developers add functionality without modifying the engine itself.

**[SCREENSHOT: Godot engine architecture diagram]**

## User research: personas and journey mapping

Three personas were developed to represent Godot's user diversity:

- **Tina** — a beginner and tutorial follower who needs to understand *why*, not just *how*.
- **Sam** — an intermediate developer stuck at a plateau, able to follow tutorials but unable to build from scratch.
- **Emma** — an experienced developer switching from Unity/C#, seeking concept guides rather than beginner GUI walkthroughs.

Tina was chosen as the primary design focus, following a "design for one, validate for many" approach, since solving beginner problems (like missing explanations) tends to benefit all skill levels.

Each persona was mapped through a user story map (user → goal → subgoals → actions → tasks) to trace the learning journey from first contact to independent development.

**[SCREENSHOT: Persona cards — Tina, Sam, Emma]**

**[SCREENSHOT: User story map for the beginner journey]**

## Proposed solution

The design solution is a browser-based learning management system (LMS) layered on top of Godot's existing static-site infrastructure (Jekyll frontpage, Sphinx documentation). Key features:

- **Curated learning paths** for beginner, intermediate, and expert users, reducing the friction of finding level-appropriate content.
- **Smart Search** — a unified search interface (proposed via Algolia DocSearch) that clearly distinguishes results between official documentation and community video tutorials.
- **Embedded video tutorials** using the YouTube IFrame Player API, in collaboration with well-known Godot YouTubers.
- **Embedded Godot Web Editor** directly inside tutorial pages, so users can write GDScript and run scenes alongside the explanation.
- **Account, progress tracking, ratings, and reviews**, backed by Supabase for authentication and a PostgreSQL database for storing user progress, ratings, and reviews.

**[SCREENSHOT: Proposed architecture diagram — tutorial pages, search, backend API, Supabase]**

## Prototype

The design process moved from low-fidelity to high-fidelity:

1. **Whiteboard sketches** of key desktop screens to explore layout ideas quickly.
2. **Interactive Figma wireframes** covering the beginner user journey — the critical first-time experience where users are most likely to abandon the platform if they struggle.

The prototype is a conceptual design artifact intended to demonstrate how the research translates into concrete interface structures, rather than a fully implemented, tested product.

**[SCREENSHOT: Whiteboard sketch of the prototype]**

**[SCREENSHOT: Figma wireframes / interactive prototype screens]**

**[SCREENSHOT: Smart Search feature in the prototype]**

## Business model

The value proposition centres on curating scattered Godot learning resources into clear, level-matched paths, delivered through a browser-based LMS. Revenue and growth are supported through collaboration with established Godot YouTubers (embedded videos, joint promotion) and PR campaigns with recognised community figures.

**[SCREENSHOT: Business model canvas]**

---

## Tools and methods used

- Ecosystem and architecture analysis (SRMA theory, stakeholder power/interest grid)
- Persona development and user story mapping
- Business Model Canvas and Multisided Value Proposition Canvas
- Low-fidelity sketching and high-fidelity Figma prototyping
- Proposed technical stack: Jekyll, Sphinx, Algolia DocSearch, Supabase (Auth + PostgreSQL), YouTube IFrame API, Godot Web Editor

---

*Full research, personas, and appendices available on request. Figma prototype link available in the project appendix.*
