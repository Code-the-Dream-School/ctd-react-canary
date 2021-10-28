import React from 'react'
import './App.css';

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
const listItems = todoList.map((item)=> <li key={item.id}>{item.title}</li>);

function TodoList() {
    return (
        <div>
           {listItems}
        </div>
    )
}

export default TodoList
