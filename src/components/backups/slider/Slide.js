import React, { memo } from 'react'

const Slide = ({ content, width }) => {
  return (
    <div className="slider__container"
      style={{
            width: `${width}px`,
            backgroundImage: `url('${content}')`
            }}
    />
  )
}

export default memo(Slide)