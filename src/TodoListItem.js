//rfc
//props - from parent to child

/** JSDoc
 * 
 * @param {*} props 
 * @returns 
 */

import React from 'react';

export default function TodoListItem({title}) { //destructuring

    
    return (
        <React.Fragment>
            <li>{title}</li>
        </React.Fragment>
    )
}

