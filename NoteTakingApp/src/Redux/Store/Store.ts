import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './Features/NoteSlices'

export const store = configureStore({
  reducer: {
    notes: notesReducer
  }
})
