import React, { useState } from "react"

import { LocaleContext } from "./LocaleContext"

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en")
  const toggleLocale = () => setLocale(locale === "en" ? "es" : "en")

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
