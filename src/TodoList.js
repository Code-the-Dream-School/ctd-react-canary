import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  // let todos = todoList;
  // console.log(todos)
  return (
    <ul>
      {todoList.map((list) => (
        <TodoListItem key={list.id} item={list} todo={list.title} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
