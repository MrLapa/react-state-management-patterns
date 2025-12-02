# React State Management Patterns — Redux Toolkit Solution

This branch demonstrates how to avoid **prop drilling** by implementing a reusable "Global UI Theme Switcher" using Redux Toolkit.

---

## 🎯 Purpose

> Implement a global theme (light/dark) that can be toggled from anywhere and accessed across multiple components, using Redux Toolkit for state management.

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
│ │ ├── themeSlice.js
│ │ └── index.js
├── PLAN-THEME.md
├── package.json
└── README.md

> **Note:**
> This branch implements the Redux Toolkit solution. No solution-specific folders are created; only the implementation details within files are updated.

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

### Redux Toolkit Theme Management

- Theme state and toggling are managed by Redux Toolkit (`src/store/themeSlice.js`).
- The Redux store is configured in `src/store/store.js`.
- The app is wrapped in a single `<Provider store={store}>` in `src/app/layout.js`.
- Use `useSelector` and `useDispatch` from `react-redux` in components to access and update theme state.
- Set the theme class on `<html>`: `<html lang="en" className={theme}>`.
- CSS uses `.light` and `.dark` classes on `<html>` for styling (same as other solutions).
- No need for multiple providers; Redux manages all global state in a single store.

**Pros:** scalable, predictable, devtools support, easy to add more features/slices.
**Cons:** more boilerplate, external dependencies.

## 🪜 Implementation Steps

### Step 1 — Create Redux Slice

- Create `src/store/themeSlice.js` with `theme` and `toggleTheme` reducer.

### Step 2 — Configure Redux Store

- Create `src/store/index.js` and add the theme slice reducer.

### Step 3 — Integrate Provider

- Wrap the app with `<Provider store={store}>` in `src/app/layout.js`.
- Use a layout component to apply the theme class to `<html>` and render shared UI.

### Step 4 — Update UI Components

- Refactor `ThemeToggle` and `ThemeConsumer` to use Redux hooks (`useSelector`, `useDispatch`).

### Step 5 — Refactor CSS

- Use `.light` and `.dark` classes on `<html>` in `src/app/globals.css` for styling (same as other solutions).

### Step 6 — Documentation

- Document the solution in `src/store/README.md`.

---

## 🧪 Acceptance Criteria

- Theme toggles instantly
- No prop drilling
- Theme is applied globally via `<html className={theme}>`
- Only one Redux `<Provider>` at the root
- Easy to add more slices for other features

### Developer Experience Docs

- `src/store/README.md` explains how the solution works, pros & cons, and when to use it

### Manual Testing

- Load the app
- Toggle theme
- Confirm all components sync

---

## 🔚 Final Deliverables

- This branch with Redux Toolkit solution and documentation
