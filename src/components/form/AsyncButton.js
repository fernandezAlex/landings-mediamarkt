import React from 'react'
import PropTypes from 'prop-types'

const AsyncButton = ({
    type,
    disabled,
    isAllValidated,
    isLoading,
}) => {
    return (
        <button
            type={type}
            className={`${
                isAllValidated
                    ? `enabled ${
                           `${isLoading && 'animated'}`
                      }`
                    : 'disabled'
            }`}
            disabled={disabled}
        >
            <span>
                {`${
                    `${isLoading ? 'Enviando...' : 'Enviar'}`
                }`}
            </span>
        </button>
    )
}

AsyncButton.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isAllValidated: PropTypes.bool,
    isSubmited: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default AsyncButton
