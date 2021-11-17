import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";



function App() {
  
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList,newTodo])
  }
  return (
    <>
      <h1>Todo List</h1>
       <TodoList todoList={todoList}/>
       <AddTodoForm onAddTodo={addTodo}/> 
       <p></p>
    </>
  );
}

export default App;
