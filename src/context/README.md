# React Context API Solution

## Overview

This solution uses React's built-in Context API to manage a global theme (light/dark) across the application. It avoids prop drilling and allows any component to access or toggle the theme state.

## How It Works

- **ThemeContext**: Provides the theme state and toggle function.
- **ThemeProvider**: Encapsulates context logic and supplies the value to the tree.
- **useTheme Hook**: Custom hook for easy access to theme state and actions.
- **PageWrapper**: Renders the global HTML/body structure, applies the theme class, and contains theme UI components.
- **ThemeToggle & ThemeConsumer**: UI components to toggle and display the current theme.

### Usage

1. Wrap your app with `ThemeProvider` in `layout.js`.
2. Render `PageWrapper` inside the provider.
3. Use `useTheme()` in any component to access or modify the theme.

## Pros & Cons

**Pros:**

- Simple, zero dependencies
- Easy to understand and implement
- Good for small/medium apps

**Cons:**

- Context value changes cause re-renders for all consumers
- Not ideal for very large or performance-critical apps

## When to Use Context API

- When you need to share simple global state (like theme, locale, auth)
- When avoiding prop drilling is a priority
- When you want a dependency-free solution

## Example

```jsx
// Access theme in any component
import { useTheme } from "../context/ThemeContext"
const { theme, toggleTheme } = useTheme()
```

---

For more details, see the implementation in this folder and the main plan in `PLAN-THEME.md`.
