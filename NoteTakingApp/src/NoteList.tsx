import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Note,
  NotesState,
  deleteNote,
} from "./Redux/Store/Features/NoteSlices";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function NoteList() {
  const notes = useSelector(
    (state: { notes: NotesState }) => state.notes.notes
  ) as Note[];
  const dispatch = useDispatch();

  return (
    <div className=" mt-10 w-[70%] flex flex-col gap-10 flex-wrap ml-52 py-5 rounded-md">
      {notes?.map((news) => (
        <Link to={`/notedetail/${news.id}`}>
          <div
            key={news.id}
            className="flex justify-between text-xl border border-blue-500  h-32 items-center p-5 rounded-md hover:border-blue-700 hover:shadow-lg hover:shadow-sky-200"
          >
            <h1>{news.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
