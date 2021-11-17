import React from "react";
function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);

    }
    const handleAddTodo = (event) => {
        event.preventDefault();
       onAddTodo({title:todoTitle,id:Date.now()});

        setTodoTitle('');
      
    };
    return (
        <form onSubmit={handleAddTodo}>        <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>

            <button type="submit">Add</button>

        </form>

    );

}
export default AddTodoForm;