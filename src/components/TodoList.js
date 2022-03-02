import React from "react";

import TodoListItem from "./TodoListItem";
import propTypes from "prop-types";

  function TodoList ({ todoList, onRemoveTodo }) {

	TodoList.propTypes ={
		Todolist: propTypes.array,
		onRemoveTodo: propTypes.func,
	  };


	return (
		<div>

		<ul>
			{todoList.map((item) => {
				return <TodoListItem 
				title={item.fields.Title}
				id={item.id}
				key={item.id} 
				onRemoveTodo={onRemoveTodo} />;
				
				
			})}
		</ul>
		</div>
	);
}

export default TodoList;
