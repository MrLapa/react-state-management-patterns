# PLAN.md

# React State Management Patterns — Zustand Solution

This branch demonstrates how to avoid **prop drilling** by implementing a reusable "Global UI Theme Switcher" using Zustand.

---

## 🎯 Purpose

> Implement a global theme (light/dark) that can be toggled from anywhere and accessed across multiple components, using Zustand for state management.

---

## 📁 Folder Structure

react-state-management-patterns/
├── src/
│ ├── app/
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ └── globals.css
│ ├── components/
│ │ ├── ThemeToggle.js
│ │ └── ThemeConsumer.js
│ ├── store/
│ │ └── themeStore.js
├── PLAN-THEME.md
├── package.json
└── README.md

> **Note:**
> This branch implements the Zustand solution. No solution-specific folders are created; only the implementation details within files are updated.

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

## 📚 Solution Implemented in This Branch

### Minimal Zustand Theme POC (No Provider, No PageWrapper)

- Theme state and toggling are managed by Zustand (`src/store/themeStore.js`).
- Use `"use client"` in `src/app/layout.js` and call `useThemeStore()` directly to get `theme`.
- Set the theme class on `<html>`: `<html lang="en" className={theme}>`.
- CSS uses `.light` and `.dark` classes on `<html>` for styling (same as Context solution).
- No provider or wrapper component needed; Zustand works directly in client components.

**Pros:** minimal, easy to compare with Context, no prop drilling, simple API.
**Cons:** external lib.

## 🪜 Implementation Steps

### Step 1 — Create Zustand Store

- Create `src/store/themeStore.js` with `theme` and `toggleTheme`.

### Step 2 — Update Layout

- Add `"use client"` to `src/app/layout.js`.
- All child components (including pages and imported components) automatically become client components and do not need their own `"use client"` directive.
- Call `useThemeStore()` directly in layout to get `theme`.
- Set `<html lang="en" className={theme}>` for global theme styling.

### Step 3 — Refactor CSS

- Use `.light` and `.dark` classes on `<html>` in `src/app/globals.css` for styling (same as Context solution).

### Step 4 — Update UI Components

- Components use Zustand for theme state and actions (no selector needed for POC).

### Step 5 — Documentation

- Document the solution in `src/store/README.md`.

---

## 🧪 Acceptance Criteria

- Theme toggles instantly
- No prop drilling
- Theme toggles instantly
- Theme is applied globally via <html className={theme}>
- No prop drilling

### Developer Experience Docs

- `src/zustand/README.md` explains how the solution works, pros & cons, and when to use it

### Manual Testing

- Load the app
- Toggle theme
- Confirm all components sync

---

## 🔚 Final Deliverables

- This branch with Zustand solution and documentation
