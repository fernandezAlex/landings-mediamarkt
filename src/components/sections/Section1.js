import React from "react";
import analytics from "../../helpers/analytics";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

export const Section1 = () => {
  return (
    <div className="section__intro">
      {/* <div className="container__logo__header">
        <div className="--img"></div>
      </div> */}
      {/* <div className="container__intro__text">
        <p className="text__intro">
        Contrata luz y gas y disfrutarás de una solución energética personalizada.
        </p>
      </div> */}
      <div className="container__links__header">
        <div className="container__link__contact">
        <p className="text__intro">
        Contrata luz y gas y disfrutarás de una solución energética personalizada.
        </p>
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
