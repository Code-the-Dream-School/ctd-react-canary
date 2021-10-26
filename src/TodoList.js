import React from 'react'; 
  

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
            
            <li key={item.id}> {/*you need a key because each item needs an excplicit key*/}
              {item.title}
            </li> 
 
          )
        })}

      </ul>


    )
}

export default TodoList;