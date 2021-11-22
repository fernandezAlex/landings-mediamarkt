import React from "react";
import useModal from "../../hooks/useModal";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

export const Section1 = ({data}) => {
  
  const { title, subtitle, linkUrl, linkText } = data;
  
  return (
      <div className="form__wrapper">
        <div className="__header__subtitle featuredSection">
          <h2 className="--subtitle">{title}</h2>
          <div>
            <span className="arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#df0000">
                <path d="M15.78 11.28a.75.75 0 01.22.53v.38a.77.77 0 01-.22.53l-5.14 5.13a.5.5 0 01-.71 0l-.71-.71a.49.49 0 010-.7L13.67 12 9.22 7.56a.5.5 0 010-.71l.71-.7a.5.5 0 01.71 0z"></path>
              </svg>
            </span>
            {subtitle} <strong><a href={linkUrl}>{linkText}</a></strong>
          </div>  
        </div>   
      </div>
  );
};

export default Section1;
