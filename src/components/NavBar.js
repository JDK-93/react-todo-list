import React from "react";
const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

const NavBar = ({cant}) => {
  const date = new Date();
  return (
    <div className="h-1/6 w-screen flex flex-row justify-between items-center p-4">
      <div className="flex flex-row text-gray-700 items-center">
        <h1 className="text-6xl pr-2 font-normal ">{date.getDate()}</h1>
        <div className="flex flex-col pb-0.5">
          <h1 className="text-xl font-normal">{months[date.getMonth()]}</h1>
          <h1 className="text-xl font-normal  ">{date.getFullYear()}</h1>
        </div>
      </div>

      <h1 className="w- full text-center text-3xl font-semibold text-gray-700">
        {cant === 0
          ? "No hay tareas"
          : cant === 1
          ? `${cant} tarea`
          : `${cant} tareas`}
      </h1>
    </div>
  );
};
export default NavBar;
