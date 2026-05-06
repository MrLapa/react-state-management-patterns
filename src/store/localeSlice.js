import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  locale: "en",
}

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    toggleLocale: (state) => {
      state.locale = state.locale === "en" ? "es" : "en"
    },
  },
})

export const { toggleLocale } = localeSlice.actions
export default localeSlice.reducer
