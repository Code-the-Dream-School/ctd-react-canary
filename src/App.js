import React, { useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
 
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading]=React.useState(true);
  useEffect(() => {
    new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve({data:{
          todoList:JSON.parse(localStorage.getItem("savedTodoList")),
        }})
      }, 2000);

    }) 
    .then((result)=>{
     setTodoList(result.data.todoList);
     setIsLoading(false);
    })
  },[])

  useEffect(() => {
    if(!isLoading){
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));}
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
    <>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> :
      <TodoList todoList={todoList}
        onRemoveTodo={removeTodo} />
      }

    </>
  );
}
export default App;
