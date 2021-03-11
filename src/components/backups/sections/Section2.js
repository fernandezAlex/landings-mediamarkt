import React, { useEffect, useState } from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";
import debounce from "../../helpers/debounce";

const Section2 = () => {
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const width = document.body.clientWidth;
      setWidth(width);
    }, 500);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div className="section">
      {width < 793 ? (
        <div>
          <h1 className="title">Nuestras soluciones adaptadas</h1>
          <SliderSmall />
        </div>
      ) : (
        <div>
          <h1 className="title">Nuestras soluciones adaptadas a cada sector</h1>
          <CardGrid />
        </div>
      )}
    </div>
  );
};

export default Section2;
