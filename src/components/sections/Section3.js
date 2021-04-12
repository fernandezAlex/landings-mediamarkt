import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";
import analytics from "../../helpers/analytics";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

const Section3 = ({width, data}) => {
  return (
    <div className="section">
      {
        width < 843 
        ? (
            <div>
            <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1>
            <SliderSmall data={data}/>
            </div>
        ) : (
            <div>
            <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1>
            <CardGrid data={data} />
            </div>
        )
    }
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
    </div>
  );
};

export default Section3