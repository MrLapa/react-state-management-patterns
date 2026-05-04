"use client"

import React from "react"

import { useLocale } from "../context/LocaleContext"

const LocaleToggle = () => {
  const { locale, toggleLocale } = useLocale()
  console.log("LocaleToggle rendered")
  return (
    <button onClick={toggleLocale}>
      Switch to {locale === "en" ? "Spanish (es)" : "English (en)"}
    </button>
  )
}

export default LocaleToggle
