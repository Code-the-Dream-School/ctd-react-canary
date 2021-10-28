import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";



function App() {
  return (
    <>
      <h1>Todo List</h1>
        <ul>
          <TodoList/>
          <AddTodoForm/>
        </ul>
    </>
  );
}

export default App;
