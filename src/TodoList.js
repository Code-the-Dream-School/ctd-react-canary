import React from "react";

let todoList = [
  {
    id: 1,
    title: "complete assignment",
  },
  {
    id: 2,
    title: "Cook dinner",
  },
  {
    id: 3,
    title: "Do laundry",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((list) => (
        <li key={list.id}> {list.title} </li>
      ))}
    </ul>
  );
}

export default TodoList;
