import  React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
    id: '1',
    title: 'Open the file',
    },
    {
      id: '2',
    title: 'Remove existing JSX',
    },
    {
      id: '3',
    title: 'Create level one heading',
    },
  ];
  
  function TodoList() {
   return(
   <ul>
      
            {todoList.map(function (item) {
                return <TodoListItem todo={item} key={item.id}/>

            })}
        </ul>
   )}
  export default TodoList;