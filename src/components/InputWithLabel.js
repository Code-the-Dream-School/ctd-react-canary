import React from "react";
import propTypes from "prop-types";

function InputWithLabel(props) {
  const inputRef = React.useRef();
  InputWithLabel.propTypes = {
    handleTitleChange: propTypes.func,
    children: propTypes.element,
    todoTitle: propTypes.string }
  React.useEffect(() => {
    inputRef.current.focus();
  } );

  return (
    <>
      <label  htmlFor="todoTitle">
        {props.children}
      </label>
      <input
        //children= "Title"
        onChange={props.handleTitleChange}
        value={props.todoTitle}
        name="title"
        id="todoTitle"
        ref={inputRef}
      ></input>
      <button id="submit">Add</button>
    </>
  );
}

export default InputWithLabel;
