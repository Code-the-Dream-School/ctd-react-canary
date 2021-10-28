import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList';

function App() {
  return (
    <div>
      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      <AddTodoForm />
      <TodoList />

    </div>
  );
}

export default App;
