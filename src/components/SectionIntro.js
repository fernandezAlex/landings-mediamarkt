import React from "react";
import analytics from "../helpers/analytics";
import { ReactComponent as Arrow } from "../img/button-arrow.svg";


export const SectionIntro = () => { 
  return (
    <div className="section__intro">

      <div className="container__logo__header">
        <div className="--img"></div>
      </div>
      <div className="container__intro__text">
        <p className="text__intro">
          En MediaMarkt Business te acompañamos en la digitalización de tu negocio
          mejorando la comunicación, procesos de gestión y experiencia de tus clientes,
          adaptando soluciones únicas y diferenciadoras para cada sector.
          <br/>
          <br/>
          Descubre algunas de las soluciones diseñadas y adaptadas a los nuevos
          tiempos, donde además podrás garantizar la seguridad de tus clientes y
          ofrecerles a la vez, una experiencia única y diferenciadora.
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


export default SectionIntro;