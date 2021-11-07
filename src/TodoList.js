import * as React from "react";
import TodoListItem from "./TodoListItem";
const todoList = [
  {
    objectId: "1",
    tittle: "Study the project",
  },
  {
    objectId: "2",
    tittle: "Watch Videos",
  },
  {
    objectId: "3",
    tittle: "Complete assignment",
  },
];
function TodoList() {
    
  return (
    <ul>
   
      {todoList.map(function (item) {
        return <TodoListItem item={item}/>;
      })}

    </ul>
  );
  
}
  
export default TodoList;