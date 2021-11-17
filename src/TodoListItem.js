import React from "react";

function TodoListItem(props) {
  return (
    <ul>
      {props.todoList.map((item) => (
        <li>
          my id is:{item.id}my title is:{item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoListItem;
