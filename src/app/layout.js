"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"

import useThemeStore from "../store/themeStore"
import ThemeToggle from "../components/ThemeToggle"
import ThemeDisplay from "../components/ThemeDisplay"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const { theme } = useThemeStore()

  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeDisplay />
          {children}
        </div>
      </body>
    </html>
  )
}
