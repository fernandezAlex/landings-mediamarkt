import React from "react";
import PropTypes from "prop-types";
import { AST_Label } from "terser";

const InputRadio = ({
	type,
	placeholder,
	value,
    onChange,
	name,
	error,
	errorText,
	className,
    id,
    label,
    arraysValues,
    radio

}) => {
	return (
		<div className="container__input__radio">
            {arraysValues.map((data, i) => {
                return (
                <>
                    <label>
                        <input
                        key={i}
                        type={type}
                        name={name}
                        value={data}
                        onChange={onChange}
                        className={`${!error ? className : `${className}    invalid_field`}`}
                        errorText={errorText}
                        error={error}
                        id={id}
                        label={label}
                        />
                        <span className="label">{label[i]}</span>
                    </label>

            </>
            )
            // console.log(arraysValues)
            })

            }
			<span className="span__required">*</span>
			{/* <div className="input__error"> */}
            {/* <span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} /> */}
                <span className={`error__radio ${!radio ? '' : 'disabled'}`}>
                    Debes escoger una de las opciones
                </span>
			{/* </div> */}
		</div>
	);
};

// InputRadio.propTypes = {
// 	type: PropTypes.string.isRequired,
// 	name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// 	onChange: PropTypes.func.isRequired,
// 	required: PropTypes.string,
// 	errorText: PropTypes.string,
// 	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
// 	disabled: PropTypes.bool,
// 	id: PropTypes.string,
// };

export default InputRadio;
