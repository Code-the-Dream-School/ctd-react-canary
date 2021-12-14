import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

//console.log(localStorage);
//React.useEffect(() => {
//setTodoList(JSON.parse(localStorage.getItem("savedTodoList")));
//}, []);

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")),
            },
          }),
        2000
      );
    }).then((result) => {
      setTodoList(result.data.todoList);
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
