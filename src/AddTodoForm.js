import React from 'react';


function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddToDo = (event) => {
        event.preventDefault();
        // const todoTitle = event.target.todoTitle.value;
        // console.log(todoTitle);
        // console.log(event);
        onAddTodo({title: todoTitle, id: Date.now()});
        // todoTitle.reset(); resetting the form
        // event.target.todoTitle.value = '';
        setTodoTitle('');
    };

    return(
        <div>
            <form onSubmit={handleAddToDo} >
                <label htmlFor="todoTitle">Title </label>
                <input id="todoTitle" name="title" type="text" value={todoTitle} onChange={handleTitleChange}></input>
                <button>Add</button>
            </form>         
        </div>
    );
}

export default AddTodoForm;