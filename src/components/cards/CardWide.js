import React from 'react';
import analytics from '../../helpers/analytics';
import {ReactComponent as Arrow} from '../../img/button-arrow.svg';


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
        <React.Fragment>
                <div key={title} className="cardwide__container">
                    <div className="__left">
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
                        <a className="--button" href={slug} onClick={() => analytics(eventGa, eventCategory, eventAction, eventLabel)}>
                            <Arrow/>
                            <p> {button}</p>
                        </a>
                    </div>
                    <div className="__right">
                        <div className="--imgWide" style={{backgroundImage: `url('${imgThumbnail}')`}}></div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default CardWide