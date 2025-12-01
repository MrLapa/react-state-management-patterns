"use client"

import { useEffect } from "react"

import useThemeStore from "../store/themeStore"

export default function ThemeProvider({ children }) {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    console.log("Theme changed to:", theme)
    document.body.setAttribute("data-theme", theme)
  }, [theme])

  return <>{children}</>
}
