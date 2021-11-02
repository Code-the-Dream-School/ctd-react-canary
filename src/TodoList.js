import React from 'react';
import './App.css';
import TodoListItem from './TodoListItem';

const todoList = [
  {
id:1 ,
title:'Test1'
  },
  {
id:2 ,
title:'Test2'
  },
{
id:3 ,
title:'Test3'
  },


];


function TodoList(props) {
    return (
        <ul>
         <TodoListItem todoList={todoList} /> 
        </ul>
    )
}

export default TodoList
