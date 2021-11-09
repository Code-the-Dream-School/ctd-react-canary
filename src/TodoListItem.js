import React from "react";
function TodoListItem(props) {
console.log(props);
    return (
         <li> 
        <span>{props.item.objectId} {props.item.tittle} </span>
            </li>
    );



};
export default TodoListItem;