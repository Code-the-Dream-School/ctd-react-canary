import React, {useRef, useEffect} from 'react'

function InputWithLabel({todoTitle, handleTitleChange, children}) {
  const inputRef = useRef();
  useEffect(()=> {inputRef.current.focus()})
  return (
    <div>
      <label htmlFor="todoTitle">{children}</label>
				<input
          ref={inputRef}
					value={todoTitle}
					onChange={handleTitleChange}
					id="todoTitle"
					name="title"
				></input>
    </div>
  )
}

export default InputWithLabel

