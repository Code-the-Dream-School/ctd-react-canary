
import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";


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
				<InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
				<br></br>
				<button>Add</button>
			
			</form>
		</div>
	);
};

export default AddTodoForm;

