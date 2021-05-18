import React, {useState, useEffect, useRef} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
                <nav key={i} className="item__option">
                        <Link
                        className="nav-item"
                        activeClass="active"
                        // to={`option-${i+1}`}
                        to={title}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        for={`option-${i+1}`}
                        >
                          {title}
                        </Link>
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
