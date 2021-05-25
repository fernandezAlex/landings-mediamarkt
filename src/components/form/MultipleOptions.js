import React, { useState } from "react";

const MultipleOptions = ({
  data,
  error,
  errorText, 
  multipleOptions, 
  updateMultipleOption
}) => {

  const handleClick = e => {
    e.preventDefault();
    updateMultipleOption(e.target.id);
    /*saveServices([
      ...multipleOptions,
      service
    ])*/
  }

  return (

    <div className="container__section__form">
            <div className="__header__title">
              <h2 className="--title">{ data.title }</h2>
            </div>

            <div class="row container__input">
              <div id={ data.id } class="multipleOptions basic">
                { 
                  data.options.map((option, i) => ( 
                    
                    <div id={ `servicio_${option.id}` } className="col-xs-6 col-sm-3 col-lg-2" data-service={option.name}>      
                      <a href="#" id={option.value} onClick={handleClick} className={ multipleOptions.indexOf(option.value) > -1 ? "active" : "" }>
                          <input id={ `i_${option.id}` } type="checkbox" name={option.value} value={option.value} className="" />
                          {option.name}
                      </a>
                    </div>

                  ))
                }
              </div> 
              <div className="input__error__select">
                <span className="text_error" dangerouslySetInnerHTML={{__html: error ? errorText : null}} />
              </div>     
            </div>
          </div>


       
  ) 
};

export default MultipleOptions;