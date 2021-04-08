import React from "react";
import PropTypes from "prop-types";

const SelectShops = ({
	type,
	value,
    onChange,
	name,
	error,
	errorText,
	className,
	id,
    data,
    labelDefault,
	required,

}) => {
	return (
		<div className="container__input">
			<select
				type={type}
				name={name}
				value={value}
                onChange={onChange}
                className={`${!error ? className : `${className} invalid_field`}`}
				errorText={errorText}
				error={error}
				id={id}
			>
                <option disabled selected className="option__default" value="">{labelDefault}</option>
                  {
        data.map(({Name}, i) => <option key={i} value={Name}>{Name}</option>)
}    
            </select>
			{
				required && <span className="span__required">*</span>
			}
			<div className="input__error">
			<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
			 
		</div>
	);
};

SelectShops.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired,
	required: PropTypes.string,
	errorText: PropTypes.string,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	disabled: PropTypes.bool,
	id: PropTypes.string,
    data: PropTypes.string,
};

export default SelectShops;