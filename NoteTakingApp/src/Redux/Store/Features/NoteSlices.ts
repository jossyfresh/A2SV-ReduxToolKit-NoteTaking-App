import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Note {
  id: string
  title: string
  content: string
}

export interface NotesState {
  notes: Note[] 
}

const initialState: NotesState = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload)
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title ,content} = action.payload
      const note = state.notes.find(n => n.id === id)
      if (note) {
        note.title = title
        note.content = content
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(n => n.id !== action.payload)
    }
  }
})

export const { addNote, editNote, deleteNote } = notesSlice.actions
export const notesReducer = notesSlice.reducer
