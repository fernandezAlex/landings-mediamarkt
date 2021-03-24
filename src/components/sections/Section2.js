import React from 'react'
import SliderBig from '../carousel/SliderBig'
import SliderSmall from '../carousel/SliderSmall'

const Section2 = ({ width, data }) => {
    return (
        <div className="section">
            <div>
                <h1 className="title">Destacados</h1>
            </div>
            {width < 824 ? (
                <SliderSmall data={data} />
            ) : (
                <SliderBig data={data} />
            )}
        </div>
    )
}

export default Section2
