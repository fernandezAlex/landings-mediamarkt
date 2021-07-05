import React from 'react'
import { SectionImg } from "../sectionimg/SectionImg";

const Section2 = ({data}) => {
    return (
      <div className="section__">
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })} 
      </div>
    )
}

export default Section2