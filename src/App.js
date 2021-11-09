import React from 'react'; 
import TodoList from './TodoList'; //remember the ./ because it's in a different file
import AddTodoForm from './AddTodoForm';



function App() {
    const [newTodo,setNewTodo] =React.useState()
    // remember you need () after useState because it is a function
    // newTodo will show you the state
  
  return (
    <div>
      <h1>To Do List</h1> 
      <AddTodoForm onAddTodo={setNewTodo}/> 
      {/* onAddTodo is the props. We are changing the state of the state in the AddTodoForm and are rending it in App component */}
      <p>{newTodo}</p>
      {/* newTodo is the current state that is written. This is what you use to get the state.setNewTodo is used to set the state */}
      <TodoList/>

    </div>
  );
}

export default App;
