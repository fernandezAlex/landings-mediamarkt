import React from 'react';
import PropTypes from "prop-types";
import analytics from '../../helpers/analytics';
import { ReactComponent as Arrow } from '../../img/button-arrow.svg';


const Card = ({
    title,
    subtitle,
    imgThumbnail,
    slug,
    button,
    eventGa,
    eventCategory,
    eventAction,
    eventLabel,
}) => {
    
    return (
            <div key={title} className="card__container">
                <div className="__header">
                    <div className="--img" style={{ backgroundImage: `url('${imgThumbnail}')` }}></div>
                </div>
                <div className="__footer">
                    <div className="container__text">
                        <div className="--title">
                            <p className="--title__card"
                            dangerouslySetInnerHTML={{ __html: title }} />

                        </div>
                        <div className="--subtitle">
                            <p className={`--subtitle__card ${subtitle.length < 1 ? "empty" : ""}`} dangerouslySetInnerHTML={{ __html: subtitle}} />
                        </div>
                    </div>
                    <div className="--button">
                        <a className="link__card" href={slug} onClick={() => analytics(eventGa, eventCategory, eventAction, eventLabel)}>
                            <span className="arrow"><Arrow /></span>
                            <font className="link__text"> {button}</font>
                        </a>
                    </div>
                </div>
            </div>
    )
}

Card.propTypes = {
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

export default Card
