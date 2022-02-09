import React, { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<div>
			<label htmlFor="todoTitle" className={styles.label}>
				{children}
			</label>
			<input
				className={styles.addInput}
				ref={inputRef}
				value={todoTitle}
				onChange={handleTitleChange}
				id="todoTitle"
				name="title"
			></input>
		</div>
	);
}

export default InputWithLabel;
