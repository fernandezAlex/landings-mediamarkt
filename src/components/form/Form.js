import React, { useState } from "react";
import {
  validateName,
  validateNif,
  validatePosition,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import Input from "./Input";
import TextArea from "./TextArea";
import analytics from '../../helpers/analytics';

const Form = () => {
  const [name, setName] = useState("");
  const [nif, setNif] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isNifError, setIsNifError] = useState(false);
  const [isContactError, setIsContactError] = useState(false);
  const [isPositionError, setIsPositionError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);


  const handleNameChange = (value) => {
    setName(value);
    const isOk = validateName(value);
    setIsNameError(!isOk);
  };

  const handleNifChange = (value) => {
    setNif(value);
    const isOk = validateNif(value);
    setIsNifError(!isOk);
  };

  const handleContactChange = (value) => {
    setContact(value);
    const isOk = validateName(value);
    setIsContactError(!isOk);
  };

  const handlePositionChange = (value) => {
    setPosition(value);
    const isOk = validatePosition(value);
    setIsPositionError(!isOk);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const isOk = validateEmail(value);
    setIsEmailError(!isOk);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    const isOk = validatePhone(value);
    setIsPhoneError(!isOk);
  };

  const handleMessageChange = (value) => {
    setMessage(value);

  };
  
  const handleTermsChange = (checked) => {

    setTerms(checked);

  };

  const enabled =
    (name.length > 0 ||
      nif.length > 0 ||
      contact.length > 0 ||
      position.length > 0 ||
      email.length > 0) &&
    validateName(name) &&
    validateNif(nif) &&
    validateName(contact) &&
    validatePosition(position) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    terms === true;

  return (
    <React.Fragment>
      <div className="form__wrapper" id="contacto">
        <div className="__header__title">
          <h2 className="--title">¿En qué podemos ayudarte?</h2>
          <p className="--text">
            Envíanos tu consulta y nuestro equipo de asesores contactarán
            contigo o llámanos al 900 205111 (Horario de atención de lunes a
            viernes de 9h a 17h)
          </p>
        </div>
        <div className="__header__subtitle">
          <h2 className="--subtitle">Tus datos personales</h2>
          <p className="--text">
            Los campos marcados con un asterisco (
            <span style={{ color: `#df0000` }}>*</span>) son obligatorios
          </p>
        </div>
      </div>
      <div className="form__container">
        <form
          name="campaign-form"
          id="campaign-form"
          class="--form campaign-form required"
          method="POST"
          action={enabled ? "https://specials.mediamarkt.es/empresas/confirmacion" : null}
        >
          <input type="hidden" name="campaign" id="campaign" value="194" />
          <div className="inputs__container">
            <Input
              type="name"
              placeholder="Nombre del centro educativo"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="company"
              error={isNameError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="company"
            />
            <Input
              type="nif"
              placeholder="NIF centro educativo"
              value={nif}
              onChange={(e) => handleNifChange(e.target.value)}
              name="nif"
              error={isNifError}
              errorText="Introduzca un NIF válido"
              className="input"
              id="cif"
            />
            <Input
              type="contact"
              placeholder="Persona de contacto"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              name="contact"
              error={isContactError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="contact"
            />
            <Input
              type="position"
              placeholder="Cargo"
              value={position}
              onChange={(e) => handlePositionChange(e.target.value)}
              name="position"
              error={isPositionError}
              errorText="Introduzca un cargo válido"
              className="input"
              id="position"
            />
            <Input
              type="e-mail"
              placeholder="Dirección de email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              name="email"
              error={isEmailError}
              errorText="Introduzca una email válido"
              className="input"
              id="email"
            />
            <Input
              type="phone"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              name="phone"
              error={isPhoneError}
              errorText="Introduzca un teléfono válido"
              className="input"
              id="phone"
            />
          </div>

          <TextArea
            type="mytext"
            placeholder="Consulta"
            rows={4}
            name="consulta"
            className="message"
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
            id="consulta"
          />
          <div className="footer__form">
            <div className="--container">
              <div class="privacypolicy__container">
                <input
                  className="check"
                  type="checkbox"
                  name="tlegal-terms"
                  id="tlegal-terms"
                  onChange={(e) => handleTermsChange(e.target.checked)}
                />
                <label
                  className="label--policy"
                  id="tlegal-terms1"
                >
                  <span></span>
                  He leído y acepto la&nbsp;
                  <a
                    className="--link privacy-modal"
                    href="https://www.mediamarkt.es/es/legal/politica-de-privacidad"
                    rel="nofollow"
                    title="Política de privacidad"
                    style={{ color: "#df0000" }}
                  >
                    Política de Privacidad
                  </a>&nbsp;
                  y las&nbsp;
                  <a
                    className="--link privacy-modal"
                    href="https://www.mediamarkt.es/es/legal/condiciones-de-uso-de-la-web"
                    rel="nofollow"
                    title="Condiciones de uso"
                    style={{ color: "#df0000" }}
                  >
                    condiciones de uso
                  </a>
                  .
                </label>
              </div>
            </div>
            <div className={`error__terms ${!terms ? "" : "disabled"}`}>
                  Es necesario que acepte la política de privacidad y las condiciones de uso de la web
                </div>
            <button
              type="submit"
              className={`${enabled ? "enabled" : "disabled"}`}
              disabled={!enabled}
              onClick={() => analytics('gaEvent', 'Home_B2B', 'Click', 'Home_B2B_enviar_formulario')}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
