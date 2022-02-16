
import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({onAddTodo}) {
	const[todoTitle, setTodoTitle] = useState();

	function handleTitleChange(event) {
		const newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	};

	function handleAddTodo(event) {
		event.preventDefault();
		onAddTodo({fields: {Title: todoTitle},
			id: Date.now() });
		setTodoTitle('');
	};

	return (
		
			<form onSubmit={handleAddTodo}>
				<InputWithLabel
				todoTitle={todoTitle} isFocused
				handleTitleChange={handleTitleChange}>
					title
				</InputWithLabel>
				<button>Add</button>
			</form>
		
	);
};

export default AddTodoForm;

