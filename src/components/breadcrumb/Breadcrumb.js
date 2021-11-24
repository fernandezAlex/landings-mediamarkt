import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const Breadcrumb = ({data}) => {

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
      <div>
        <h5 dangerouslySetInnerHTML={{__html: data}} />
      </div>
      {/* <FontAwesomeIcon
        icon={faChevronRight}
        className="icon__arrow"
        size="xs"
      />
      <h5>{data.secondLabel}</h5> */}
    </div>
  );
};
