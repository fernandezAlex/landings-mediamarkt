import React from "react";
import PropTypes from "prop-types";

const budget = [
	{
	  name: "Hasta 20€/ mes",
	  value: 0,
	},
	{
	  name: "De 20€ a 40€ / mes",
	  value: 1,
	},
	{
	  name: "De 40€ a 60€ / mes",
	  value: 2,
	},
	{
	  name: "Más de 80€ / mes",
	  value: 3,
	},
  ];

const SelectBudget = ({
	type,
    onChange,
	error,
	errorText,
	className,
	id,
    labelDefault,
}) => {
	const {name, value} = budget
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
						budget.map(({name}) => <option key={name} value={name}>{name}</option>)
						}    
				</select>
			</div>
			<div className="input__error__select">
				<span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
			</div>
		</div>
	);
};

export default SelectBudget;