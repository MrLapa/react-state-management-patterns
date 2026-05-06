"use client"

import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { toggleLocale } from "../store/localeSlice"

const LocaleToggle = () => {
  const locale = useSelector((state) => state.locale.locale)
  const dispatch = useDispatch()
  console.log("LocaleToggle rendered")

  return (
    <button onClick={() => dispatch(toggleLocale())}>
      Switch to {locale === "en" ? "Spanish (es)" : "English (en)"}
    </button>
  )
}

export default LocaleToggle
