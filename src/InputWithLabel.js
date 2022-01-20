
import React,{useRef, useEffect} from "react";

function InputWithLabel({todotitle, handleTitleChange, children}) {
    const inputRef = useRef();
    useEffect(()=> {inputRef.current.focus()})
    return (
        <div>
            <label htmlfor="todoTitle">{children}</label>
            <input

            ref={inputRef}
            value={todotitle}
            onChange={handleTitleChange}
            id="todoTitle"
            name="title"
             

        ></input>
        
        


        </div>
    )
    }
 
    export default InputWithLabel