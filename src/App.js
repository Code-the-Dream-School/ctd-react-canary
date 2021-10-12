import React from "react";

let todoList = [
  {
    id: 1,
    title: "complete assignment",
  },
  {
    id: 2,
    title: "Cook dinner",
  },
  {
    id: 3,
    title: "Do laundry",
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((list) => (
          <li key={list.id}> {list.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
