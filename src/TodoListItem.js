import React from "react";

function TodoListItem(props) {

    return (
        <li>
            <span> {props.todo.fields.title}</span>
            <button onClick={() => { props.onRemoveTodo(props.item.id) }}>Remove</button>
        </li>
    );



};
export default TodoListItem;