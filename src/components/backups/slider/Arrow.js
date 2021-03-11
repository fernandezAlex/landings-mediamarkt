import React, { memo } from 'react'

import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => {
  return (
    <div className="arrow__content"
      onClick={handleClick}
      style={{

        direction: `${direction === 'right' ? 'right: 25px' : 'left: 25px'}`
        // img {
        //   transform: 'translateX(`${direction === 'left' ? '-2' : '2'}px`)'
  
        //   &:focus {
        //     outline: 0;
        //   }
        }}
    >
      {direction === 'right' ? <img src={rightArrow} alt="arrow"/> : <img src={leftArrow} alt="arrow"/>}
    </div>
  )
}

export default memo(Arrow)