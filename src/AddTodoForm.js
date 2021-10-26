import React from 'react'; 

const AddTodoForm = ()=> { 
    return( 
        <form>
            <label htmlFor="todoTitle">Title</label> {/*htmlFor- react syntax for for attr*/}
            <input id="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    )
}


export default AddTodoForm;