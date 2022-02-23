import propTypes from "prop-types";
import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {

  return (
    <TodoListItem
      onRemoveTodo={onRemoveTodo}
      key={todoList.id}
      todoList={todoList}
    />
  );
}

export default TodoList;
TodoList.propTypes = {
  todoList: propTypes.array,
  onRemoveTodo: propTypes.func
}