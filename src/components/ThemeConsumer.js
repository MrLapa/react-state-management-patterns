import React from 'react';

const ThemeConsumer = ({ theme }) => {
  return (
    <div>
      <strong>Current Theme:</strong> {theme}
    </div>
  );
};

export default ThemeConsumer;
