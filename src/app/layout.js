"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"
import { Provider } from "react-redux"
import { useSelector } from "react-redux"

import store from "../store"
import ThemeToggle from "../components/ThemeToggle"
import ThemeDisplay from "../components/ThemeDisplay"
import LocaleToggle from "../components/LocaleToggle"
import LocaleDisplay from "../components/LocaleDisplay"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

function AppLayout({ children }) {
  const theme = useSelector((state) => state.theme.theme)
  const locale = useSelector((state) => state.locale.locale)
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

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  )
}
