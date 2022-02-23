import React from "react";
import InputWithLabel from "./InputWithLabel";
import propTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");
  AddTodoForm.propTypes = {
    onAddTodo: propTypes.func
  }
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    console.log("todoTitle:", todoTitle);
    setTodoTitle("");
    onAddTodo({ title: todoTitle, id: Date.now() });
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
    </form>
  );
}

export default AddTodoForm;
