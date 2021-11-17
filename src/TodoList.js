import * as React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList}) {

    
 return (
    <ul>
   
      {todoList.map(function (item) {
        return <TodoListItem item={item}/>;
      })}

    </ul>
  );
  
}
  
export default TodoList;