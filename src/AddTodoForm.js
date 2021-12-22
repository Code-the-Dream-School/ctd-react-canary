
import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
	const[todoTitle, setTodoTitle] = useState();

	function handleTitleChange(event) {
		const newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	};

	function handleAddTodo(event) {
		event.preventDefault();
		onAddTodo({title: todoTitle, id: Date.now() });
		setTodoTitle("");
	};

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<label htmlFor="todoTitle">Title</label>
				<input
					value={todoTitle}
					onChange={handleTitleChange}
					id="todoTitle"
					name="title"
				></input>
				<button>Add</button>
			</form>
		</div>
	);
};

export default AddTodoForm;

