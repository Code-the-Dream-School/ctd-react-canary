import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


const REACT_APP_AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

const REACT_APP_AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

//React Custom Hook
// const useSemiPersistentState = () => {
  
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem('savedTodoList') || '[]') 
//   );

//   React.useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
  
// };


function App() {
  // const [newTodo, setNewTodo] = React.useState('');
  // const [todoList, setTodoList] = useSemiPersistentState();

  // const removeTodo = (id) => {
  //    //todoListItem
  //   setTodoList([...todoList.filter((item) => {
  //     return item.id !==id;
  //   })])
  // }
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // new Promise((resolve, reject) => {
      // setTimeout(
      //   () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList') ) } }),
      //   2000)
      // })
    fetch(`https://api.airtable.com/v0/${REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization':  `Bearer ${REACT_APP_AIRTABLE_API_KEY}`
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // const dummyResponse = {
        //   records: [
        //     {
        //       createdTime: "",
        //       fields: {
        //         Title: " Be happy"
        //       },
        //       id: "1"
        //     }
        //   ],
        // }

        const airTabletodoList = [];

        for (const record of result.records) {
          //convert records to todo list
          const todoListItem = {
            title: record.fields.Title,
            id: record.id
          }
          //add to airTabketodoList
          airTabletodoList.push(todoListItem);
        }


        // setTodoList ({
        //   type: 'TODO_LIST_FETCH_SUCCESS',
        //   payload: result.records
        //   //result.data.todoList
        //   });
        setTodoList(airTabletodoList)
        setIsLoading(false);
        })
      .catch((error) => {
          setIsLoading(false)
          console.log(error);
        }
      );
  }, []);
  
  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);


  const removeTodo = (id) => {
		const filteredList = todoList.filter((todoListItem) => todoListItem.id !== id);
		setTodoList(filteredList);
	}

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };


  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>
        New todo: {newTodo}  
      </p> */}
      
      {isLoading ? (
        <p>Loading ...</p>
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
    </>
  );
}

export default App;
