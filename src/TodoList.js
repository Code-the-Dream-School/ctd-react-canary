

import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
	return (
		<ul>
			{todoList.map((item) => {
				return <TodoListItem key={item.objectid} item={item} />;
			})}
		</ul>
	);
}

export default TodoList;
