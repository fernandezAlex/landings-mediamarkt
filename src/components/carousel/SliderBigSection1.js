import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardWide from "../cards/CardWide";

const SliderBigSection1 = () => {
  const cards = [
    {
      title: "Apúntate a nuestros  próximos webinars de educación",
      subtitle: "",
      imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/Teaser.png",
      button: "Regístrate",
      slug: "https://specials.mediamarkt.es/empresas/educacion/formulario-webinars",
      eventGa: 'gaEvent',
      eventCategory: 'Home_B2B',
      eventAction: 'Click',
      eventLabel: 'Home_B2B_destacado1'
  },
  {
      title: "Somos el aliado de confianza para tu centro educativo",
      subtitle: "Descubre todas las soluciones que podemos ofrecerte",
      imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/Teaser2.png",
      button: "Ver más",
      slug: "https://specials.mediamarkt.es/empresas/educacion",
      eventGa: 'gaEvent',
      eventCategory: 'Home_B2B',
      eventAction: 'Click',
      eventLabel: 'Home_B2B_destacado2'
  },
  {
      title: "Soluciones energéticas para empresas",
      subtitle: "Como combinar la rentabilidad, competitividad y sostenibilidad",
      imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/Teaser3.png",
      button: "Consúltanos",
      slug: "#contacto",
      eventGa: 'gaEvent',
      eventCategory: 'Home_B2B',
      eventAction: 'Click',
      eventLabel: 'Home_B2B_destacado3'
  },
  {
      title: "Google Nest Wifi para empresas",
      subtitle: "Crea tu red WiFi estable y segura pregúntanos por tu mejor solución",
      imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/Teasergoogle.png",
      button: "Consúltanos",
      slug: "#contacto",
      eventGa: 'gaEvent',
      eventCategory: 'Home_B2B',
      eventAction: 'Click',
      eventLabel: 'Home_B2B_destacado4'
  },
  {
      title: "Soluciones de prevención frente al Covid-19",
      subtitle: "Espacios seguros: clientes y empleados protegidos",
      imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/Teasercovid.jpg",
      button: "Ver más",
      slug: "https://specials.mediamarkt.es/empresas/soluciones-covid",
      eventGa: 'gaEvent',
      eventCategory: 'Home_B2B',
      eventAction: 'Click',
      eventLabel: 'Home_B2B_destacado5'
  }
];

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    draggable: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };


  return (
    <div className="container__sliderbig">
      <div className="sliderbig__card">
        <Slider {...settings}>
          {cards.map((card, i) => {
            return (
              <CardWide
                key={i}
                imgThumbnail={card.imgThumbnail}
                title={card.title}
                subtitle={card.subtitle}
                slug={card.slug}
                button={card.button}
                event={card.event}
                eventCategory={card.eventCategory}
                eventAction={card.eventAction}
                eventLabel={card.eventLabel}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderBigSection1;
