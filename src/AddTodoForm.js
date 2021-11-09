import React from "react";

function AddTodoForm ({onAddTodo}){
    const handleAddTodo = (event) =>{
        
        event.preventDefault();
       const todoEl = document.getElementById('todoTitle');
       const todoTitle = todoEl.value;
        
        event.target.reset();
        onAddTodo(todoTitle);
    }
    return(
        <div>
                <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" type="text" name= "title"></input>
                <button>Add</button>

                </form>

        </div>
        
        
        ); 
}

export default AddTodoForm;