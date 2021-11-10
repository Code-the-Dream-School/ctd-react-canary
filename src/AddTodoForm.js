import React from "react";

function AddTodoForm(props) {

  const handleAddTodo = (event) => {
    event.preventDefault();
    let todoTitle = event.target.title.value
    props.onAddTodo(todoTitle)
    console.log(todoTitle)
   
  };


  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          type="text"
          id="todoTitle"
          name="title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
