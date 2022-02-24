

import React from 'react'
import style from "./TodoListItem.module.css";


function TodoListItem({id, title, onRemoveTodo}) {
  const headleRemoveTodo = (e) => {
    onRemoveTodo(id);
  };
  return (
      <li key="{id}">
        {title}
      <button 
      class={style.removeButton}onClick={headleRemoveTodo}>Remove</button>
  </li>
  );
}

export default TodoListItem;