import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Note, NotesState } from "./Redux/Store/Features/NoteSlices";
import { useNavigate, useParams } from "react-router-dom";
import { editNote } from "./Redux/Store/Features/NoteSlices";

export default function EditNoteForm() {
  const [news, setNews] = React.useState({
    Id: "",
    title: "",
    content: "",
  });
  const notes = useSelector(
    (state: { notes: NotesState }) => state.notes.notes
  ) as Note[];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();
  const handeltitel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNews({ ...news, title: e.target.value });
  };
  const handlecontent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNews({ ...news, content: e.target.value });
  };

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editNote({
        id: news.Id,
        title: news.title,
        content: news.content,
      })
    );
  };

  React.useEffect(() => {
    notes.map((note) => {
      if (note.id === id) {
        setNews({
          Id: note.id,
          title: note.title,
          content: note.content,
        });
      }
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center text-2xl mt-10">
        <h1>Edit Note</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center mt-10"
        onSubmit={handlesubmit}
      >
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            value={news.title}
            onChange={handeltitel}
            placeholder="Enter title"
            className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <textarea
          className="w-[50%] border border-blue-300 rounded-md p-2 focus:border-none"
          rows={10}
          value={news.content}
          onChange={handlecontent}
          placeholder="Enter content"
        />
        <div className="flex gap-10">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={() => navigate(`/notedetail/${news.Id}`)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
