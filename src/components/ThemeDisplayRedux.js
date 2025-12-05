"use client"

import React from "react"
import { useSelector } from "react-redux"

const ThemeDisplayRedux = () => {
  const theme = useSelector((state) => state.theme.theme)
  console.log("ThemeDisplayRedux rendered")
  return <div>Current theme: {theme}</div>
}

export default ThemeDisplayRedux
