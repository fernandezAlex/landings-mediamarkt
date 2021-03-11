import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";


const Header = () => {

  return (
    <React.Fragment>
      <div 
        className="header__container">
        <div className="--content"></div>
      </div>
      <div className="title__container">
        <div className="content">
          <h1 className="--title">Educación</h1>
          <div className="--breadcrumb">
              <Breadcrumb/>  
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header