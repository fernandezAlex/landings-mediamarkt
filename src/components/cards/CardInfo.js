import React from 'react';



const CardInfo = ({title, subtitle, imgThumbnail}) => {

    
    return (
            <div key={title} className="cardInfo__container">
                <div className="__header">
                    <div className="--img" style={{ backgroundImage: `url('${imgThumbnail}')` }}></div>
                </div>
                <div className="__footer">
                    <div className="container__text">
                        <div className="--title">
                            <p className="--title__card">
                                {title}
                            </p>
                        </div>
                        <div className="--subtitle">
                            <p className="">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                   
                </div>
            </div>
    )
}



export default CardInfo
