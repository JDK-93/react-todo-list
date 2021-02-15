import React from "react";
const TodoListItem = ({ index, todo, handleEdit, handleDelete }) => {
  return (
    <div className="flex flex-wrap flex-row content-center justify-between p-2  border rounded-xl shadow-md bg-white">
      <li
        key={todo.id}
        className="flex cursor-pointer "
        onClick={() => handleEdit(todo.id)}
      >
        <svg
          className={`h-6 w-6 text-green-200 ${!todo.done ? "hidden" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          className={`h-6 w-6 text-gray-700 ${todo.done ? "hidden " : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
        <p
          className={`text-base font-thin pl-2 ${
            todo.done ? "text-gray-300" : ""
          }`}
        >
          {index + 1}. {todo.todo}
        </p>
      </li>

      <button
        onClick={() => handleDelete(todo.id)}
        className="w-6 h-6 di"
        disabled={todo.done}
      >
        <svg
          className={`h-6 w-6 ${
            todo.done
              ? "text-gray-100 cursor-default "
              : "text-gray-700 cursor-pointer hover:text-red-600"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
export default TodoListItem;
