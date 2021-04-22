import React, {useState, useEffect, useRef} from "react";

// const useMountEffect = fun => useEffect(fun, [])



export const Nav = ({ data, width }) => {
  let desktop = width < 893 ? true : false;

  const [anchor, setAnchor] = useState("");
  const anchorRef = useRef(null)

  const handleClick = (i) => {
    setAnchor(`#option-${i+1}`);
    setTimeout(() => {
      setAnchor("");
    }, 2000);
    return anchor;
    }

    // useEffect(() => {
    //     const debouncedHandleResize = debounce(function handleResize() {
    //       const width = document.body.clientWidth;
    //       setWidth(width);
    //     }, 50);
    //     window.addEventListener("resize", debouncedHandleResize);
    //     return () => {
    //       window.removeEventListener("resize", debouncedHandleResize);
    //     };
    //   });

  return (
    <>
      <div className="nav__container">
        <div className="options__section">
          <div className="options">
            <div className="container__options">
              {data.map(({ title }, i) => (
                <div key={i} className="item__option">
                  <input type="radio" id={`option-${i+1}`} ref={anchorRef} onClick={console.log(anchorRef.current)}/>
                    {/* <a className="a_option" id={`option-${i+1}`} href={`#option-${i+1}`}> */}
                      <label
                     
                    className="__label"
                    for={`option-${i+1}`}
                    // dangerouslySetInnerHTML={{ __html: title }}
                    >
                    {title}
                  </label>
                  {/* </a> */}
                  
       
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
