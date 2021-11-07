import react from "react";
function AddTodoForm() {
    const handleAddTodo = (event) => {
        event.preventDefault();
        setNewTodo(event.target.value);
        console.log(event.target.value);
        handleAddTodo.remove()
       
    };

    return (
        <form>
            <label htmlFor="todoTitle">Tittle</label>
            <input type="text" id="todoTitle" name="title" onSubmit = {handleAddTodo } onAddTodo = {setNewTodo}></input>
         <button>Add</button>
             
        </form>

    );
    
}
export default AddTodoForm;