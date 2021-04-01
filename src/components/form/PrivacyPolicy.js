import React from 'react'
import PropTypes from 'prop-types'

const PrivacyPolicy = ({ onChange, terms }) => {
    return (
        <>
            <div className="--container">
                <div className="privacypolicy__container">
                    <input
                        className="check"
                        type="checkbox"
                        name="tlegal-terms"
                        id="tlegal-terms"
                        onChange={onChange}
                    />
                    <label className="label--policy" id="tlegal-terms1">
                        <span></span>
                        Mediante la cumplimentación del presente formulario y haciendo click en el botón enviar, consiento recibir comunicaciones comerciales de productos y servicios ofrecidos por MediaMarkt y/o conjuntamente por MediaMarkt y terceros con los que colaboramos. Todo ello, de conformidad con os términos y condiciones de la Política de Privacidad de MediaMarkt.
                        Promoción válida únicamente para nuevos usuarios registrados.
                    </label>
                </div>
            </div>
            <div className={`error__terms ${!terms ? '' : 'disabled'}`}>
                Es necesario que aceptes la política de privacidad y las
                condiciones de uso de la web
            </div>
        </>
    )
}

PrivacyPolicy.propTypes = {
    onChange: PropTypes.func,
    terms: PropTypes.bool,
}

export default PrivacyPolicy
