import React from "react";

function InputWithLabel(props) {
  const inputRef = React.useRef();
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
