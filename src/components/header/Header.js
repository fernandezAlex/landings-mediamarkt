import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";


const Header = () => {

  return (
    <>
      <div 
        className="header__container">
        <div className="--content"></div>
      </div>
      <div className="title__container">
        <div className="content">
          <h1 className="--title">Solución de Digital Signage</h1>
          <div className="--breadcrumb">
              <Breadcrumb/>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header