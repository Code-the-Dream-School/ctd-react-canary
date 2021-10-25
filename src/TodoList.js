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

function TodoList() {

    return(
        <div>
            <ul style={{ listStyle: 'none' }} >
                {todoList.map(function (item){
                return <li key={item.id}>{item.title}</li>
                })}     
            </ul>
        </div>
    );
}

export default TodoList;



