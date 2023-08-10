import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./Redux/Store/Features/NoteSlices";
import { useNavigate } from "react-router-dom";

export default function AddNewsForm() {
  const [Title, setTitle] = React.useState("");
  const [Content, setContent] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: (Date.now() + Math.floor(Math.random() * 1000000)).toString(),
        title: Title,
        content: Content,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center text-2xl mt-10">
        <h1>Add New Note</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center mt-10"
        onSubmit={handleSubmit}
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
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <textarea
          className="w-[50%] border border-blue-300 rounded-md p-2 focus:border-none"
          rows={10}
          value={Content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
