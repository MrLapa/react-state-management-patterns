"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"

import ThemeProvider from "../context/ThemeProvider"
import PageWrapper from "../components/PageWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <PageWrapper>
        {children}
      </PageWrapper>
    </ThemeProvider>
  )
}
