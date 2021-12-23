import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  // let todos = todoList;
  // console.log(todos)
  return (
    <ul>
      {todoList.map((list) => (
        <TodoListItem key={list.id} todo={list.title} />
      ))}
    </ul>
  );
}

export default TodoList;
