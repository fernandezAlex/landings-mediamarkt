import React from 'react'
import CardInfo from './CardInfo'

const CardGrid = ({ data }) => {
    
    return (
            <div className="grid__wrapper">
                <div className="grid__container">
                    {data.map(
                        (
                            {
                                title,
                                imgThumbnail,
                            },
                            i
                        ) => {
                            return (
                                <div className="card__wrapper">
                                <CardInfo
                                    key={i}
                                    imgThumbnail={imgThumbnail}
                                    title={title}
                                />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
    )
}

export default CardGrid
