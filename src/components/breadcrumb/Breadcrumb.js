import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Breadcrumb = ({data}) => {
  return (
    <div className="breadcrumb__container">
      <a href="https://www.mediamarkt.es" target="_self">
        <FontAwesomeIcon icon={faHome} className="icon__home" />
      </a>
      {
        data.map(({text,link}) =>
        <>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon__arrow"
            size="xs"
          />
          <a href={link} target="_self">
            <h5>{text}</h5>
          </a>
        </>
        )
      }
    </div>
  );
};
