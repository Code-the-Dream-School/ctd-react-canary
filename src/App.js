import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



function App() {
  // const [newTodo, setNewTodo] = React.useState('');

  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {

    setTodoList([...todoList, newTodo])

  };
 

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>
        New todo: {newTodo}  
      </p> */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
