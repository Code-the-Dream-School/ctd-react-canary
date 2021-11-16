
import React, { useState } from 'react';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
function App() {
//const [newTodo, setNewTodo] = React.useState('');
const [todoList, setTodoList] = React.useState([]);
function  addTodo  (newTodo)  {
setTodoList([...todoList, newTodo])
};
  return(
  <div>
    <h1>To do list</h1>
    <AddTodoForm  onAddTodo={addTodo} />

    {/*<ul>{newTodo} </ul>*/}
    <TodoList todoList={todoList}/>
    
    </div>
  );
}

export default App;
