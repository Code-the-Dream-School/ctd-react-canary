import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {

  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem todo={item} key={item.id} />
      })}
    </ul>
  )
}
export default TodoList;