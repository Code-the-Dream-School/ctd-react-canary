import propTypes from "prop-types";
import * as React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
//console.log(props.todoList);
TodoList.propTypes={
  props: propTypes.string
}
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