

import React from 'react';
import TodoListItem from './TodoListItem';

const list = [
    {
        objectid : 1,
        title :'Clean the home ',
    },

    {
        objectid : 2,
        title :'Do laundry',
    },
    
    {
        objectid : 3,
        title :'Play Game',
    },
    {
        objectid : 4,
        title : 'Read the react book',
    },


];

function TodoList(){
    return(
      <ul>
          {list.map((item) => {
            return (
              <TodoListItem key={item.objectid} item={item}/>
            )
          })}
        </ul>
    )
  }
  
  export default TodoList;