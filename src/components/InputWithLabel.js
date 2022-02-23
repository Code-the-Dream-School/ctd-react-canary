import React, { useRef, useEffect } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	});
	InputWithLabel.propTypes = {
		todoTitle: PropTypes.string,
		handleTitleChange: PropTypes.func,
		children: PropTypes.element,
	};
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
