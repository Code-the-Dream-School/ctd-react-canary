//rfc
//props - from parent to child

/** JSDoc
 * 
 * @param {*} props 
 * @returns 
 */

import React from 'react';

function TodoListItem({title, item, id, onRemoveTodo}) { //destructuring

    
    return (
        <React.Fragment>
            <li>
                {title}
                <button type="button" onClick = {() => onRemoveTodo(item.id)}>Remove</button>
            </li>
        </React.Fragment>
    )
}

export default TodoListItem;