
import React,{useRef, useEffect} from "react";
import propTypes from "prop-types";

function InputWithLabel({todoTitle, handleTitleChange, children}) {
    const inputRef = useRef();
    useEffect(()=> {inputRef.current.focus()})


    InputWithLabel.propTypes = {
		todoTitle: propTypes.string,
		handleTitleChange: propTypes.func,
		children: propTypes.element,
	};

    return (
        <>
            <label htmlfor="todoTitle">{children}</label>
            <input

            ref={inputRef}
            value={todoTitle}
            onChange={handleTitleChange}
            id={todoTitle}
            name="title"
             

        ></input>
        </>
        
        


        
    )
    }
 
    export default InputWithLabel