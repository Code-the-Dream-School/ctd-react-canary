import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Complete assignment",
    dueDate: "Tuesday",
  },
  {
    id: 2,
    title: "Read React official documents",
    dueDate: "Saturday",
  },
  {
    id: 3,
    title: "Clean the car",
    dueDate: "ASAP",
  }
]

function TodoList(){
  return(
    <ul>
        {todoList.map((item) => {
          return (
            <TodoListItem key={item.id} item={item}/>
          )
        })}
      </ul>
  )
}

export default TodoList;