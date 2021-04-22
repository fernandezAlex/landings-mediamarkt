import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";
import analytics from "../../helpers/analytics";
import { pairs } from "../../helpers/pairs";

const CardSection = ({ data, width }) => {
  const [anchor, setAnchor] = useState("");



  let desktop = width > 893 ? true : false;

  return (
    <>
      <div className="card__section__wrapper">
        {data.map(
          ({ title, content, slug, button, buttonExtra, imgThumbnail }, i) => {
            return (

              <section className={`section-${i+1}`} id={`option-${i+1}`}>
                <div className={`cardsection__container ${pairs(i) ? "left" : "right"}`}>
                  
                  
                  <div className={`first__column ${desktop ? "desktop" : "mobile"}`}>
                        <div className="container__text">
                            <div className="--title">
                              <p className="text">{title}</p>
                            </div>
                            <div className="--content">
                              <p className="text">{content}</p>
                            </div>
                        </div>
                        <div className="container__links">
                          <div className="--modal">
                            <p>{button}</p>
                          </div>
                          <div className="--cta">
                            <p>{button}</p>
                          </div>
                        </div>
                  </div>
                  
                  <div className={`second__column ${desktop ? "desktop" : "mobile"}`}>
                    <img className="img" src={imgThumbnail} alt={title}/>
                  </div>
                
                </div>
              </section>

            
            );
          },
        )}
      </div>
    </>
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
