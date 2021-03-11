import React from "react";
import analytics from "../../helpers/analytics";
import useModal from "../../hooks/useModal";
import Modal from '../modal/Modal';
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";


export const Section1 = () => {
  const { isShowing, toggle } = useModal();

  return (
    // <div className="section__intro">
    //   <div className="container__intro__text">
    //     <p className="text__intro">
    //       En MediaMarkt Business disponemos de soluciones integrales enfocadas
    //       al sector profesional que nos permiten ofrecerte la solución que mejor
    //       se adapta a tu necesidad. Compartimos tu ilusión y te ayudamos a
    //       materializar tus proyectos acompañándote en la transformación digital
    //       de tu negocio.
    //     </p>
    //   </div>
    //   <div className="container__links__header">
    //     <div className="container__link__contact">
    //       <a
    //         style={{ textDecoration: "none" }}
    //         onClick={() =>
    //           analytics("gaEvent", "Home_B2B", "Click", "Home_B2B_contactanos")
    //         }
    //         className="link__contact"
    //         href="#contacto"
    //       >
    //         <span className="arrow">
    //           <Arrow />
    //         </span>
    //         <font className="link__text"> Contacta con nosotros</font>
    //       </a>
    //     </div>
    //     <div className="container__link__video">
    //       <div className="link__video" onClick={toggle}>
    //         <div className="_link_video">
    //           <span className="arrow">
    //             <Arrow />
    //           </span>
    //           <font className="link__text"> Ver vídeo sobre nosotros</font>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <div className="section__intro">

    <div className="container__logo__header">
      <div className="--img"></div>
    </div>
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
              <a
                style={{ textDecoration: "none" }}
                onClick={() =>
                  analytics("gaEvent", "Home_B2B", "Click", "Home_B2B_contactanos")
                }
                className="link__contact"
                href="#contacto"
              >
                <span className="arrow">
                  <Arrow />
                </span>
                <font className="link__text"> Contacta con nosotros</font>
              </a>
            </div>
            <div className="container__link__video">
              <div className="link__video" onClick={toggle}>
                <div className="_link_video">
                  <span className="arrow">
                    <Arrow />
                  </span>
                  <font className="link__text"> Ver vídeo sobre nosotros</font>
                </div>
              </div>
            </div>
    </div>

      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};


export default Section1