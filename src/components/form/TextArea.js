import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
	type,
	placeholder,
	name,
	value,
    onChange,
    autoComplete,
	className,
	required,
	errorText,
	error,
	disabled,
	id,
	rows,

}) => {
	return (
		<div className="container__textarea">
			<textarea
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                className={`${className} ${error ? "error" : ""}`}
                required={required}
				errorText={errorText}
				error={error}
				disabled={disabled}
				id={id}
				rows={rows}
			/>
				<div className="textarea__error"
					dangerouslySetInnerHTML={{__html: error ? errorText : null}}
				>
				</div>
			

		</div>
	);
};

TextArea.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
    autoComplete: PropTypes.func,
	className: PropTypes.string,
	required: PropTypes.string,
	errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	error: PropTypes.bool,
	disabled: PropTypes.bool,
	id: PropTypes.string,
	rows: PropTypes.number,
};

export default TextArea;
