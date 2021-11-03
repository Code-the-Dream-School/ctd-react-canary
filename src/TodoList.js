import React from 'react'; 
import TodoListItem from './TodoListItem'; 
// remember to always do the ./ for the path

  

const todoList =[ 
  { 
    id:1,
    title:"Take out the dog", 
  }, 

  { 
    id:2, 
    title:"Feed the dog",
  }, 

  { 
    id:3, 
    title:"Go to the store"
  }, 

  {
    id:4, 
    title:"Pickup dry cleaning"
  }, 

  { 
    id:5,
    title:"Exercise"
  }
]

const TodoList = () =>{ 
    return( 
      <ul> 
        {todoList.map(function(item){ 
          return(
            <TodoListItem key={item.id} todo={item}/>
            // we are passing key as a prop equal to the id of the todo object and passing todo as a prop
          )
        })}
      </ul>
    )
}

export default TodoList;