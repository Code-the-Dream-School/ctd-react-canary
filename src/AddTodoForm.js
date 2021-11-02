

import { useState } from 'react';

function AddTodoForm(props) {
  const [text, setText] = useState(''); 

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(text);
    setText(''); 
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        name="title"
        value={text}
        onChange={(event) => setText(event.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;