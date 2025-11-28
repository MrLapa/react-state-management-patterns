# Copilot Repository Instructions

## Next.js App Directory Rule

Always add the 'use client' directive at the top of any file in the Next.js app directory that uses React hooks (such as useState, useEffect, useReducer, etc.).

This ensures compatibility with Next.js requirements for Client Components.

- If you create or modify a component and use React hooks, start the file with:

```
"use client";
```

Refer to the [Next.js documentation](https://nextjs.org/docs/app/api-reference/directives/use-client) for more details.

## Component Export Style Rule

For all components except pages and layouts, use arrow functions and export them as default below the function definition:

```js
const MyComponent = (props) => {
  // ...component code...
};

export default MyComponent;
```