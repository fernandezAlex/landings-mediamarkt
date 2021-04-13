import React from "react";
import analytics from "../../helpers/analytics";


export const Section1 = () => {

  return (
    <div className="section__intro">

      <div className="container__intro__text">
        <p className="text__intro">
        Llega el seguro de responsabilidad civil para usuarios de patinetes eléctricos y otros vehículos de movilidad personal que te hará disfrutar aún más de tu movilidad y por muy poco. Haz que tu E-Bike, Hoverboard, Patinete eléctrico o Segway se ajuste a la nueva normativa de movilidad.
        </p>

      <div className="button__CTA">
              <a
                  style={{ textDecoration: "none" }}
                  onClick={() =>
                    analytics("gaEvent", "Zurich_te_llamamos", "Click", "Home_Zurich_contactanos")
                  }
                  className="link__contact"
                  href="#contacto"
                  >
                  <font className="link__text">¿Te llamamos?</font>
                </a>
                  </div>
                  </div>
    </div>
  );
};

export default Section1;
