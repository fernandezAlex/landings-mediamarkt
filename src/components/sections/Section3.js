import React from "react";
import analytics from "../../helpers/analytics";


const Section3 = ({width}) => {

  const imgThumbnail =  'https://specials.mediamarkt.es/assets-react/zurich/mm-zurich-combo.png';
  const imgThumbnail_mobile =  'https://specials.mediamarkt.es/assets-react/zurich/teaser_doble_800.png';
  const imgThumbnail_desktop =  'https://specials.mediamarkt.es/assets-react/zurich/teaser_doble_1260.png';
  

  return (
    <div className="section__img">
                <div className="img__teaser__section" 
          >
              <img src={imgThumbnail} alt={imgThumbnail}/>
            </div>
      {
        width < 843 
        ? (
            <div className="img__teaser__mobile" 
            >
              <img src={imgThumbnail_mobile} alt={imgThumbnail_mobile}/>
            </div>
        ) : (
          <div className="img__teaser__desktop" 
          >
              <img src={imgThumbnail_desktop} alt={imgThumbnail_desktop}/>
            </div>
        )
    }
          <div className="container__links__header">
            <p>
            Seguro de Responsabilidad Civil de Zurich Insurance PLC, Sucursal en España, distribuido por MediaMarkt Protect Solutions S.A. Agencia de Seguros Vinculada de Zurich Insurance PLC Sucursal en España, con NIF: A67123117, domicilio social en Edificio Prima Muntadas - C/Solsonés 2, Puerta C 08820 El Prat de Llobregat (Barcelona) y con N de inscripción en la DGSFP: AJ0240.
            </p>
              <div className="container__link__contact">
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() =>
                    analytics("gaEvent", "Nota_mediador", "Click", "Nota_informativa_Mediador")
                  }
                  className="link__contact"
                  href="https://assets.ctfassets.net/osyynfyvlyjc/7ntLWpC7tOJTKTeP5AVJmL/c5aca0515187aa0d9ffe3f46e6487056/MM18_217_Nota_informativa_Agentes_vinculados_MOD.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <font className="link__text"><strong>Nota informativa del mediador</strong></font>
                </a>
              </div>
      </div>
      </div>
  );
};

export default Section3