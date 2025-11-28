"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React, { useState } from "react"

import ThemeToggle from "../components/ThemeToggle"
import ThemeConsumer from "../components/ThemeConsumer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <ThemeConsumer theme={theme} />
          {children}
        </div>
      </body>
    </html>
  )
}
