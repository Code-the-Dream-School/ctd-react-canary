import React from 'react';

/* Array to store a variable TodoList */
const todoList = [
  {
    objectID: '0',
    title: 'Complete assignment Lesson 1-1'
  },
  {
    objectID: '1',
    title: 'Upload it to GitHub'
  },
  {
    objectID: '2',
    title: 'Submit it to Squibby'
  },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>

      {/* Rendering todo list */}
      <ul>
        {todoList.map(function (listItem) {
          return <li key={listItem.objectID}>
              <span>{listItem.title}</span>
            </li>
          }
        )}
      </ul>
    </div>
  );
}

export default App;
