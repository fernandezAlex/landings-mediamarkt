import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";
import analytics from "../../helpers/analytics";

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
        <div className="__left">


          <div
            className="--imgWide"
            style={{ backgroundImage: `url('${imgThumbnail}')` }}
          ></div>

        </div>
        <div className="__right">
        <div className="container__text">
            <div className="--title">
              <p className="--title__card">{title}</p>
            </div>
            <div className="--subtitle">
              <p
                className="--subtitle__card"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            </div>
            <div className="--button">
            <a
              className="link__card"
              target="_self"
              href={slug}
              onClick={() =>
                analytics(eventGa, eventCategory, eventAction, eventLabel)
              }
            >
              <span>
                <Arrow />
              </span>
              <font className="link__text"> {button}</font>
            </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

CardSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgThumbnail: PropTypes.string,
  slug: PropTypes.string,
  button: PropTypes.string,
  eventGa: PropTypes.string,
  eventCategory: PropTypes.string,
  eventAction: PropTypes.string,
  eventLabel: PropTypes.string,
};

export default CardSection;
