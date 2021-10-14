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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
