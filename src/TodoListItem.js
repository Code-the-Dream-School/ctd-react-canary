//rfc
//props - from parent to child

/** JSDoc
 * 
 * @param {*} props 
 * @returns 
 */

import React from 'react';

export default function TodoListItem(props) {

    
    return (
        <div>
            <li>{props.title}</li>
        </div>
    )
}

