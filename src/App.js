import React from 'react';

let todoList = [
  {
    id: 1,
    title: "Complete assignment-1"
  },
  {
    id: 2,
    title: "Complete assignment-2"
  },
  {
    id: 3,
    title: "Complete assignment-3"
  }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item){
          return <li key={item.id}>{item.title}</li>
        })}     
      </ul>
    </div>
  );
}

export default App;
