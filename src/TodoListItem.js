import React from 'react'; 
 
const TodoListItem = (props) =>{ 
    return( 
        <li>
            {props.todo.title}
            {/* props is an object that we are referencing from TodoList and todo is an object that we are passing from TodoList */}
        </li> 
    );
} 
export default TodoListItem;