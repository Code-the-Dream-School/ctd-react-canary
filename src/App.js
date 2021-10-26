import React from 'react'; 
import TodoList from './TodoList'; //remember the ./ because it's in a different file
import AddTodoForm from './AddTodoForm';



function App() {
  return (
    <div>
      <h1>To Do List</h1> 
      <AddTodoForm/> 
      <TodoList/>

    </div>
  );
}

export default App;
