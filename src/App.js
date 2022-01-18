import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

//console.log(localStorage);
//React.useEffect(() => {
//setTodoList(JSON.parse(localStorage.getItem("savedTodoList")));
//}, []);
console.log(process.env)
function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.records)
        setTodoList(result.records);
        setIsLoading(false);
        
      });
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id) => {
    const newTodo = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodo);
  };
  return (
    <>
      <h1>Todo List</h1>
      {isLoading ? <p>Loading...</p> : [TodoList]}
      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo} />
      <p></p>
    </>
  );
}

export default App;
