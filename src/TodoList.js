import React from "react";

import TodoListItem from "./TodoListItem";

  function TodoList ({ todoList, onRemoveTodo }) {
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
