import React, { useRef, useEffect } from "react";


const InputWithLabel = (props) => {
    const inputRef = useRef();
    useEffect(() => {
        if (props.todoTitle === "") {
            inputRef.current.focus();
            console.log(props.todoTitle);
        }
    }, [props.todoTitle]);

    return (
        <>  <label htmlFor="todoTitle">
            {props.children}</label>
            <input type="text"
                id="todoTitle"
                name="title"
                value={props.todoTitle}
                onChange={props.handleTitleChange}
                ref={inputRef}
            >

            </input>
        </>

    )

};

export default InputWithLabel;