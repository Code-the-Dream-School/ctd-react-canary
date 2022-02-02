import React from "react";

function TodoListItem(props) {
console.log(props.item);
    return (
        <li>
            <span> {props.item.fields.Title}</span>
            <button onClick={() => { props.onRemoveTodo(props.item.id) }}>Remove</button>
        </li>
    );



};
export default TodoListItem;