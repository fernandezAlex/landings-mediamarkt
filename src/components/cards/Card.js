import React from 'react';
import analytics from '../../helpers/analytics';
import {ReactComponent as Arrow} from '../../img/button-arrow.svg';


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
        <React.Fragment>
                <div key={title} className="card__container">
                    <div className="__header">
                        <div className="--img" style={{backgroundImage: `url('${imgThumbnail}')`}}></div>
                    </div>
                    <div className="__footer">
                        <div className="container__text">
                        <div className="--title">
                            <p className="--title__card">
                                {title}
                            </p>
                        </div>
                        <div className="--subtitle">
                            <p className={`--subtitle__card ${subtitle.length < 1 ? "empty" : ""}`}>
                            {subtitle}
                            </p>
                        </div>
                        </div>
                        <div className="--button">
                            <a className="link__card" href={slug} onClick={() => analytics(eventGa, eventCategory, eventAction, eventLabel)}>
                                <span className="arrow"><Arrow/></span>
                                <font className="link__text"> {button}</font>                                
                            </a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card
