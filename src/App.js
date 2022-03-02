
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {BrowserRouter,Routes, Route }from "react-router-dom";



function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
    {headers:{ Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((response) => response.json())
    .then((result) => 
    {
      setIsLoading(false);
      setTodoList(result.records);

    })

  }, );


  useEffect(() => {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

   

    function addTodo(newTodo) {
      setTodoList([...todoList, newTodo]);

    }

    function removeTodo(id) {
      let newTodolist = todoList.filter((todo) => {
        return todo.id !==id;
      });
      setTodoList(newTodolist);
    }

    return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={
      <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? ( <p>Loading...</p> ):(
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
      </>
        }
        ></Route>
        <Route path="/new" element={<h1>NEW TODO LIST</h1>}></Route>
        </Routes>
        </BrowserRouter>
    );
  }

  export default App;