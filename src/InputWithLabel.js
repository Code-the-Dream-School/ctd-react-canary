import React, {Fragment, useRef, useEffect} from "react";

function InputWithLabel (props){
const inputRef =  useRef ()
useEffect (() => {inputRef.current.focus()});
    return ( 


<Fragment>
 <label htmlFor="todoTitle">{props.children}</label>
 <input
     id="todoTitle"
     type="text"
     name="title"
     value={props.todoTitle}
     onChange={props.handleTitleChange}
     ref = {inputRef} 
     
 ></input>
</Fragment>
)
}
export default InputWithLabel