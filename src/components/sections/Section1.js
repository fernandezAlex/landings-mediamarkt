import React from "react";
import analytics from "../../helpers/analytics";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

export const Section1 = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="section__intro">

      <div className="container__logo__header">
        <div className="--img"></div>
      </div>
      <div className="container__intro__text">
        <p className="text__intro">
          La división de Educación de MediaMarkt trabaja con el objetivo de
          acompañarte y asesorarte en el viaje digital. Todo centro educativo
          necesita un modelo de transformación tecnológico a medio y largo
          plazo, teniendo en cuenta y en total consonancia con el proyecto
          educativo establecido por cada uno.
          <br />
          <br />
          Te ofrecemos soluciones tecnológicas 360 que se adaptan a las
          necesidades actuales del aprendizaje y de la enseñanza. Un desarrollo
          personalizado a partir de la evaluación previa del centro en
          competencias digitales. Integrando modelos donde se tiene en cuenta la
          pedagogía, la tecnología y los espacios tanto virtuales como
          presenciales.
        </p>
      </div>
      <div className="container__links__header">
              <div className="container__link__contact">
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() =>
                    analytics("gaEvent", "Home_B2B_ED", "Click", "Home_B2B_EDUCACION_ver_folleto")
                  }
                  className="link__contact"
                  href="https://assets.ctfassets.net/osyynfyvlyjc/7ntLWpC7tOJTKTeP5AVJmL/c5aca0515187aa0d9ffe3f46e6487056/MM18_217_Nota_informativa_Agentes_vinculados_MOD.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="arrow">
                    <Arrow />
                  </span>
                  <font className="link__text"><strong>Nota informativa del mediador</strong></font>
                </a>
              </div>
              {/* <button type="button" className="hdqFcm mHerN">¿Te Llamamos</button> */}

                  <div className="button__CTA">
              <a
                  style={{ textDecoration: "none" }}
                  onClick={() =>
                    analytics("gaEvent", "Home_B2B_ED", "Click", "Home_B2B_EDUCACION_contactanos")
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
