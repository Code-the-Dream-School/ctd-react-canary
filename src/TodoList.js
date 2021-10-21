import * as React from "react";
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
   
        {todoList.map(function (listItem) {
          return (
            <li key={listItem.objectId}>
              <span> {listItem.tittle} </span>
            </li>
          );
        })}
      </ul>
    

);



}
export default TodoList;