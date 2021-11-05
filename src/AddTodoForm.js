import React from 'react';


function AddTodoForm(props) {

    const handleAddToDo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.todoTitle.value;
        console.log(todoTitle);
        // console.log(event);
        props.onAddTodo(todoTitle);
        // todoTitle.reset(); resetting the form
        event.target.todoTitle.value = '';
    };

    return(
        <div>
            <form onSubmit={handleAddToDo} >
                <label htmlFor="todoTitle">Title </label>
                <input id="todoTitle" name="title" type="text"></input>
                <button>Add</button>
            </form>         
        </div>
    );
}

export default AddTodoForm;