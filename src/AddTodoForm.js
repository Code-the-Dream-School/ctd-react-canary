import React from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    console.log("todoTitle:", todoTitle);
    setTodoTitle("tesssssssssst")
    props.onAddTodo({title: todoTitle, id: Date.now()});
    
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        onChange={handleTitleChange}
        value={props.todoTitle}
        name="title"
        id="todoTitle"
      ></input>
      <button id="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
