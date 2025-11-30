## PageWrapper Pattern for Theme Management

To keep theme logic modular and maintainable, this project uses a `PageWrapper` component:

- `PageWrapper` is responsible for rendering the global `<html>` and `<body>` structure.
- It applies the current theme as a class to the `<html>` element using the value from the context.
- It imports and applies font variables for consistent styling.
- It renders shared UI components like `ThemeToggle` and `ThemeConsumer`.
- All page content (`children`) is rendered inside `PageWrapper`.

### Example Usage

In `src/app/layout.js`:

```jsx
<ThemeProvider>
  <PageWrapper>{children}</PageWrapper>
</ThemeProvider>
```

In `src/components/PageWrapper.js`:

```jsx
const PageWrapper = ({ children }) => {
  const { theme } = useTheme()
  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeConsumer />
          {children}
        </div>
      </body>
    </html>
  )
}
```

### Why This Pattern?

- Keeps global theme logic in one place.
- Ensures the theme class is always applied to `<html>`.
- Makes it easy to swap state management solutions in different branches.

> **Note:** The folder structure remains consistent across branches. The PageWrapper pattern is used for all solutions to ensure a fair comparison.

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
    │   ├── app/
    │   │   ├── page.tsx
    │   │   ├── layout.tsx
    │   │   └── globals.css
    │   ├── components/
    │   │   ├── ThemeToggle.tsx
    │   │   └── ThemeConsumer.tsx
    │   ├── context/
    │   │   ├── ThemeContext.tsx
    │   │   ├── ThemeProvider.tsx
    │   │   └── README.md
    ├── PLAN.md
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

## 📚 Solution Implemented in This Branch

### React Context API

- Create a `ThemeContext`
- Create a `ThemeProvider` component to encapsulate context logic and provide the value
- Use `ThemeProvider` in `layout.tsx` to wrap the app
- Build custom hook: `useTheme()`
- Use reducer-based state or simple `useState`

**Pros:** simple, zero dependencies
**Cons:** re-renders propagate through the tree

## 🪜 Implementation Steps

### Step 1 — Setup the Base UI

- Implement basic layout with container
- Add `<ThemeToggle />`
- Add `<ThemeConsumer />`
- Default theme = "light"

### Step 2 — Context API Solution

- Create a `ThemeContext`
- Create a `ThemeProvider` component to encapsulate context logic and provide the value
- Use `ThemeProvider` in `layout.tsx` to wrap the app
- Build custom hook: `useTheme()`
- Use reducer-based state or simple `useState`
- Use `PageWrapper` to apply theme and render UI components

---

## 🧪 Acceptance Criteria

- Theme toggles instantly
- No prop drilling
- Only one place (PageWrapper) sets global HTML/body structure and theme class

### Developer Experience Docs

- `src/context/README.md` explains how the solution works, pros & cons, and when to use it

### Manual Testing

- Load the app
- Toggle theme
- Confirm all components sync

---

## 🔚 Final Deliverables

- This branch with Context API solution and documentation
