import React from "react";
import PropTypes from "prop-types";

const SelectBudget = ({
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

}) => {

	// const labelDefault = "<span id='span'>*</span>" 
	const label = `${labelDefault}         <span id='span'>*</span>` 
	return (
		<div className="container__input">
			<div className="container__select">

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
                <option selected hidden value="" dangerouslySetInnerHTML={{__html: label }} />
                  {
					  data.map(({value, name}, i) => <option key={i} value={value}>{name}</option>)
					}    
            </select>
					</div>
			<div className="input__error__select">
			<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
			 
		</div>
	);
};



// Select.propTypes = {
// 	type: PropTypes.string.isRequired,
// 	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	onChange: PropTypes.func.isRequired,
// 	required: PropTypes.string,
// 	errorText: PropTypes.string,
// 	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
// 	disabled: PropTypes.bool,
// 	id: PropTypes.string,
//     data: PropTypes.string,
// };

export default SelectBudget;