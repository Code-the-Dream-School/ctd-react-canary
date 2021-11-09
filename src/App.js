import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
 
    const [newTodo, setNewTodo] = React.useState('');
  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm setNewTodo={setNewTodo }/>
       
      <p> Value of <strong>{newTodo}</strong></p>
      
      <TodoList />
      
    </div>
  );
}
export default App;
