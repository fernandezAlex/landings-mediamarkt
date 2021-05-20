import React from "react";

const Service = ({
  name,
  id,
  value
}) => {

  //const serviceId = `servicio_${id}`;
  // id={serviceId}
  return (
    <div className="col-xs-6 col-sm-3 col-lg-2 fibra--movil" data-service={name}>
      <a href="#" className="active">
          <input type="checkbox" name={value} value={value} className="" />
          <span>{name}</span>
      </a>
    </div>
  )
};

export default Service;
