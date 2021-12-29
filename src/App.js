import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


//React Custom Hook
// const useSemiPersistentState = () => {
  
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem('savedTodoList') || '[]') 
//   );

//   React.useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
  
// };


function App() {
  // const [newTodo, setNewTodo] = React.useState('');
  // const [todoList, setTodoList] = useSemiPersistentState();

  // const removeTodo = (id) => {
  //    //todoListItem
  //   setTodoList([...todoList.filter((item) => {
  //     return item.id !==id;
  //   })])
  // }
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      new Promise((resolve, reject) => {
      setTimeout(
        () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList') ) } }),
        2000)
      })
      .then((result) => {
        setTodoList (result.data.todoList);
        setIsLoading(false);
        }); 
  }, []);
  
  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);


  const removeTodo = (id) => {
		const filteredList = todoList.filter((todoListItem) => todoListItem.id !== id);
		setTodoList(filteredList);
	}

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };


  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>
        New todo: {newTodo}  
      </p> */}
      
      {isLoading ? (
        <p>Loading ...</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
    </>
  );
}

export default App;
