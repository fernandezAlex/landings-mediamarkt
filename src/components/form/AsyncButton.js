import React from 'react'
import PropTypes from 'prop-types'

const AsyncButton = ({
    type,
    disabled,
    isAllValidated,
    isSubmited,
    isLoading,
    dataAnalytics,
    dataSumCategory,
    dataSumAction,
    dataSumLabel,

}) => {
    return (
        <button
            type={type}
            className={`${
                isAllValidated
                    ? `enabled ${
                          isSubmited ? 'submited' : `${isLoading && 'animated'}`
                      }`
                    : 'disabled'
            }`}
            disabled={disabled}
            data-analytics={dataAnalytics}
            data-sum-category={dataSumCategory}
            data-sum-action={dataSumAction}
            data-sum-label={dataSumLabel}
            

        >
            <span>
                {/* Enviar */}
                {`${
                    isSubmited
                        ? 'Enviado'
                        : `${isLoading ? 'Enviando...' : 'Enviar'}`
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