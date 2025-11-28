# PLAN.md

### React State Management Patterns --- Project Plan

This project explores different state-management strategies in React by
solving **the same problem** using multiple approaches:

1.  **React Context API**\
2.  **Zustand**\
3.  **Redux Toolkit**

The goal is to compare their APIs, DX (developer experience),
performance considerations, and ideal use cases.

---

## 🎯 Purpose

This repository demonstrates how to avoid **prop drilling** by
implementing a reusable "Global UI Theme Switcher" in multiple
state-management styles.

Each approach solves the same problem:

> **A global theme (light/dark) that can be toggled from anywhere and
> accessed across multiple components.**

---

## 📁 Folder Structure

    react-state-management-patterns/
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── layout.tsx
    │   │   └── globals.css
    │   │
    │   ├── components/
    │   │   ├── ThemeToggle.tsx
    │   │   └── ThemeConsumer.tsx
    │   │
    │   ├── context-solution/
    │   │   ├── ThemeContext.tsx
    │   │   └── README.md
    │   │
    │   ├── zustand-solution/
    │   │   ├── themeStore.ts
    │   │   └── README.md
    │   │
    │   ├── redux-solution/
    │   │   ├── store.ts
    │   │   ├── themeSlice.ts
    │   │   └── README.md
    │
    ├── PLAN.md
    ├── package.json
    └── README.md

---

## 🧩 The Problem to Solve

A global theme switcher with:

- `theme: "light" | "dark"`
- `toggleTheme(): void`
- Used across the app (not siblings)
- No prop drilling allowed

UI Components:

- `<ThemeToggle />` → Toggles the theme\
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

### Step 1 --- Setup the Base UI

- Implement basic layout with container
- Add `<ThemeToggle />`
- Add `<ThemeConsumer />`
- Default theme = "light"

### Step 2 --- Branch: `context-solution`

- Create context
- Provide in root layout
- Replace local state with context state

### Step 3 --- Branch: `zustand-solution`

- Create Zustand store
- Remove context logic
- Use Zustand hooks instead

### Step 4 --- Branch: `redux-solution`

- Add Redux Toolkit
- Create slice + store
- Wrap provider in layout

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

- `main` branch with base UI\
- `context-solution` branch\
- `zustand-solution` branch\
- `redux-solution` branch\
- Docs included
