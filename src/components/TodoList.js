import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div className="p-4 overflow-auto h-5/6">
      <ul className="pt-4 pr-2  space-y-2 overflow-y-auto">
        {todos.map((todo, index) => (
          <TodoListItem
            index={index}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      </div>
  );
};
export default TodoList;
