import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
    fetch(`https://api.airtable.com/v0/${baseId}/Default`,
      {
        headers: {
          authorization: `Bearer ${apiKey}`

        }
      })
      .then((fetchStatus) => fetchStatus.json())

      .then(function (result) {
        console.log(result);
        setTodoList(result.records);
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]
  )



  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);

  }
  const removeTodo = (id) => {
    const updatedNewTodo = todoList.filter((item) => {
      return item.id !== id;
    })
    setTodoList(updatedNewTodo);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
          <>
            <h1 className={style.header1}> TodoList </h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading...</p> :
              <TodoList todoList={todoList}
                onRemoveTodo={removeTodo} />}</>
        } />
        <Route path="/" exact element={
          <h3>New Todo List</h3>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
