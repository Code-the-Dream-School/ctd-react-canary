import React from "react";
import style from "./TodoListItem.module.css"
function TodoListItem({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <li className={style.ListItem}>
          My id is: {item.id}My title is: {item.title}
          
          <button className={style.spacing}
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
