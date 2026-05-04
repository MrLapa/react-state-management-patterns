import React from "react"
import { Geist, Geist_Mono } from "next/font/google"

import { useTheme } from "../context/ThemeContext"
import { useLocale } from "../context/LocaleContext"

import ThemeToggle from "./ThemeToggle"
import ThemeConsumer from "./ThemeConsumer"
import LocaleToggle from "./LocaleToggle"
import LocaleConsumer from "./LocaleConsumer"
import NoContextComponent from "./NoContextComponent"
import "../app/globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const PageWrapper = ({ children }) => {
  const { theme } = useTheme()
  const { locale } = useLocale()

  return (
    <html lang={locale} className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeConsumer />
          <LocaleToggle />
          <LocaleConsumer />
          {/* EXPERIMENT: inline child — no useTheme, but parent (PageWrapper) is a subscriber */}
          <NoContextComponent label="PageWrapper" />
          {children}
        </div>
      </body>
    </html>
  )
}

export default PageWrapper
