# Redux Toolkit Solution

## Overview
This solution uses Redux Toolkit for global theme (light/dark) state management. Redux provides scalable, predictable state and is easy to extend for more features.

## How It Works
- **themeSlice**: Manages theme state and toggle action.
- **store.js**: Configures Redux store.
- **Provider**: Wraps the app in `layout.js`.
- **ThemeToggle & ThemeConsumer**: Use Redux hooks to access and update theme.
- **Theme applied via `<html className={theme}>`** for global styling.

### Usage
1. Use `<Provider store={store}>` in `layout.js`.
2. Use `useSelector` and `useDispatch` in components.
3. Add more slices to `store.js` as needed.

## Pros & Cons
**Pros:** scalable, predictable, devtools support, easy to add features  
**Cons:** more boilerplate, external dependency

## Example
```jsx
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/themeSlice"

const theme = useSelector(state => state.theme.theme)
const dispatch = useDispatch()
```

---

For more details, see the implementation in this folder and the main plan in `PLAN-THEME.md`.
