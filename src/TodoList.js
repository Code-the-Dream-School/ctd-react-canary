import React from 'react';

const todoList = [
    {
      objectID: 0,
      title: 'Finish lesson 1.1',
    },
    {
      objectID: 1,
      title: 'Upload to GitHub',
    },
    {
      objectID: 2,
      title: 'Turn in assignment with Squibbly',
    }
  ];

function TodoList() {
    return (       
            <ul>
                {todoList.map(function (listItem) {
                    return (
                    <li key={listItem.objectID}>
                    <span>{listItem.title}</span>
                    </li>
                    );
                })}
            </ul>
    );
}

export default TodoList;