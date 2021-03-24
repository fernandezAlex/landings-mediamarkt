import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";


const Header = ({data}, {breadcrumbData}) => {

  return (
    <>
      <div 
        className="header__container">
        <div className="--content"></div>
      </div>
      <div className="title__container">
        <div className="content">
          <h1 className="--title">{data.title}</h1>
          <div className="--breadcrumb">
              <Breadcrumb data=""/>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header