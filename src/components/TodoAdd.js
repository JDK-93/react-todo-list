import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const refInput =useRef(null)
  const [showForm, setShowForm] = useState(false);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    refInput.current.focus();
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todo: description,
      done: false,
      date: new Date().getDate(),
    };

    handleAddTodo(newTodo);
    setShowForm(false);

    reset();
  };

  const handleSetShowForm = () => {
    setShowForm(true);
  };

  return (
    <div
      className={`absolute inset-x-0 bottom-0 flex flex-col items-center justify-center pb-16`}
    >
      <form
        onSubmit={handleSubmit}
        className={`rounded-xl p-2 mb-2 flex flex-row shadow-lg bg-white ${
          showForm ? "" : "hidden"
        }`}
      >
        <input
          ref={refInput}
          className=" text-base font-thin rounded-l-lg w-full p-2 bg-gray-50 "
          type="text"
          name="description"
          placeholder=""
          autoComplete="off"
          required="true"
          value={description}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-gray-50 text-base font-semibold p-2 bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-r-lg"
        >
          Guardar
        </button>
      </form>
      <div
        className={`h-12 w-12 rounded-full bg-gray-700 cursor-pointer shadow-lg ${
          showForm ? "hidden" : ""
        }`}
        onClick={() => handleSetShowForm()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18"
          />
        </svg>
      </div>
    </div>
  );
};
export default TodoAdd;
