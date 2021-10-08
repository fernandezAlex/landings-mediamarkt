import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Breadcrumb = () => {
  return (
    <div className="breadcrumb__container">
      <a href="https://www.mediamarkt.es" target="_self">
        <FontAwesomeIcon icon={faHome} className="icon__home" />
      </a>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="icon__arrow"
        size="xs"
      />
      <a href="https://www.mediamarkt.es/empresas" target="_self">
        <h5>MediaMarkt Business</h5>
      </a>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="icon__arrow"
        size="xs"
      />
       <a href="https://www.mediamarkt.es/empresas" target="_self">
        <h5>Soluciones hoteles-comercios-hostelería</h5>
      </a>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="icon__arrow"
        size="xs"
      />
      <h5>Soluciones de climatización
      </h5>
    </div>
  );
};
