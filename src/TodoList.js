import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList(props) {

  const {todoList, onRemoveTodo} = props; //destructuring

    return(
        <div>
            <ul style={{ listStyle: 'none' }} >
                {todoList.map(function (item){
                    return (<TodoListItem key={item.id} title={item.title} item={item} onRemoveTodo={onRemoveTodo} />)
                })}   
            </ul>
        </div>
    );
}

export default TodoList;



