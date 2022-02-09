import React from "react";
import style from './TodoListItem.module.css';

function TodoListItem(props) {
console.log(props.item);
    return (
        <li className={style.ListItem}>
            <span> {props.item.fields.Title}</span>
            <button onClick={() => { props.onRemoveTodo(props.item.id) }}>Remove</button>
        </li>
    );



};
export default TodoListItem;