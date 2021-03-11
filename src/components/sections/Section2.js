import React from 'react'
import SliderBigSection1 from '../carousel/SliderBigSection1'
import SliderSmallSection1 from '../carousel/SliderSmallSection1'

const Section2 = (width) => {
    return (
        <div className="section">
        <div>
          <h1 className="title">Destacados</h1>
        </div>
        {width.width < 824 ? <SliderSmallSection1 /> : <SliderBigSection1 />}
        </div>
    )
}

export default Section2