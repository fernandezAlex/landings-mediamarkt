import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


const AccordionItem = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container__faqs">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        <div className="title-content">
        <FontAwesomeIcon className={`arrow__dropdown ${isOpen ? "open" : "close"}`} icon={faChevronDown}/>
        {title}  
        </div>  
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : "expanded"}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};


export default AccordionItem;


