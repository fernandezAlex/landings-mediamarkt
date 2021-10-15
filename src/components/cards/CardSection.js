import React from "react";
// import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";
// import analytics from "../../helpers/analytics";

const CardSection = ({data}) => {
  const {
    title,
    subtitle,
    imgThumbnail,
    slug,
    button,
    eventGa,
    eventCategory,
    eventAction,
    eventLabel,
  } = data;

  return (
    <div className="card__section__wrapper">
      <div className="cardsection__container">
          <div className="--title">
          <p className="--title__card"><strong>{title}</strong></p>
          </div>
          <div className="--subtitle">
            <p
              className="--subtitle__card"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>
          <div className="--texto2">
          {/* <div
            className="--imgWide"
            style={{ backgroundImage: `url('${imgThumbnail}')` }}
          ></div> */}
          <strong>Bolsa de horas</strong>
          <ul>
            <li>
              81,35€ - 4 Horas
            </li>
            <li>
              340€ - 8 Horas
            </li>
            <li>
              491€ - 12 Horas
            </li>
          </ul>
        </div>
          <div className="--button">
              <a
                className="link__card"
                target="_self"
                href={slug}
                // onClick={() =>
                //   analytics(eventGa, eventCategory, eventAction, eventLabel)
                // }
              >
                <font className="link__text">{button}</font>
              </a>
          </div>
      </div>
    </div>
  );
};

// CardSection.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   imgThumbnail: PropTypes.string,
//   slug: PropTypes.string,
//   button: PropTypes.string,
//   eventGa: PropTypes.string,
//   eventCategory: PropTypes.string,
//   eventAction: PropTypes.string,
//   eventLabel: PropTypes.string,
// };

export default CardSection;
