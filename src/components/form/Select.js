import React from "react";
import PropTypes from "prop-types";
import { conditionalExpression } from "@babel/types";

const Select = ({
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
	var stores = Object.values(data);
	stores.map(({displayName}, i)=> {
		var filters=['Próxima','Pinto'];
		if(filters.some(el => displayName.includes(el))) delete stores[i]
	})
	
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
				<option selected value="">{labelDefault}</option>
				{
					stores.map(({storeId, displayName}, i) => <option key={i} value={storeId}>{displayName}</option>)
				}    
            </select><span className="span__required">*</span>
			<div className="input__error">
			<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
			 
		</div>
	);
};

Select.propTypes = {
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

export default Select;