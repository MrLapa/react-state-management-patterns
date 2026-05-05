"use client"

import React from "react"

import useLocaleStore from "../store/localeStore"

const LocaleDisplay = React.memo(() => {
  const locale = useLocaleStore((state) => state.locale)
  console.log("LocaleDisplay rendered")

  return (
    <div>
      <strong>Current Locale:</strong> {locale}
    </div>
  )
})

LocaleDisplay.displayName = "LocaleDisplay"

export default LocaleDisplay
