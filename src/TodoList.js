import React from "react";
import TodoListItem from "./TodoListItem";

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
        <TodoListItem key={list.id} todo={list.title} />
      ))}
    </ul>
  );
}

export default TodoList;
