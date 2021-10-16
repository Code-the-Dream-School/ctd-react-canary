import * as React from 'react';
const todoList = [{
        objectId: '1',
        tittle: 'Study the project',
    },
    {
        objectId: '2',
        tittle: 'Watch Videos',
    },
    {
        objectId: '3',
        tittle: 'Complete assignment',
    }
];


function App() {

    return ( <
        div >

        <
        h1 > TodoList < /h1>

        <
        ul > {
            list.map(function(item) {
                return <li key = { item.objectId } > { item.tittle } < /li>;


            })
        } <
        /ul>


        <
        /div>
    );
}



export default App;