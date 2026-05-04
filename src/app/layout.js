"use client"

import "./globals.css"
import React from "react"

import ThemeProvider from "../context/ThemeProvider"
import LocaleProvider from "../context/LocaleProvider"
import PageWrapper from "../components/PageWrapper"

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <PageWrapper>{children}</PageWrapper>
      </LocaleProvider>
    </ThemeProvider>
  )
}
