import React from "react";
import analytics from "../../helpers/analytics";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { ReactComponent as Arrow } from "../../img/button-arrow.svg";

export const Section1 = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="section__intro">
      <div className="container__logo__header">
        <div className="--img"></div>
      </div>
      <div className="container__intro__text">
        <p className="text__intro">
        <br />
        <br />
          En MediaMarkt Business te acompañamos en la digitalización de tu
          negocio mejorando la comunicación con tus clientes y optimizando el
          ciclo de venta para que los beneficios de tu negocio crezcan
          exponencialmente.
          <br />
          <br />
          El avance constante de la tecnología ha transformado digitalmente los
          puntos de venta, evolucionando hasta convertirnos en un nuevo
          consumidor que busca nuevas formas de compra y una experiencia única.
        </p>
      </div>
      <div className="container__links__header">
        <div className="container__link__contact">
          <a
            style={{ textDecoration: "none" }}
            onClick={() =>
              analytics(
                "gaEvent",
                "Home_B2B_COMERCIO",
                "Click",
                "Home_B2B_COMERCIO_contactanos",
              )
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
              <font className="link__text">
                {" "}
                Ver vídeo de MediaMarkt Business Comercio
              </font>
            </div>
          </div>
        </div>
        <div className="container__link__contact">
          <a
            style={{ textDecoration: "none" }}
            onClick={() =>
              analytics(
                "gaEvent",
                "Home_B2B_COMERCIO",
                "Click",
                "Home_B2B_COMERCIO_ver_folleto",
              )
            }
            className="link__contact"
            href="https://specials.mediamarkt.es/folleto-empresas/comercio"
            target="_blank"
            rel="noreferrer"
          >
            <span className="arrow">
              <Arrow />
            </span>
            <font className="link__text"> Ver folleto de Comercio</font>
          </a>
        </div>
      </div>

      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Section1;
