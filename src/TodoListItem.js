import React from "react";

function TodoListItem({todoList}) {
  return (
    <ul>
      {todoList.map((item) => (
        <li>
          My id is:{item.id}My title is: {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoListItem;
