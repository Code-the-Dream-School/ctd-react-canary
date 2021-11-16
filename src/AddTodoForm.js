import React from "react";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState("");
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        // const handleTitleChange =(event) => {  
    };
    const handleAddTodo = (event) => {
        event.preventDefault()
        //    const todoEl = document.getElementById('todoTitle');
        //    const todoTitle = todoEl.value;
        onAddTodo({ title: todoTitle, id: Date.now() });
        // event.target.reset();
        // onAddTodo({
        //     id: Date.now(),
        //     title: todoTitle,
        // });
        // event.target.todoTitle.value = "";
        setTodoTitle('');
    };
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" type="text"
                    name="title" value={todoTitle}
                    onChange={handleTitleChange}></input>
                <button>Add</button>

            </form>

        </div>


    );
}

export default AddTodoForm;