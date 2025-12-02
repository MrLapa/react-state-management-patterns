"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"
import { Provider } from "react-redux"
import { useSelector } from "react-redux"

import store from "../store"
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

function ThemeLayout({ children }) {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <ThemeToggle />
          <ThemeConsumer />
          {children}
        </div>
      </body>
    </html>
  )
}

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <ThemeLayout>{children}</ThemeLayout>
    </Provider>
  )
}
