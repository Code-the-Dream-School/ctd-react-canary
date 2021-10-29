import React from 'react'



function AddTodoForm( {onAddTodo} ) {
  function handleAddTodo(event){
    event.preventDefault();
    const todoTitle = event.target.title.value;
    event.target.title.value =""; 
    onAddTodo(todoTitle);
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" name="title"></input>
        <button>Add</button>
      </form>
      
    </div>
  )
}

export default AddTodoForm;
