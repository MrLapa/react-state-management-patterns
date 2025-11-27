import React from 'react';

export default function ThemeConsumer({ theme }) {
  return (
    <div>
      <strong>Current Theme:</strong> {theme}
    </div>
  );
}
