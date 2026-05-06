"use client"

import React from "react"
import { useSelector } from "react-redux"

const LocaleDisplay = () => {
  const locale = useSelector((state) => state.locale.locale)
  console.log("LocaleDisplay rendered")

  return (
    <div>
      <strong>Current Locale:</strong> {locale}
    </div>
  )
}

export default LocaleDisplay
