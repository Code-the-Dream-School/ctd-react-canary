import react from "react";
function TodoListItem(props) {
  console.log(props);
    return (
         <li> {props.item.objectId}
        <span> {props.item.tittle} </span>
            </li>
    );



};
export default TodoListItem;