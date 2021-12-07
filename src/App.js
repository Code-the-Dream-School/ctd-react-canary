import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );
  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  //console.log(localStorage);
  //React.useEffect(() => {
  // setTodoList(JSON.parse(localStorage.getItem("savedTodoList")));
  //}, []);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id) => {
    const newTodo = todoList.filter((item) => {
     return item.id !== id 
     
    })
    setTodoList(newTodo);
  };
  return (
    <>
      <h1>Todo List</h1>
      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo} />
      <p></p>
    </>
  );
}

export default App;
