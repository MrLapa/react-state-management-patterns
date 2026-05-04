import { createContext, useContext } from "react"

export const LocaleContext = createContext()

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
