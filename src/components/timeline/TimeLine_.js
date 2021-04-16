import React, {useState, useEffect} from 'react';



const Range = ({progress}) => {
    return (
        // render current the filled range of progress bar along its width
        <div className="range" style={{width: `${progress}%`}}/>
    );
};

const ProgressBar = ({progress}) => {
  return (
      <div className="progress-bar">
          {/*render available progress bar’s limit*/}
          <Range progress={progress}/>
      </div>
  );
};


// function EffectedFn() {
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000 * 10);
//     });
  
//     return (
//       <div>
//         {loading && <span>Loading...</span>}
//         {!loading && <span>All Done!</span>}
//       </div>
//     );
//   }




const TimeLine = () => {
  const [progress, setProgress] = useState(0);

  return (
      <div className="section__timeline">

          
          <ProgressBar progress={progress}/>
          <div className="toggle-buttons">
              {/* <button onClick={() => setProgress(progress > 0 ?
                  progress - (100/3) : 0)}>Decrease
              </button>
              <button onClick={() => setProgress(progress < 100 ? progress + (100/3) : 100)}>Increase</button> */}
          </div>
      </div>
  );
};

export default TimeLine;