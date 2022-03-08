import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
	TodoList.propTypes = {
		todoList: PropTypes.array,
		onRemoveTodo: PropTypes.func,
	};
	return (
		<ul className={styles.todoList}>
			{todoList.map((item) => {
				return (
					<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
				);
			})}
		</ul>
	);
}

export default TodoList;
