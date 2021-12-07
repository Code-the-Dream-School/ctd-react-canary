import * as React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {


  return (
    <ul>

      {props.todoList.map(function (item) {
        return <TodoListItem
          item={item}
          key={item.id}
          onRemoveTodo={props.onRemoveTodo} />;
      })}

    </ul>
  );

}

export default TodoList;