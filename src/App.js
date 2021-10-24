import React from 'react';

// Above the App() function, create an empty Array and store it in a variable named todoList
//const todoList = [];

/**
 * Inside the Array, create at least 3 Objects with the following properties:
   id: unique identifier (ex. 1, 2, 3)
   title: summary of the todo item (ex. "Complete assignment")
 */
todoList = [
- {
    id: 1,
    title: 'Complete homework assignment',
  },

  {
    id: 2,
    title: 'Do the laundry',
  },

  {
    id: 3,
    title: 'Take out the trash',
  },
];

function App() {
  return (
    <div>
      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Create an unordered list (<ul>) */}
      <ul>
        {/**
         * Inside your unordered list, insert a JavaScript expression (hint: {})
           Inside the JavaScript expression, map over your todoList array
           For each Object in the Array, return a list item (<li>) with the following:
           key attribute with value of id property
           inner text content with value of title property
         */}

         {todoList.map(function (item){
           return (
             <li key={item.id}>{item.title}</li>
           );
         })}
      </ul>

    </div>
  );
}

export default App;
