Based on your report and what I know about the project, this is the kind of project page I would expect to see in a software engineer's portfolio. It focuses on the product, engineering, research impact, and your contributions rather than reading like an academic paper.

---

# PyMon

### A Serious-Game Platform for Learning Python Programming

**University Project | React • TypeScript • Godot • Pyodide • Supabase • PostgreSQL**

> A web-based educational platform that combines Python programming exercises with Pokémon-inspired gameplay to investigate whether serious-game design can help students experience deeper focus and engagement while learning programming.

**Live Demo:** [https://aditfadhillah.github.io/PyMon/](https://aditfadhillah.github.io/PyMon/)

**Source Code:** [https://github.com/AditFadhillah/PyMon/](https://github.com/AditFadhillah/PyMon/)

---

## Overview

PyMon is a browser-based serious game designed to make programming practice more engaging by integrating Python exercises into a Pokémon-inspired adventure game.

Instead of switching between learning materials, an IDE, and assignment descriptions, students solve programming challenges directly inside the game world. Every successful solution allows the player to capture Pokémon, earn achievements, and progress through different regions while learning increasingly advanced Python concepts.

The project was developed as part of a research study at the University of Copenhagen investigating whether serious-game mechanics can reduce the barriers to starting programming exercises and support students in maintaining focus during learning.

---

### 📷 Screenshot Needed

**Hero image of the application**

*Show the entire interface with the game world on the left and the Python editor on the right.*

---

# Motivation

Many beginner programmers struggle to simply get started.

Traditional programming exercises often require opening multiple applications, locating assignments, configuring development environments, and navigating documentation before writing the first line of code.

This "startup friction" can interrupt motivation before learning even begins.

PyMon explores whether reducing these barriers through game-based interaction can encourage students to practice programming more frequently while creating conditions that support deep engagement and sustained focus.

---

# Features

## Integrated Learning Environment

Rather than separating gameplay and programming, both happen simultaneously.

Players explore a 2D overworld where encountering Pokémon launches programming challenges directly inside the integrated code editor.

There is no need to switch applications or leave the learning environment.

---

### 📷 Screenshot Needed

**Exploration mode**

Player walking around the map before encountering a Pokémon.

---

## Programming Challenges

The game currently contains **34 unique Python exercises** grouped into four themed regions.

| Region     | Programming Topics                |
| ---------- | --------------------------------- |
| 🌲 Forest  | Loops & Iteration                 |
| 🏖 Beach   | Dictionaries                      |
| 🌋 Volcano | Regular Expressions               |
| 🐊 Swamp   | Tuples & Advanced Data Structures |

Each challenge includes

* starter code
* task description
* syntax highlighting
* immediate feedback
* automatic validation

Successfully solving the task captures the Pokémon.

---

### 📷 Screenshot Needed

Programming battle showing

* task description
* code editor
* output window
* Pokémon encounter

---

## Gamification

Instead of traditional grading, progress is rewarded through game mechanics.

Features include

* Pokémon collection
* XP system
* achievements
* login streaks
* regional completion
* time bonuses
* leaderboards
* team competitions

These mechanics encourage continuous practice while avoiding intrusive interruptions during problem solving.

---

### 📷 Screenshot Needed

Achievement page

---

### 📷 Screenshot Needed

Leaderboard

---

### 📷 Screenshot Needed

Pokémon inventory / collection

---

# Technical Architecture

PyMon combines several technologies into a browser-based learning platform.

```
React + TypeScript
        │
        ▼
User Interface
        │
        ▼
Pyodide
(Python execution in browser)
        │
        ▼
Godot Game Engine
        │
        ▼
Supabase
(Authentication & Database)
        │
        ▼
PostgreSQL
```

The browser executes Python locally using **Pyodide**, providing immediate feedback without requiring users to install Python or configure development environments.

Progress, achievements, captured Pokémon, and leaderboard rankings are synchronized through Supabase and PostgreSQL.

---

### 📷 Screenshot Needed

Architecture diagram

---

# Key Technical Challenges

## Executing Python in the Browser

One of the largest engineering challenges was allowing students to execute arbitrary Python code safely inside the browser.

Using Pyodide enabled Python execution entirely client-side while avoiding backend execution infrastructure.

---

## Integrating a Game Engine with React

The application combines

* React for the UI
* Godot for gameplay
* TypeScript for application logic

Keeping communication synchronized between these systems required careful state management and event handling.

---

## Task Validation

Each programming exercise automatically validates user solutions and provides immediate feedback.

This required

* parsing user code
* executing safely
* comparing outputs
* handling runtime errors gracefully
* presenting beginner-friendly error messages

---

## Preventing Repetitive Gameplay

Early testing showed users repeatedly receiving identical programming exercises.

To improve long play sessions, task selection was redesigned to avoid recently completed problems while maintaining randomness.

---

# User Research

PyMon was evaluated through a mixed-method study involving students from the University of Copenhagen.

The evaluation combined

* usage analytics
* application logs
* classroom observation
* interviews
* thematic analysis

### Pilot Study

* 41 registered participants
* 22 active users
* 1-week deployment
* 4 student interviews
* 1 instructor interview

---

### 📷 Screenshot Needed

Usage heatmap

---

### 📷 Screenshot Needed

Session duration visualization

---

# Results

The study identified three important findings.

### Lower Startup Friction

Students found it significantly easier to begin programming because everything was available in a single application.

---

### Better Context Preservation

Keeping exploration, coding, and rewards inside one environment reduced context switching and helped students remain engaged between programming tasks.

---

### Individual Motivation

Different students were motivated by different mechanics.

Some preferred

* leaderboards
* competition
* achievements

Others were primarily motivated by collecting Pokémon or simply enjoying the gameplay.

This suggests educational games should support multiple motivational styles rather than relying on a single gamification mechanic.

---

# What I Learned

This project significantly expanded my experience in both software engineering and user-centered design.

During development I gained hands-on experience with

* designing complex React applications
* TypeScript architecture
* browser-based Python execution with Pyodide
* Godot integration
* Supabase authentication and database management
* educational software design
* usability testing
* iterative prototyping
* mixed-method research
* data-driven product improvement

Beyond the technical implementation, the project taught me how to design software around real user needs by continuously collecting feedback, identifying usability issues, and refining the product through iterative development.

---

# Technologies

* React
* TypeScript
* Godot Engine
* Pyodide
* Supabase
* PostgreSQL
* HTML5
* CSS3
* JavaScript

---

# Links

**Live Demo**

[https://aditfadhillah.github.io/PyMon/](https://aditfadhillah.github.io/PyMon/)

**GitHub Repository**

[https://github.com/AditFadhillah/PyMon/](https://github.com/AditFadhillah/PyMon/)

---

## A suggestion

Since this is one of your strongest portfolio pieces, I'd go beyond a single-page description. Structure it almost like a case study with sections such as:

1. Hero image
2. Overview
3. Motivation
4. Demo GIF (30–60 seconds)
5. Features
6. Technical architecture
7. Engineering challenges
8. Research methodology
9. Results
10. Lessons learned

This format showcases not only your implementation skills but also your ability to design, evaluate, and iterate on a complete software product—qualities that are especially valuable for graduate software engineering roles.
