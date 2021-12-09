import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
	const [todoTitle, setTodoTitle] = useState();

	function handleTitleChange(e) {
		const newTodoTitle = e.target.value;
		setTodoTitle(newTodoTitle);
	}

	function handleAddTodo(e) {
		e.preventDefault();
		onAddTodo({ title: todoTitle, id: Date.now() });
		setTodoTitle("");
	}

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} >Title </InputWithLabel>
				<button>Add</button>
			</form>
		</div>
	);
}

export default AddTodoForm;
