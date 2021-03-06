import React from "react";
import PropTypes from "prop-types";

const Input = ({
	type,
	placeholder,
	value,
    onChange,
	name,
	error,
	errorText,
	className,
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
                className={`${!error ? className : `${className} invalid_field`}`}
				errorText={errorText}
				error={error}
				id={id}
			/><span className="span__required">*</span>
			<div className="input__error">
			<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
			 
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
	required: PropTypes.string,
	errorText: PropTypes.string,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	disabled: PropTypes.bool,
	id: PropTypes.string,
};

export default Input;
