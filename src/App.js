

import React from 'react';


const todolist = [

    {
        objectID: 1,
        title: 'complete assigment 1.1',
    },
    {
        objectID: 2,
        title: 'upload to Github',
    },
    {
        objectID: 3,
        title: 'sent the assignment link by squibbly',

    },
     
];
function App() {
    return (
      <div>
        <h1>To do List</h1>
        <ul>
            {todolist.map(function(Item) {
              return <li key={Item.objectID}>{Item.title}
              </li>
            })}
        </ul>
      </div>
    );
  }


export default App;
