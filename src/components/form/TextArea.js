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
            />
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
