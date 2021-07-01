import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { conditionalExpression } from "@babel/types";

const canariasShop= "https://www.mediamarkt.es/static/json/datashops-ca.json";
const peninsulaShops = "https://specials.mediamarkt.es/tools/api-mm/v2/stores";
var urlAxios = "";


const Select = ({
	type,
	value,
    onChange,
	name,
	error,
	errorText,
	className,
	id,
	labelDefault,
	setParam
}) => {

	// Set urlAxios request by Param URL Canarias
	setParam ? (urlAxios = canariasShop) : (urlAxios = peninsulaShops);

	const [respon, setRespon] = useState([]);

	useEffect(() => {
		async function fecthData(){
			const respuesta = await axios({
				method: 'GET',
				url: urlAxios,
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

	var storesDisabled = [1119,99999];
	storesArraySorted = storesArraySorted.filter(function(store){ return !storesDisabled.includes(store['storeId']); /*console.log(store['storeId'])*/ })

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
		<>
		<div className="container__input ">
      <div className="container__select">
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
			</div>
      <div className="input__error__select">
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