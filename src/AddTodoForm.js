import React from 'react'

function AddTodoForm(props) {
    const  handleAddTodo = (event) =>  {
        
        event.preventDefault();
        const todoTitle_value = event.target.todoTitle.value;
        //const todoTitle_value2 = event.target.todoTitle2.value;
        console.log("todoTitle:", todoTitle_value);
        event.target.reset();
        //props.onAddTodo(todoTitle_value2)
        props.onAddTodo(todoTitle_value)
        
    }
    
    return (
        <div>
          <form onSubmit={handleAddTodo}>
           <label htmlFor="todoTitle" >Title</label> 
           <input id="todoTitle" htmlFor="todoTitle" name="title"/> 
           {/*<input id="todoTitle2" htmlFor="todoTitle2" name="title"/>*/} 
           <button type="submit">Add</button> 
          </form>  
        </div>
    )
}

export default AddTodoForm
