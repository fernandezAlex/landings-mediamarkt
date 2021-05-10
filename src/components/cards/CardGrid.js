import React from 'react'
import CardInfo from './CardInfo'

const CardGrid = ({ data }) => {
    
    return (
            <div className="gridCardInfo__wrapper">
                <div className="gridCardInfo__container">
                    {data.map(
                        (
                            {
                                title,
                                imgThumbnail,
                            },
                            i
                        ) => {
                            return (
                                <CardInfo
                                    key={i}
                                    imgThumbnail={imgThumbnail}
                                    title={title}
                                />
                            )
                        }
                    )}
                </div>
            </div>
    )
}

export default CardGrid
