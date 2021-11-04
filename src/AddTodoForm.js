import React from 'react'; 

const AddTodoForm = (props)=> { 
    const handleAddTodo = (event)=>{ 
        // created handler function
        event.preventDefault()
        // preventing default behavior of form submit 
        let todoTitle =event.target.title.value;
        // this variable holds the value of the input. 
        console.log(todoTitle);
       event.target.title.value =' ' ;
    //    clearing the input value after submit

       props.onAddTodo(todoTitle);
    //    we are invoking the newTodo as the todoTitle so we can see the state
    // we use totoTitle instead of saying newTodo because newTodo is not defined here and we are taking the todoTitle from the input
    }
    return( 
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label> {/*htmlFor- react syntax for for attr*/}
            <input name="title" id="todoTitle" ></input>
            <button type="submit" >Add</button>
        </form>
    )
}


export default AddTodoForm;