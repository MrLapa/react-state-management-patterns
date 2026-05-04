"use client"

import React from "react"

import { useLocale } from "../context/LocaleContext"

const LocaleConsumer = () => {
  const { locale } = useLocale()
  console.log("LocaleConsumer rendered")
  return (
    <div>
      <strong>Current Locale:</strong> {locale}
    </div>
  )
}

export default LocaleConsumer
