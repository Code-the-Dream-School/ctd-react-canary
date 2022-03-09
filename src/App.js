import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Airtable from "airtable";
function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
  const base = new Airtable({ apiKey: apiKey }).base(baseId);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${baseId}/Default?view=Grid%20view`,
      {
        headers: {
          authorization: `Bearer ${apiKey}`

        }
      })
      .then((fetchStatus) => fetchStatus.json())

      .then(function (result) {
        console.log(result);
        setTodoList(result.records);
        setIsLoading(false);
      })
    // base('Default').select({
    //   // Selecting the first 3 records in Grid view:
    //   //maxRecords:3,
    //   view: "Grid view"
    // }).eachPage(function page(records, fetchNextPage) {
    //   // This function (`page`) will get called for each page of records.

    //   records.forEach(function (record) {
    //     console.log('Retrieved', record.get('Title'));
  
    //   });

    //   // To fetch the next page of records, call `fetchNextPage`.
    //   // If there are more records, `page` will get called again.
    //   // If there are no more records, `done` will get called.
    //   fetchNextPage();

    // }, function done(err) {
    //   if (err) { console.error(err); return; }
    // });

  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]
  )




  const addTodo = (newTodo) => {
    //setTodoList([...todoList, newTodo]);
    base('Default').create([
      newTodo

    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
      setTodoList([...todoList,records[0]]);
    });

  }
  const removeTodo = (id) => {
    //setTodoList([...todoList,id]);
    console.log(id);
    // const updatedNewTodo = todoList.filter((item) => {
    //   return item.id !== id;
    // })
    // setTodoList(updatedNewTodo);
    base('Default').destroy([
      id
    ], function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      const updatedNewTodo = todoList.filter((item) => {
          return item.id !== id;
        })
        setTodoList(updatedNewTodo);
      console.log(deletedRecords.length, deletedRecords,);
    });


  }
  //console.log(todoList);


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
          <>
            <h1 className={style.header1}> TodoList </h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading...</p> :
              <TodoList todoList={todoList}
                onRemoveTodo={removeTodo} />}</>
        } />
        <Route path="/" exact element={
          <h3>New Todo List</h3>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
