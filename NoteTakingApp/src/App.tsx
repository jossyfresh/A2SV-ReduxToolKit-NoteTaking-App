import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NoteList from "./NoteList";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import Navbar from "./Navbar";
import AddNewsForm from "./AddNote";
import NoteDetail from "./NoteDetail";
import EditNoteForm from "./EditNote";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className=" p-10 flex justify-center text-3xl bg-blue-100 opacity-50 text-black text-bold">
          <h1>Notes</h1>
        </div>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/addnote" element={<AddNewsForm />} />
          <Route path="/notedetail/:id" element={<NoteDetail />} />
          <Route path="/editnote/:id" element={<EditNoteForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
