"use client"

import "./globals.css"
import React from "react"

import ThemeProvider from "../context/ThemeProvider"
import PageWrapper from "../components/PageWrapper"

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <PageWrapper>{children}</PageWrapper>
    </ThemeProvider>
  )
}
