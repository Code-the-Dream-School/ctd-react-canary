
import React from "react";

function AddTodoForm() {
    return(
        <form>
            <label htmlFor="todotitle">Title</label>
            <input type="text" id="todotitle"></input>
            <button>Add</button>
        </form>

    );
}
export default AddTodoForm;