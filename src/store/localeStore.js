import { create } from "zustand"

const useLocaleStore = create((set) => ({
  locale: "en",
  toggleLocale: () =>
    set((state) => ({
      locale: state.locale === "en" ? "es" : "en",
    })),
}))

export default useLocaleStore
