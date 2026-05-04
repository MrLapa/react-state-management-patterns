import React from "react"
import { Geist, Geist_Mono } from "next/font/google"

import { useTheme } from "../context/ThemeContext"

import ThemeToggle from "./ThemeToggle"
import ThemeConsumer from "./ThemeConsumer"
import NoContextComponent from "./NoContextComponent"
import "../app/globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const PageWrapper = ({ children }) => {
  const { theme } = useTheme()

  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeConsumer />
          {/* EXPERIMENT: inline child — no useTheme, but parent (PageWrapper) is a subscriber */}
          <NoContextComponent label="PageWrapper" />
          {children}
        </div>
      </body>
    </html>
  )
}

export default PageWrapper
