

import React from 'react'
import style from "./TodoListItem.module.css";
import propTypes from 'prop-types';



function TodoListItem({id, title, onRemoveTodo}) {
  const headleRemoveTodo = (e) => {
    onRemoveTodo(id);
  };

  TodoListItem.propTypes = {
		item: propTypes.string,
		onRemoveTodo: propTypes.func,
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