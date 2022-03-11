import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Airtable from "airtable";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isAscending, setIsAscending] = useState(true);

	const base = new Airtable({ apiKey: "keyaxii9U7Wi2Ms9d" }).base(
		"appS9iGsNpgEdTi9u"
	);
	useEffect(
		() =>
			base("Default")
				.select({
					view: "Grid view",
				})
				.eachPage(
					function page(records, fetchNextPage) {
						// This function (`page`) will get called for each page of records.
						setIsLoading(false);
						records.sort((a, b) => {
							return isAscending
								? a.fields.Title.localeCompare(b.fields.Title)
								: b.fields.Title.localeCompare(a.fields.Title);
						});
						console.log(records);
						console.log(isAscending);
						console.log(base);
						setTodoList([...records]);
						fetchNextPage();
					},
					function done(err) {
						if (err) {
							console.error(err);
							return;
						}
					}
				),
		[isLoading, isAscending]
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
		base("Default").destroy(id, function (err, deletedRecords) {
			if (err) {
				console.error(err);
				return;
			}
			console.log("Deleted", deletedRecords.length, "records");
		});
		const filteredTodos = todoList.filter((item) => item.id !== id);
		setTodoList(filteredTodos);
	}
	function handleToggleSort() {
		setIsAscending(!isAscending);
	}

	return (
		<BrowserRouter basename="https://suheylacetin-todoapp.web.app">
			<Routes>
				<Route
					path="/"
					element={
						<div className={styles.mainContainer}>
							<h1>My Todo List</h1>
							<AddTodoForm
								onAddTodo={addTodo}
								todoList={todoList}
								setTodoList={setTodoList}
							/>
							{isLoading ? (
								<p>Loading..</p>
							) : (
								<>
									<button
										className={styles.btnToggle}
										onClick={handleToggleSort}
									>
										{isAscending ? "Z - A" : "A - Z"}
									</button>
									<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
								</>
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
