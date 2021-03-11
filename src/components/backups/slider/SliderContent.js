import React from 'react'


const SliderContent = props => (
  <div className="slider__content"
    style={{
            transform: `translateX(-${props.translate}px)`,
            transition: `transform ease-out ${props.transition}s`,
            width: `${props.width}px`
            }}
  >
  {props.children}
  </div>
)

export default SliderContent