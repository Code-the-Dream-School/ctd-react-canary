import React, { useRef, useEffect } from 'react';

function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus();
    },)

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
                <input ref={inputRef} id="todoTitle" name="title" type="text" value={props.todoTitle} onChange={props.handleTitleChange}></input>
        </>
    )
}

export default InputWithLabel
