import React from "react";

function AddTodoForm() {
  const handleAddTodo = (event) => {
    event.preventDefault();
    let todoTitle = event.target.value;
    console.log(event.submitter.value);
  };

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <form onSubmit= {handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" name="title" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
