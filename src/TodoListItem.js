import React from "react";

function TodoListItem({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <li>
          My id is: {item.id}My title is: {item.title}
          <button
            onClick={() => {
              onRemoveTodo(item.id);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoListItem;
