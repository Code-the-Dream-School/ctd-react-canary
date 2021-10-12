import React from 'react';

/* Empty Array to store a variable TodoList */
const todoList = [
  {
    id: '1',
    title: 'Complete assignment'
  },
  {
    id: '2',
    title: 'Lesson 1-1'
  },
  {
    id: '3',
    title: 'JSX in React & Lists in React'
  },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {/* Creating JavaScript expression to map todiList */}
        {todoList.map(item => (
          <li
            key={item.id}>{item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
