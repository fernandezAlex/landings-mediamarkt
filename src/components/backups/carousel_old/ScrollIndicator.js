// import React, { useEffect, useState } from 'react';
// import {Dot} from './Dot';


// const renderDots = () => {
//     const selectedDotValue = (scrollProgress * count) / 100;
//     return [ ...Array(count).keys() ].map( index => (
//       <Dot key={index} active={selectedDotValue >= index && selectedDotValue <= index + 1}/>
//     ));
//   }

//   const [scrollProgress, setScrollProgress] = useState(0);
  
//   const scrollListener = () => {
//     if (!target.current) {
//       return;
//     }
  
//     const element = target.current;
//     const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
//     const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
//     if (windowScroll === 0) {
//       return setScrollProgress(0);
//     }
  
//     if (windowScroll > totalWidth) {
//       return setScrollProgress(100);
//     }
  
//     setScrollProgress((windowScroll / totalWidth) * 100);
//   }


// useEffect(() => {
//    target.current.addEventListener('touchmove', scrollListener);
//    return () => target.current && target.current.removeEventListener('touchmove', scrollListener);
// });

// export const ScrollIndicator = () => {
//     return (
//         <div className="scroll__indicator__container">
//         {renderDots()}
//         </div>
//     )
// }




// export const ScrollIndicator = () => {
//     return (
//         <div className="scroll__indicator__container">
//         {renderDots()}
//         </div>
//     )
// }
