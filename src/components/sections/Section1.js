import React from "react";
import CardSection from "../cards/CardSection";
import { SectionImg } from "../sectionimg/SectionImg";


export const Section1 = ({data}) => {
  return (
      <div className="section__">
        <p>
          MediaMarkt Business ayuda a las empresas a desarrollar su actividad ofreciéndoles soluciones financieras a medida. Nuestros expertos te asesoran en la elección de la mejor solución que se adapte a tus necesidades.
        </p>
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })} 
      </div>
  )


}


export default Section1;
