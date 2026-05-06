import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { toggleTheme } from "../store/themeSlice"

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()
  console.log("ThemeToggle rendered")
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  )
}

export default ThemeToggle
