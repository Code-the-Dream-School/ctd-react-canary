import React, { useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
 function useSemiPersistentState(){
  const[todoList, setTodoList]= React.useState(JSON.parse(localStorage.getItem("savedTodoList"))||[]);

  useEffect(()=>{
    localStorage.setItem("savedTodoList",JSON.stringify(todoList));
   },[todoList]
  )
return(
  [todoList,setTodoList])
 }
 
function App() {
const[todoList, setTodoList]=useSemiPersistentState();

   

    const addTodo =(newTodo)=>{
     setTodoList([...todoList,newTodo]);
      
   }
  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={addTodo }/>
       
      <TodoList todoList={todoList} />
      
    </div>
  );
}
export default App;
