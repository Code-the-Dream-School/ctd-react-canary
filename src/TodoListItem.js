import React from "react"

function TodoListItem(props) {
    return (
        <ul>
          {props.todoList.map( (item) => <li key={item.id}>My title is: {item.title}. My id is {item.id}</li>)}
            
        </ul>
    )
}

export default TodoListItem
