import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';


function useSemiPersistentState (){
  const [todoList, setTodoList] = useState
    (JSON.parse(localStorage.getItem("savedTodoList")) || []);
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList]
  )
  return [todoList, setTodoList];
}


function App() {
  
  const [todoList, setTodoList] = useSemiPersistentState();
  
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  };
function removeTodo (id){
  let list = todoList.filter((TodoItem) => 
    id !== TodoItem.id )

    setTodoList([...list])
}

  return (
    <>
      <h1>To do list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}
export default App;
