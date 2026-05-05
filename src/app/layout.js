"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"

import useThemeStore from "../store/themeStore"
import useLocaleStore from "../store/localeStore"
import ThemeToggle from "../components/ThemeToggle"
import ThemeDisplay from "../components/ThemeDisplay"
import LocaleToggle from "../components/LocaleToggle"
import LocaleDisplay from "../components/LocaleDisplay"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const theme = useThemeStore((state) => state.theme)
  const locale = useLocaleStore((state) => state.locale)

  return (
    <html lang={locale} className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeDisplay />
          <LocaleToggle />
          <LocaleDisplay />
          {children}
        </div>
      </body>
    </html>
  )
}
