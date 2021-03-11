import React from "react";

const PrivacyPolicy = () => {
  return (
    <div class="privacypolicy__container">
      <input
        className="check"
        type="checkbox"
        name="tlegal-terms"
        id="tlegal-terms"
      />
      <label className="label--policy" for="tlegal-terms" id="tlegal-terms1">
        <span></span>He leído y acepto la&nbsp;
        <a
          className="--link privacy-modal"
          href="https://www.mediamarkt.es/es/legal/politica-de-privacidad"
          rel="nofollow"
          title="Política de privacidad"
          style={{color:"#df0000"}}
        >
          Política de Privacidad
        </a>{" "}
        y las{" "}
        <a
          className="--link privacy-modal"
          href="https://www.mediamarkt.es/es/legal/condiciones-de-uso-de-la-web"
          rel="nofollow"
          title="Condiciones de uso"
          style={{color:"#df0000"}}
        >
          condiciones de uso
        </a>
        .
      </label>
    </div>
  );
};

export default PrivacyPolicy;
