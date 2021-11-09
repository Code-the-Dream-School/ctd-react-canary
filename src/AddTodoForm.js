import React from "react";
function AddTodoForm(props) {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        props.setNewTodo(todoTitle);
        event.target.reset();
       };
    return (
        <form onSubmit={handleAddTodo}>        <label htmlFor="todoTitle">Tittle</label>
            <input type="text" id="todoTitle" name="title" onChange={handleAddTodo}></input>
         
            <button type="submit">Add</button>
         
        </form>
  
    );
    
}
export default AddTodoForm;