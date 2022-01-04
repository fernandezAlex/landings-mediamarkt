import React from 'react';
import PropTypes from "prop-types";
import analytics from '../../helpers/analytics';
import { ReactComponent as Arrow } from '../../img/button-arrow.svg';


const CardWide = ({
    title,
    subtitle,
    imgThumbnail,
    button,
    slug,
    eventGa,
    eventCategory,
    eventAction,
    eventLabel,
}) => {
    return (
            <div key={title} className="cardwide__container">
                <div className="__left">
                    <div className="container__text">
                        <div className="--title">
                            <p className="--title__card" dangerouslySetInnerHTML={{ __html: title}} />
                        </div>
                        <div className="--subtitle">
                            <p className={`--subtitle__card ${subtitle.length < 1 ? "empty" : ""}`} dangerouslySetInnerHTML={{ __html: subtitle}} />
                        </div>
                    </div>
                    <a className="--button" href={slug} onClick={() => analytics(eventGa, eventCategory, eventAction, eventLabel)}>
                        <Arrow />
                        <p> {button}</p>
                    </a>
                </div>
                <div className="__right">
                    <div className="--imgWide" style={{ backgroundImage: `url('${imgThumbnail}')` }}></div>
                </div>
            </div>
    )
}

CardWide.propTypes = {
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

export default CardWide