import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
