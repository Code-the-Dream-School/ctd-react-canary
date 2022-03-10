import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";
import PropTypes from "prop-types";
import { uuid } from "uuidv4";
import Airtable from "airtable";

var base = new Airtable({ apiKey: "keyaxii9U7Wi2Ms9d" }).base(
	"appS9iGsNpgEdTi9u"
);

function AddTodoForm({ onAddTodo }) {
	const [todoTitle, setTodoTitle] = useState();

	AddTodoForm.propTypes = {
		onAddTodo: PropTypes.func,
	};

	function handleTitleChange(e) {
		const newTodoTitle = e.target.value;
		setTodoTitle(newTodoTitle);
	}

	function handleAddTodo(e) {
		e.preventDefault();
		base("Default").create(
			[{ fields: { Title: todoTitle } }],
			function (err, records) {
				if (err) {
					console.error(err);
					return;
				}
				records.forEach(function (record) {
					console.log(record.getId());
				});
			}
		);
		onAddTodo({ fields: { Title: todoTitle }, id: uuid() });
		setTodoTitle("");
	}

	return (
		<div>
			<form onSubmit={handleAddTodo} className={styles.addForm}>
				<InputWithLabel
					className={styles.input}
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				>
					{/* Title {""} */}
				</InputWithLabel>
				<button className={styles.addButton}>+</button>
			</form>
		</div>
	);
}

export default AddTodoForm;
