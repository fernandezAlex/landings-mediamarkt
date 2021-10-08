import React from "react";
import CardSection from "../cards/CardSection";
import { SectionImg } from "../sectionimg/SectionImg";


export const Section1 = ({data}) => {
  return (
      <div className="section__">
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })} 
      </div>
  )


}


export default Section1;
