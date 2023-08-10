import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  NotesState,
  Note,
  deleteNote,
} from "./Redux/Store/Features/NoteSlices";

export default function NoteDetail() {
  const [news, setNews] = React.useState({
    id: "",
    title: "",
    content: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const notes = useSelector(
    (state: { notes: NotesState }) => state.notes.notes
  ) as Note[];
  React.useEffect(() => {
    notes.map((note) => {
      if (note.id === id) {
        setNews({
          id: note.id,
          title: note.title,
          content: note.content,
        });
      }
    });
  }, []);
  const handleDelete = () => {
    dispatch(deleteNote(news.id));
    navigate("/");
  };

  return (
    <div className=" mt-10 w-[70%] ml-52 border border-slate-200 p-5 rounded-md shadow-md">
      <div className="flex justify-between text-2xl bg-slate-300 mt-5 p-5 rounded-md">
        <h1>{news.title}</h1>
      </div>
      <div className="mt-5 mx-3">{news.content}</div>
      <button
        className="px-4 py-2  text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="px-4 py-2 ml-5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <button
        className="px-4 py-2 ml-5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={() => navigate(`/editnote/${news.id}`)}
      >
        Edit
      </button>
    </div>
  );
}
