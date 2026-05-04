import React from "react"

// This component does NOT use useTheme or any context.
// Watch the console — does it re-render when theme toggles?
const NoContextComponent = ({ label }) => {
  console.log(`NoContextComponent (${label}) rendered`)
  return <div>{`${label} I don't use useTheme — do I re-render?`}</div>
}

export default NoContextComponent
