import react from "react";
function AddTodoForm() {
    return (
        <form>
            <p><label htmlfor="todoTittle">Tittle</label></p>
    <p> <input type="text" id= "todoTittle"></input></p>
         <p>  <button>Add</button></p>

        </form>

    );
    
}
export default AddTodoForm;