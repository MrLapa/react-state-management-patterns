# Zustand Solution

## Overview

This solution uses [Zustand](https://zustand-demo.pmnd.rs/) for global theme (light/dark) state management. Zustand provides a simple, scalable API for state without prop drilling or context re-render issues.

## How It Works

- **themeStore**: Zustand store manages theme state and toggle function.
- **useThemeStore Hook**: Used directly in any component to access or modify theme.
- **ThemeToggle & ThemeConsumer**: UI components to toggle and display the current theme.
- **Theme applied via `<html className={theme}>`**: Ensures global styling.

### Usage

1. Use `"use client"` in `layout.js` and call `useThemeStore()` to get the theme.
2. Apply the theme class to `<html>`.
3. Use `useThemeStore()` in any component to access or modify the theme.

## Pros & Cons

**Pros:**

- Minimal re-renders (only affected components update)
- Simple API, easy to scale
- No prop drilling or context provider needed

**Cons:**

- External dependency
- Slightly more setup than Context for very simple cases

## When to Use Zustand

- When you need scalable global state (theme, auth, settings)
- When you want minimal re-renders and easy selector logic
- When you want a modern, flexible state library

## Example

```jsx
// Access theme in any component
import useThemeStore from "../store/themeStore"
const { theme, toggleTheme } = useThemeStore()
```

---

For more details, see the implementation in this folder and the main plan in `PLAN-THEME.md`.
