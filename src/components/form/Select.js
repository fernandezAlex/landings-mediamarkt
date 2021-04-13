import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

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
    
	const [respon, setRespon] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url:'https://www.mediamarkt.es/static/json/stores.es.json'
		}).then(res => {
			console.log(res)
			setRespon(res.data)
		}).catch((error) => {
			console.log(error)
			setRespon([])
		})
	},[setRespon]);

	return (
		<>
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
			{
				respon.length == 0 ?
				<option selected value="">No se pueden cargar datos</option> :
					<>
					<option selected value="">{labelDefault}</option>
					{
						respon.map(({IDwws, Name}, i) => <option key={i} value={IDwws}>{Name}</option>)
					}
					</>	
			}
			)}
			</select>
			<span className="span__required">*</span>
			<div className="input__error">
				<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
		</div>
		</>
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