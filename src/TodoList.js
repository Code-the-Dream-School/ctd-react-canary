import React from 'react';

function TodoList() {
    return (
        {/* Create an unordered list (<ul>) */}
        <ul>
            {/**
               * Inside your unordered list, insert a JavaScript expression (hint: {})
                Inside the JavaScript expression, map over your todoList array
                For each Object in the Array, return a list item (<li>) with the following:
                key attribute with value of id property
                inner text content with value of title property
            */}

            {todoList.map(function (item){
                return (
                    <li key={item.id}>{item.title}</li>
                );
            })}
        </ul>
    );
}

export default TodoList;