import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const peninsulaShops = "https://specials.mediamarkt.es/tools/api-mm/v2/stores";


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

	const [respon, setRespon] = useState([]);

	useEffect(() => {
		async function fecthData(){
			const respuesta = await axios({
				method: 'GET',
				url: peninsulaShops,
			})
			setRespon(respuesta.data)
		}
		fecthData();
	},[setRespon]);
	
	// Convert in Objects without be a collection
	var stores = Object.values(respon)
	// // Convert Objects in Array
	var storesArray = [].concat(stores);
	// // Order Array
	var storesArraySorted = [...storesArray].sort((a, b) => a['displayName'].localeCompare(b['displayName']));
	// // filter Arraya
	/*storesArraySorted.map(({displayName}, i)=> {
		var filters=['Pinto'];
		if(filters.some(el => displayName.includes(el))) delete stores[i]
	})*/

	var storesDisabled = [1119,99999,1995,368,6001,1997,1998,6000,1994,6012,6008,6006,6007,1996,1999,6003];
	storesArraySorted = storesArraySorted.filter(function(store){ return !storesDisabled.includes(store['storeId']); })

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
               {
					respon.length == 0 ?
					<option selected value="">No se pueden cargar datos</option> :
					<>
						<option selected value="">{labelDefault}</option>
						{
						storesArraySorted.map(({storeId, displayName}, i) => <option key={i} value={storeId}>{displayName}</option>)
						}
					</>
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