import React from 'react'
import { SectionImg } from "../sectionimg/SectionImg";

const Section2 = ({data}) => {
    return (

      <div className="section__">
        <h2>
          Elige la tarifa que más se adapta a tu consumo
        </h2> 
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })} 
      </div>
    )
}

export default Section2