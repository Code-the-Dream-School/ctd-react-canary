import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

const InputWithLabel = (props) => {
    const inputRef = useRef();
    useEffect(() => {
        if (props.todoTitle === "") {
            inputRef.current.focus();
            console.log(props.todoTitle);
        }
    }, [props.todoTitle]);

    InputWithLabel.propTypes={
        props: propTypes.string
    }

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