import React from 'react';
import TodoListItem from './TodoListItem';


// let todoList = [
//     {
//       id: 1,
//       title: "Dance"
//     },
//     {
//       id: 2,
//       title: "Sing"
//     },
//     {
//       id: 3,
//       title: "Celebrate"
//     }
//   ];

function TodoList(props) {

  const {todoList} = props; //destructuring

    return(
        <div>
            <ul style={{ listStyle: 'none' }} >
                {todoList.map(function (item){
                    return (<TodoListItem key={item.id} title={item.title} />)
                })}   
            </ul>
        </div>
    );
}

export default TodoList;



