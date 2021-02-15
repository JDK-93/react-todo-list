import React, {useReducer, useEffect } from "react";
import TodoList from "../components/TodoList";
import todoReducer from "../hooks/todoReducer";
import TodoAdd from "../components/TodoAdd";
import NavBar from "../components/NavBar";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const Home = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <>
      <NavBar cant={todos.length}/>
      <TodoAdd handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default Home;
