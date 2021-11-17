import React from 'react'
import TodoListItem from './TodoListItem';



function TodoList({todoList}) {
    return (
        
           <TodoListItem key={todoList.id} todoList={todoList}/>
        
    )
}

export default TodoList
