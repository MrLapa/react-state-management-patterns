import { configureStore } from "@reduxjs/toolkit"

import themeReducer from "./themeSlice"
import localeReducer from "./localeSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    locale: localeReducer,
  },
})

export default store
