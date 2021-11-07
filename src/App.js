import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const NewTodo = (props) => {
    const [newTodo,setNewTodo] = React.useState('');
  }
  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm />
      <p>
        Value of newTodo<strong>{NewTodo}</strong>
      </p>
      <TodoList />
      
    </div>
  );
}
export default App;
