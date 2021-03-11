import React from 'react';
import {ReactComponent as Arrow} from '../../img/button-arrow.svg';
import analytics from '../../helpers/analytics';


const CardSection = ({
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
        <>
                <div className="cardsection__container">
                    <div className="__left">
                    <div className="container__text">
                        <div className="--title">
                            <p className="--title__card">
                                {title}
                            </p>
                        </div>
                        <div className="--subtitle">
                            <p className="--subtitle__card">
                            {subtitle}
                            </p>
                        </div>
                    </div>
                        <div className="--button">
                        <a className="link__card" target="_self" href={slug} onClick={() => analytics(eventGa, eventCategory, eventAction, eventLabel)}>
                                <span><Arrow/></span>
                                <font className="link__text"> {button}</font>                                
                            </a>
                        </div>
    
                    </div>
                    <div className="__right">
                        <div className="--imgWide" style={{backgroundImage: `url('${imgThumbnail}')`}}></div>
                    </div>
                </div>
        </>
    )
}

export default CardSection
