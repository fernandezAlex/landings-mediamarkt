import React, { useState, useEffect } from "react";
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


	// Convert in Objects without be a collection
	var stores = Object.values(data)
	// Convert Objects in Array
	var storesArray = [].concat(stores);
	// Order Array
	const storesArraySorted = [...storesArray].sort((a, b) => a['displayName'].localeCompare(b['displayName']));
	// filter Arraya
	storesArraySorted.map(({displayName}, i)=> {
		var filters=['Pinto'];
		if(filters.some(el => displayName.includes(el))) delete stores[i]
	})

	// With Dynamic Filter to Order (Filter with Select, see down)

	// const [nombre, setNombre] = useState([]);
	// const sortArray = type => {
	// 	const types = {
	// 	  names: 'displayName',
	// 	  storeID: 'displayName'
	// 	};
	// 	const sortProperty = types[type];
	// 	const sorted = [...storesArraySort].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
	// 	console.log(sorted);
	// 	setNombre(sorted);
	//   };

	return (
		<div className="container__input">
			{/* <select  onChange={(e) => sortArray(e.target.value)}>
				<option value="names">nombre</option>
				<option value="storeID">id</option>
			</select> */}
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
					storesArraySorted.map(({storeId, displayName}, i) => 
					// storesArraySort.sort((a, b) => a.displayName > b.displayName )
					<option key={i} value={storeId}>{displayName}</option>)
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