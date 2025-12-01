# PLAN.md

# React State Management Patterns --- Project Plan

This repository explores different state-management strategies in React by solving **the same problem** (a global theme switcher) using multiple approaches:

- Context API
- Zustand
- Redux Toolkit

The main branch contains only the base UI and project setup. Each state management solution is implemented in its own dedicated branch, with a focused plan and implementation.

---

## 🎯 Purpose

Demonstrate how to avoid **prop drilling** by implementing a reusable "Global UI Theme Switcher" in multiple state-management styles.

Each solution branch solves the same problem:

> **A global theme (light/dark) that can be toggled from anywhere and accessed across multiple components.**

---

## 📁 Folder Structure

react-state-management-patterns/
├── src/
│ ├── app/
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ └── globals.css
│ ├── components/
│ │ ├── ThemeToggle.tsx
│ │ └── ThemeConsumer.tsx
├── PLAN-THEME.md
├── package.json
└── README.md

> **Note:**
> The folder structure remains the same across all branches. Each solution branch updates only the implementation details and its own plan file.

> **Note:**
> Each state management solution (Context API, Zustand, Redux Toolkit) is implemented in its own branch. The folder structure remains the same across all branches. No solution-specific folders are created; only the implementation details within files are updated per branch.

**Note:**
Each state management solution (Context API, Zustand, Redux Toolkit) is implemented in its own branch (e.g., `feature/context-solution`, `feature/zustand-solution`, `feature/redux-solution`). The folder structure remains the same across branches. No solution-specific folders are created; instead, each branch updates or replaces files as needed to showcase the approach in isolation.

---

## 🧩 The Problem to Solve

A global theme switcher with:

- `theme: "light" | "dark"`
- `toggleTheme(): void`
- Used across the app (not siblings)
- No prop drilling allowed

UI Components:

- `<ThemeToggle />` → Toggles the theme
- `<ThemeConsumer />` → Displays current theme

---

## 📚 Solutions You Will Implement

### 1. React Context API

- Create a `ThemeContext`
- Provide it in `layout.tsx`
- Build custom hooks:
  - `useTheme()`
- Use reducer-based state or simple `useState`

**Pros:** simple, zero dependencies\
**Cons:** re-renders propagate through the tree

---

### 2. Zustand

- Create a store with `create()`
- Expose state + actions
- Update components using selectors

**Pros:** minimal re-renders, simple API\
**Cons:** external lib

---

### 3. Redux Toolkit

- Create a slice: `themeSlice.ts`
- Add store: `store.ts`
- Wrap provider in `layout.tsx`

**Pros:** scalable, predictable, devtools\
**Cons:** more boilerplate

---

## 🪜 Implementation Steps

### Step 1 — Base UI (main branch)

- Implement basic layout with container
- Add `<ThemeToggle />`
- Add `<ThemeConsumer />`
- Default theme = "light"

### Step 2 — Solution Branches

- Create a new branch from `main` for each solution (Context API, Zustand, Redux Toolkit)
- Update [`PLAN-THEME.md`](PLAN-THEME.md) in the solution branch to describe only the relevant state management approach
- Implement the solution in the shared folder structure

---

## 🧪 Acceptance Criteria

### General

- All three solutions must behave exactly the same\
- Theme toggles instantly\
- No prop drilling

### Developer Experience Docs

Each solution folder must include a `README.md` explaining: - How the
solution works\

- Pros & cons\
- When to use it

### Manual Testing

- Load the app\
- Toggle theme\
- Confirm all components sync

---

## 🔚 Final Deliverables

- `main` branch: base UI only
- `feature/theme-context-solution`: Context API implementation and plan
- `feature/theme-zustand-solution`: Zustand implementation and plan
- `feature/theme-redux-solution`: Redux Toolkit implementation and plan
