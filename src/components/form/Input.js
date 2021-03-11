import React from "react";
import PropTypes from "prop-types";

const Input = ({
	type,
	placeholder,
	name,
	value,
    onChange,
	className,
	errorText,
	error,
	disabled,
	id,

}) => {
	return (
		<div className="container__input">
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
                onChange={onChange}
                className={`${className} ${error ? "error" : ""}`}
				errorText={errorText}
				error={error}
				disabled={disabled}
				id={id}
			/><span className="span__required">*</span>
			<div className="input__error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
		</div>
	);
};

// Input.propTypes = {
// 	type: PropTypes.string.isRequired,
// 	placeholder: PropTypes.string,
// 	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	onChange: PropTypes.func.isRequired,
// 	required: PropTypes.string,
// 	errorText: PropTypes.string,
// 	error: PropTypes.bool,
// 	disabled: PropTypes.bool,
// 	id: PropTypes.string,
// };

export default Input;
