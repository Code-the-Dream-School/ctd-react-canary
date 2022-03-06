import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";

const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;
function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(
		() =>
			fetch(URL, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			})
				.then((response) => response.json())
				.then((result) => {
					console.log(result.records);
					result.records.sort((objectA, objectB) =>
						objectB.fields.Title.localeCompare(objectA.fields.Title)
					);
					console.log(result.records);
					setTodoList([...result.records]);
					setIsLoading(false);
				}),
		[]
	);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
	}, [todoList, isLoading]);

	function addTodo(newTodo) {
		setTodoList([...todoList, newTodo]);
	}

	function removeTodo(id) {
		const filteredTodos = todoList.filter((item) => item.id !== id);
		setTodoList(filteredTodos);
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div className={styles.mainContainer}>
							<h1>My Todo List</h1>
							<AddTodoForm onAddTodo={addTodo} />
							{isLoading ? (
								<p>Loading..</p>
							) : (
								<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
							)}
						</div>
					}
				></Route>
				<Route path="/new" element={<h1>NEW TODO LIST</h1>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
