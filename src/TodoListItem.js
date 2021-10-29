import React from 'react'

function TodoListItem({item}) {
  return (
    <div>
      <li>{item.title}</li>
    </div>
  )
}

export default TodoListItem;
