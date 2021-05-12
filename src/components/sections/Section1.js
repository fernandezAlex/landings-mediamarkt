import React from "react";
import CardSection from "../cards/CardSection";


export const Section1 = ({ ...props }) => {
  // const {title, content, imgThumbnail, slug, button, buttonExtra} = data
  // return (
  //   <>
  //   <div className="section">
  //    {
  //       data.map(({imgThumbnail,title,content,slug,button,buttonExtra,event,eventCategory,eventAction,eventLabel}, i) => {

  //         return (

  //               <CardSection
  //                   key={i}
  //                   title={title}
  //                   subtitle={content}
  //                   imgThumbnail={imgThumbnail}
  //                   slug={slug}
  //                   button={button}
  //                   eventGa={event}
  //                   eventCategory={eventCategory}
  //                   eventAction={eventAction}
  //                   eventLabel={eventLabel}
  //               />

  //         )
  //       }   
  //       )}
  //       </div>
  // </>
  // )

  return (
      <div className="section__">
        <p>
          MediaMarkt Business ayuda a las empresas a desarrollar su actividad ofreciéndoles soluciones financieras a medida. Nuestros expertos te asesoran en la elección de la mejor solución que se adapte a tus necesidades.
        </p>
        <CardSection {...props} />
      </div>
  )


}


export default Section1;
