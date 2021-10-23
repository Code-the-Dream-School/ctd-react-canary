import React from 'react';

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
    title: "Clean the kitchen",
    dueDate: "ASAP",
  }
]

function TodoList(){
  return(
    <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
  )
}

export default TodoList;