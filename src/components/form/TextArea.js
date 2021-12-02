import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({
    type,
    placeholder,
    rows,
    name,
    className,
    value,
    onChange,
    id,
    maxLength,
    required
}) => {
    return (
        <div className="container__textarea">
            <textarea
                type={type}
                placeholder={placeholder}
                rows={rows}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
                id={id}
                maxLength={maxLength}
            />
            {
				required && <span className="span__required">*</span>
			}
            {
                (value.length>=maxLength)&&
                    <div className="input__error">
                        <span className="text_error">
                            Solo se permiten escribir {maxLength} caracteres.
                        </span>
                    </div>
            }
        </div>
    )
}

TextArea.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string,
}

export default TextArea
