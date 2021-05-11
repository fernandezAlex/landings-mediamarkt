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
        <p className="title__text__intro">
          Escoge la solución que mejor se adapte a tu necesidad.
        </p>
        <p className="text__intro">
          Hoy en día todas las empresas buscan ser más competitivas y reducir
          los costes para poder trasladar mejores precios a sus clientes.
          Adaptarse a las nuevas demandas de los clientes, que buscan cada vez
          más empresas comprometidas con el medio ambiente y la sostenibilidad,
          aportará un valor añadido a tu empresa y te diferenciará de la
          competencia.
        </p>
        <p className="footer__text__intro">
          En MediaMarkt Business te ayudamos a reducir costes cuidando el
          medioambiente.
        </p>
      </div>
      <div className="container__links__header">
        <div className="container__link__contact">
          <a
            style={{ textDecoration: "none" }}
            onClick={() =>
              analytics("gaEvent", "B2B_soluciones_energeticas", "Click", "B2B_soluciones_energeticas_contactanos")
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
