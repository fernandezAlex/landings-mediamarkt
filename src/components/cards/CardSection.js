import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";
import analytics from "../../helpers/analytics";
import { pairs } from "../../helpers/pairs";

const CardSection = ({ data, width }) => {
  const [anchor, setAnchor] = useState("");



  let desktop = width > 893 ? true : false;

  return (
    <div className="section__">
      <div className="card__section__wrapper">
        {data.map(
          ({ title, content, slug, button, buttonExtra, imgThumbnail }, i) => {
            return (

              <section className={`section-${i+1}`} id={`option-${i+1}`}>
                <a href={slug}>
                  <div className={`cardsection__container ${pairs(i) ? "left" : "right"}`}>
                  
                  
                  <div style={{width: "50%"}} className={`first__column ${desktop ? "desktop" : "mobile"}`}>
                        <div className="container__text">
                            <div className="--title">
                              <h2 className="--title__card ">{title}</h2>
                            </div>
                            <br/><br/>
                            <div className="--content">
                              <p style={{fontSize: "22px !important"}} className="text" dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </div>
     
                          {/* <div className="--modal">
                            <p>{button}</p>
                          </div> */}
                          <br/><br/>
                          <div className="--cta">
                            <p>{button}</p>
                          </div>

                  </div>
                  
                  <div className={`second__column ${desktop ? "desktop" : "mobile"}`}>
                    <img className="img" src={imgThumbnail} alt={title}/>
                  </div>
                
                </div>
                </a>
              </section>

            
            );
          },
        )}
      </div>
    </div>
  );
};

// CardSection.propTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     imgThumbnail: PropTypes.string,
//     slug: PropTypes.string,
//     button: PropTypes.string,
//     eventGa: PropTypes.string,
//     eventCategory: PropTypes.string,
//     eventAction: PropTypes.string,
//     eventLabel: PropTypes.string,
// }

export default CardSection;

// className="__button"
// onClick={`#${title.replace(/ /g, "")}`}
// onClick={() => handleClick(title)}
// onClick={() => console.log("click")}
// href={`${(anchor === "") ? null : anchor}`}
// >
