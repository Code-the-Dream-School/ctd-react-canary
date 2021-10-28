
import './App.css';

const todoList = [
  {
id:1 ,
title:'Test1'
  },
  {
id:2 ,
title:'Test2'
  },
{
id:3 ,
title:'Test3'
  },


];
const listItems = todoList.map((item)=> <li key={item.id}>{item.title}</li>);
function App() {
  return (
    <>
      <h1>Todo List</h1>
        <ul>
          {listItems}
        </ul>
    </>
  );
}

export default App;
