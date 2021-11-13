<<<<<<< HEAD
import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

=======
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const NewTodo = (props) => {
    const [newTodo,setNewTodo] = React.useState('');
  }
  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm />
      <p>
        Value of newTodo<strong>{NewTodo}</strong>
      </p>
      <TodoList />
      
    </div>
  );
}
>>>>>>> 48ae096b9df2571e4766f805d0f8fd0e3393dc7a
export default App;
