import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(key)) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
  };

  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (item) => {
    let newTodoo = todoList.filter((todo) => item.id !== todo.id);
    setTodoList(newTodoo);
    console.log(newTodoo);
  };

  console.log(todoList);

  return (
    <>
      <h1 style={{ color: "green" }}>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
