



const todoList = [
    { 
        objectid : 1,
        title :'finish lesson 1.2',
    },

    {
        objectid : 2,
        title :'uploud to Github',
    },
    
    {
        objectid : 3,
        title :'sent the asignment link by squibbly',
    },


];


function TodoList () {
    return (
            <ul>
            {todoList.map(function(item) {
                    return (
                        <li key={item.objectid}>{item.title}</li>
                    );
                })}  
            </ul>
    );
}

export default TodoList;
