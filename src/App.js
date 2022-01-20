
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const savedTodoList = "App.todos";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState
    (JSON.parse(localStorage.getItem(savedTodoList)) || []);

  useEffect(() => {
    localStorage.setItem(savedTodoList, JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState([]);
  console.log(todoList);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const filteredTodos = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodos); 
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;