import React from 'react';
import AccordionItem from './AccordionItem';
import analytics from '../../helpers/analytics';
import faqs from '../../data/faqs';

const Accordion = () => {

  return (
    <div className="wrapper__faqs">
      <div className="container">
      <div className="faqs--title">
        <h2>Preguntas frecuentes</h2>
      </div>
      {
        faqs.map((faq, i) => {
        return (
          <AccordionItem 
            title={<div dangerouslySetInnerHTML={{ __html: faq.question }}
            // onClick={() => analytics(faq.eventGa, faq.eventCategory, faq.eventAction, faq.eventLabel)}
            
          />}
            key={i}
          >
          {<div dangerouslySetInnerHTML={{ __html: faq.reply }} />}
          </AccordionItem>
          )
        } )
    }
    </div>
      </div>
  )
}

export default Accordion;