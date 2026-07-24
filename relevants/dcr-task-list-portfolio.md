# Task List Application for Nursing Home Caregivers, Powered by DCR Graphs

**Bachelor's Thesis — University of Copenhagen, Datalogisk Institut**
Aditya Fadhillah & Nikolaj Frølund Schaltz · Supervisor: Thomas Troels Hildebrandt · 2026

---

## Overview

A mobile task-management application built for caregivers in Danish nursing homes, designed to replace vague, routine-level checklists with a **detailed, shift-specific, real-time task list**. The system is powered by **Dynamic Condition Response (DCR) Graphs** — a process modeling technology developed at the University of Copenhagen — which drives task logic, sequencing, and role-based access instead of hard-coded application rules.

The project was carried out as a proof of concept in partnership with **Hotherhaven Plejehjem**, a Danish nursing home, focusing on the dementia care division. It follows a **Process-Aware Information Systems (PAIS)** architecture and was developed using **Participatory Design**, with regular interviews and feedback loops with real caregivers.

`[SCREENSHOT: App icon / splash or hero shot of the app running on a tablet]`

---

## Problem

Denmark's aging population is placing growing strain on nursing homes, where staff shortages make efficient task management critical. The existing tool used at the case-study nursing home, **Columna Cura**, lists only broad routine names (e.g. "Morgenpleje") without the individual tasks inside them, and does not distinguish between work shifts. This forces caregivers to document their work from memory after the fact, increasing the risk of missed or inaccurate information.

## Solution

An mHealth application that:
- Breaks down each resident's daily routine into **granular, individually trackable tasks** instead of vague routine names
- Assigns tasks to specific **shifts and roles** (Dagholdet / Aftenholdet / Natholdet) so caregivers only see what's relevant to them
- Lets caregivers write and read **notes** tied to specific tasks and residents, timestamped and attributed automatically
- Updates in **real time** across multiple simultaneous users, so two caregivers can't unknowingly duplicate a task (e.g. a double medication dose)
- Includes an **admin view** for managing shifts, terminating/restarting daily processes, and removing users (GDPR-compliant deletion)

`[SCREENSHOT: Login screen]`
`[SCREENSHOT: Resident selection screen]`
`[SCREENSHOT: Task list screen for a shift]`
`[SCREENSHOT: Notes screen showing multiple timestamped notes]`
`[SCREENSHOT: Admin panel]`

---

## How It Works — The DCR Graph Engine

Instead of hand-coding workflow logic, the entire task structure for each resident is modeled as a **DCR Graph**: a constraint-based process graph made of activities (tasks) connected by four relation types:

| Rule | Effect |
|---|---|
| **Condition** | Task B can only appear once Task A is done |
| **Response** | If Task A happens, Task B must eventually follow |
| **Include** | Completing Task A makes Task B available |
| **Exclude** | Completing Task A removes Task B from the list |

`[SCREENSHOT: Full DCR Graph for one resident, e.g. "Borger A", showing the whole day from morning to night care]`

These graphs are built in **DCR Designer** and executed live via the **DCR Active Repository** (a cloud-hosted process engine), which the app queries through a **RESTful API** to fetch currently enabled tasks, mark tasks complete, and store/retrieve notes. This means non-technical staff — not just developers — can eventually adjust a resident's care workflow directly in the graph editor, without touching code.

`[SCREENSHOT: Zoomed-in section of a DCR Graph showing a sub-process, e.g. "Morgenpleje Pakke"]`

---

## Architecture

- **Frontend:** Python + **Kivy** framework — chosen for rapid, cross-platform mobile UI development (Android-first, portable to iOS)
- **Process engine:** DCR Active Repository (cloud-hosted), accessed via **RESTful API** (GET/POST calls, XML responses)
- **Database:** **MySQL**, hosted on **Microsoft Azure**, storing hashed user credentials (SHA-256), roles, and simulation/process metadata
- **Live sync:** Polling via `kivy.Clock` — task list refreshes every 5 seconds, notes every 60 seconds, so multiple caregivers stay in sync without manual refresh

`[SCREENSHOT: Architecture diagram — app ↔ DCR Active Repository ↔ MySQL/Azure]`

---

## My Role & Process

- Conducted **Participatory Design** interviews with caregivers at Hotherhaven Plejehjem to gather real workflow data and translate it into DCR Graph models
- Modeled four full-day resident care workflows as DCR Graphs, encoding shift boundaries, role restrictions, and task dependencies
- Built the Kivy-based mobile client, including login/authentication, resident selection, dynamic task rendering from API responses, and the note-taking system
- Designed and implemented the MySQL schema and Azure-hosted database layer
- Wrote and ran **unit tests** for isolated backend functions and led **exploratory testing** (scenario-based and strategy-based, including error-guessing and boundary-value analysis) to harden the app against real multi-user usage
- Produced a **SWOT analysis** and security review of the final system

`[SCREENSHOT: Affinity diagram from the design process, if you want a "process" visual]`

---

## Key Findings from Testing

- Multi-caregiver testing surfaced a genuine **race condition**: if two caregivers opened the same resident before a process existed, both could spawn duplicate simulations, crashing the app. This was documented and scoped as a fix for future work.
- Error-guessing tests on the login flow uncovered a **security gap** — early builds could leak resident names or task titles to unauthorized users — which led to reworking the authentication flow to validate against both MySQL and the DCR repository before rendering any data.
- Boundary-value testing on the notes feature confirmed the UI held up for typical (3–5 sentence) caregiver notes, with a known cosmetic limitation for very long inputs.

---

## Outcome

The project successfully demonstrated that **DCR Graphs can serve as the backbone of a real-world, mobile task-management system in a healthcare setting** — not just a theoretical modeling tool. Caregiver feedback confirmed the shift-specific task breakdown and note-taking were genuine improvements over the existing Cura system, while also flagging next steps: visual polish, faster login/database performance, and encryption of stored notes for stronger GDPR compliance.

`[SCREENSHOT: Side-by-side "before" Cura routine list vs. "after" detailed task list, if available]`

---

## Tech Stack

`Python` · `Kivy` · `DCR Graphs / DCR Designer` · `DCR Active Repository (RESTful API)` · `MySQL` · `Microsoft Azure` · `Buildozer` (Android packaging)

## Methodologies

`Participatory Design` · `Process-Aware Information Systems (PAIS)` · `SWOT Analysis` · `Unit Testing` · `Exploratory Testing (scenario-based, strategy-based)`
