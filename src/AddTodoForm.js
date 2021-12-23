import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState();

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");

    console.log(todoTitle);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
