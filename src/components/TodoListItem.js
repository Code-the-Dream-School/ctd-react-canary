import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ item, onRemoveTodo }) {
	TodoListItem.propTypes = {
		item: PropTypes.string,
		onRemoveTodo: PropTypes.func,
	};
	return (
		<div className={styles.listContainer}>
			<li className={styles.listItem}>{item.fields.Title}</li>
			<button
				className={styles.removeButton}
				type="button"
				onClick={() => onRemoveTodo(item.id)}
			>
				Remove
			</button>
		</div>
	);
}

export default TodoListItem;
