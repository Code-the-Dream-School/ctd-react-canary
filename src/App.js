import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";



function App() {
  const [newTodo, setNewTodo] = React.useState('')
  return (
    <>
      <h1>Todo List</h1>
        <ul>
          <TodoList/>
          <AddTodoForm onAddTodo={setNewTodo}/>
          <p>{newTodo}</p>
        </ul>
    </>
  );
}

export default App;
