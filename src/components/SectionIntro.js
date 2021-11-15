import React from "react";
import analytics from "../helpers/analytics";
import { ReactComponent as Arrow } from "../img/button-arrow.svg";


export const SectionIntro = () => { 
  return (
    <div className="section__">
      Google Nest ofrece un amplio catálogo de soluciones para cubrir las necesidades de tu empresa.
      <a href="#campaign-form" className="button__more-intro">
        Contacta con nosotros
      </a>
    </div>
  );
};


export default SectionIntro;