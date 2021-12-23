import React from 'react'

function TodoListItem({item, todo, onRemoveTodo}) {

  const handleRemoveTodo = () => {
    onRemoveTodo(item)
  }

  return (
    <div>
      <li> {todo} 
      <button onClick={handleRemoveTodo}>Remove</button>
       </li>
      
    </div>
  )
}

export default TodoListItem
