import React from 'react'

function AddTodoForm() {
    return (
        <div>
          <form>
           <label>Title</label> 
           <input id="todoTitle" htmlFor="todoTitle"/> 
           <button type="submit">Add</button> 
          </form>  
        </div>
    )
}

export default AddTodoForm
