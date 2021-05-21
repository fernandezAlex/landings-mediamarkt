import React, { useState } from "react";

const Service = ({
  name,
  id,
  value,
  services, 
  updateService
}) => {

  
  const handleClick = e => {
    e.preventDefault();
    updateService(e.target.id);
  }

  const isActived = services.indexOf(value) > -1 ? "active" : "";

  const divServiceId = `servicio_${id}`;
  const iServiceId = `i_${id}`;
  
  //<span id={sServiceId}>{name}</span>
  return (
    <div id={divServiceId} className="col-xs-6 col-sm-3 col-lg-2" data-service={name}>      
      <a href="#" id={value} onClick={handleClick} className={isActived}>
          <input id={iServiceId} type="checkbox" name={value} value={value} className="" />
          {name}
      </a>
    </div>
  )
};

export default Service;