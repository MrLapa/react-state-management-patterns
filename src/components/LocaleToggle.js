"use client"

import React from "react"

import useLocaleStore from "../store/localeStore"

const LocaleToggle = React.memo(() => {
  const locale = useLocaleStore((state) => state.locale)
  const toggleLocale = useLocaleStore((state) => state.toggleLocale)
  console.log("LocaleToggle rendered")

  return (
    <button onClick={toggleLocale}>
      Switch to {locale === "en" ? "Spanish (es)" : "English (en)"}
    </button>
  )
})

LocaleToggle.displayName = "LocaleToggle"

export default LocaleToggle
