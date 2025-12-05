"use client"

import React from "react"
import { useDispatch } from "react-redux"

import { toggleTheme } from "../store/themeSlice"

const ThemeToggleButtonRedux = () => {
  const dispatch = useDispatch()
  console.log("ThemeToggleButtonRedux rendered")
  return <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
}

export default ThemeToggleButtonRedux
