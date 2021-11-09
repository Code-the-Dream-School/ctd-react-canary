
import React, { useState } from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
function App() {
const [newTodo, setNewTodo] = useState('');

  return(
  <div>
    <h1>To do list</h1>
    <AddTodoForm  onAddTodo={setNewTodo} />
    <ul>{newTodo} </ul>
    <TodoList />
    
    </div>
  );
}

export default App;
