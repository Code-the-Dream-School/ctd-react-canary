
import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import propTypes from "prop-types";




function AddTodoForm({onAddTodo}) {
	const[todoTitle, setTodoTitle] = useState();


AddTodoForm.propTypes = {
	onAddTodo: propTypes.func,

};


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
					Title
				</InputWithLabel>
				<button>Add</button>
			</form>
		
	);
};

export default AddTodoForm;

