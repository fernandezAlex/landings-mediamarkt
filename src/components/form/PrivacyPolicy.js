import React from "react";
import PropTypes from "prop-types";

const PrivacyPolicy = ({
  onChange,
  terms
}) => {


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
            He leído y acepto la&nbsp;
            <a
              className="--link privacy-modal"
              href="https://www.mediamarkt.es/es/legal/politica-de-privacidad"
              rel="nofollow"
              title="Política de privacidad"
              style={{ color: "#df0000" }}
            >
              Política de Privacidad
            </a>
            &nbsp; y las&nbsp;
            <a
              className="--link privacy-modal"
              href="https://www.mediamarkt.es/es/legal/condiciones-de-uso-de-la-web"
              rel="nofollow"
              title="Condiciones de uso"
              style={{ color: "#df0000" }}
            >
              condiciones de uso
            </a>
            .
          </label>
        </div>
      </div>
      <div className={`error__terms ${!terms ? "" : "disabled"}`}>
        Es necesario que acepte la política de privacidad y las condiciones de
        uso de la web
      </div>
    </>
  );
};

PrivacyPolicy.propTypes = {
  onChange: PropTypes.func,
  terms: PropTypes.bool,
};


export default PrivacyPolicy;
