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

function App() {
  return (
    <div>
      <h1>To Do List</h1> 
      <ul> 
        {todoList.map(function(item){ 
          return(
            
            <li key={item.id}> {/*you need a key because each item needs an excplicit key*/}
              {item.title}
            </li> 
 
          )
        })}

      </ul>


    </div>
  );
}

export default App;
