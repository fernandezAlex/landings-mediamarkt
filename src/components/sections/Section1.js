import React from "react";
import analytics from "../../helpers/analytics";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";


export const Section1 = () => { 
  return (
    <div className="section__intro">

      <div className="container__logo__header">
        <div className="--img"></div>
      </div>
      <div className="container__intro__text">
        <p className="text__intro">
          <h2>Nos aseguramos que tu negocio funcione siempre</h2>

          Disponemos de una amplia gama de servicios destinados al sector profesional, orientados a conseguir que las empresas saquen el máximo rendimiento de su negocio
        </p>
      </div>
      <div className="container__links__header">
        <div className="container__link__contact">
          <a
            style={{ textDecoration: "none" }}
            onClick={() =>
              analytics("gaEvent", "Home_B2B", "Click", "Home_B2B_contactanos")
            }
            className="link__contact"
            href="#contacto"
          >
            <span className="arrow">
              <Arrow />
            </span>
            <font className="link__text"> Contacta con nosotros</font>
          </a>
        </div>
      </div>
    </div>
  );
};


export default Section1;