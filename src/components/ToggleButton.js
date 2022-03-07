import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ToggleButton({ todoList, setTodoList }) {
	const [isAscending, setIsAscending] = useState(true);

	ToggleButton.propTypes = {
		todoList: PropTypes.string,
		setTodoList: PropTypes.func,
	};

	function handleClick() {
		setIsAscending(!isAscending);
		console.log("clicked");
	}

	useEffect(() => {
		todoList.sort((a, b) => {
			return isAscending
				? a.fields.Title.localeCompare(b.fields.Title)
				: a.fields.Title.localeCompare(b.fields.Title);
		});
		console.log(isAscending);
		console.log(todoList);
		setTodoList(todoList);
	}, [isAscending, todoList, setTodoList]);

	return (
		<div>
			<button onClick={handleClick}>{isAscending ? "Z - A" : "A - Z"}</button>
		</div>
	);
}

export default ToggleButton;
