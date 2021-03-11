import React, { memo } from 'react'


const Dot = ({ active }) => {
  return (
    <span className="dot__primary"
      style={{
            background: `${active ? 'black' : 'white'}`
            }}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div className="dot__content">
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots