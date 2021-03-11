import React, { useEffect, useState } from "react";
import SliderBigSection1 from "../carousel/SliderBigSection1";
import SliderSmallSection1 from "../carousel/SliderSmallSection1";
import debounce from "../../helpers/debounce";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

const Section = () => {
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

  const { isShowing, toggle } = useModal();



  return (
    <div className="section">
      <div className="container__intro__text">
        <p className="text__intro">
          En MediaMarkt Business disponemos de soluciones integrales enfocadas
          al sector profesional que nos permiten ofrecerte la solución que mejor
          se adapta a tu necesidad. Compartimos tu ilusión y te ayudamos a
          materializar tus proyectos acompañándote en la transformación digital
          de tu negocio.
        </p>
      </div>
      <div className="container__links__header">
        <div className="container__link__contact">
          <a className="link__contact" target="__loquesea" href="www">
            <span className="arrow">
              <Arrow />
            </span>
            <font className="link__text"> Contacta con nosotros</font>
          </a>
        </div>
        <div className="container__link__video">
          <div className="link__video"  onClick={toggle}>
            <span className="arrow">
              <Arrow />
            </span>
            <font className="link__text"> Ver vídeo sobre nosotros</font>
          </div>
        </div>
      </div>
      {/*       <button className="button-default" >
        Show Modal
      </button> */}
      <Modal isShowing={isShowing} hide={toggle} />
      <div>z
          <h1 className="title">Destacados</h1>
        </div>
      {
        width < 793
        ? <SliderSmallSection1 />
        : <SliderBigSection1 />
      }
    </div>
  );
};

export default Section;
