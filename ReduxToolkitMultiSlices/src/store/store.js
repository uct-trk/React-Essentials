import { configureStore } from '@reduxjs/toolkit'
import formSlice from './slices/formSlice'
import courseSlice from './slices/courseSlice'

export const store = configureStore({
  reducer: {
    form:formSlice,
    courses: courseSlice
  },
})

