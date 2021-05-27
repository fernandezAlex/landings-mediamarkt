import React from 'react'
import { SectionImg } from "../sectionimg/SectionImg";

const Section2 = ({data}) => {
    return (
      <div className="section__">
        <p>
          Sabemos lo importante que es sentirte protegido en todo momento, por eso Movistar Prosegur Alarmas está pensado para ti. Con una alarma más innovadora, este sistema de seguridad 360º esta diseñado para proteger tu hogar y a los que más quieres.
        </p>
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })} 
      </div>
    )
}

export default Section2