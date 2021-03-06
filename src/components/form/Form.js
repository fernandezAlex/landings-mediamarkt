import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import PrivacyPolicy from "./PrivacyPolicy";
import AsyncButton from "./AsyncButton";
import analytics from "../../helpers/analytics";
import {
  validateName,
  validateNif,
  validatePosition,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";

/* Data Form */

const idCampaign = "200";
const dataAnalyticsForm = {
  event: "gaEvent",
  eventCategory: "Home_B2B",
  eventAction: "Click",
  eventLabel: "Home_B2B_enviar_formulario",
};
const urlActionForm =
  "https://specials.mediamarkt.es/empresas/confirmacion";



const Form = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [nif, setNif] = useState("");
  const [isNifError, setIsNifError] = useState(false);
  const [contact, setContact] = useState("");
  const [isContactError, setIsContactError] = useState(false);
  const [position, setPosition] = useState("");
  const [isPositionError, setIsPositionError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);

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

  const onChangeCaptcha = (value) => {
    if (value.length > 0) {
      setRecaptcha(true);
    }
  };

  const isValidated =
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
    terms;

  const isAllValidated =
    isValidated === true && recaptcha === true ? true : false;

  const dispatchForm = () => {
    if (isAllValidated) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true);
      }, 1000);
      analytics(
        dataAnalyticsForm.event,
        dataAnalyticsForm.eventCategory,
        dataAnalyticsForm.eventAction,
        dataAnalyticsForm.eventLabel
      );
      setActionState(urlActionForm);
    }
  };

  return (
    <>
      <div className="form__wrapper" id="contacto">
        <div className="__header__title">
          <h2 className="--title">??En qu?? podemos ayudarte?</h2>
          <p className="--text">
            Env??anos tu consulta y nuestro equipo de asesores contactar??n
            contigo o ll??manos al 900 205111 (Horario de atenci??n de lunes a
            viernes de 9h a 17h)
          </p>
        </div>
        <div className="__header__subtitle">
          <h2 className="--subtitle"> </h2>
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
          action={actionState}
          onSubmit={dispatchForm}
        >
          <input
            type="hidden"
            name="campaign"
            id="campaign"
            value={idCampaign}
          />
          <div className="inputs__container">
            <Input
              type="name"
              placeholder="Nombre de la empresa"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="company"
              error={isNameError}
              errorText="Introduce un nombre v??lido"
              className="input"
              id="company"
            />
            <Input
              type="nif"
              placeholder="NIF Empresa"
              value={nif}
              onChange={(e) => handleNifChange(e.target.value.toUpperCase())}
              name="nif"
              error={isNifError}
              errorText="Introduce un NIF v??lido"
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
              errorText="Introduce un nombre v??lido"
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
              errorText="Introduce un cargo v??lido"
              className="input"
              id="position"
            />
            <Input
              type="e-mail"
              placeholder="Direcci??n de email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value.toLowerCase())}
              name="email"
              error={isEmailError}
              errorText="Introduce un email v??lido"
              className="input"
              id="email"
            />
            <Input
              type="phone"
              placeholder="Tel??fono"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              name="phone"
              error={isPhoneError}
              errorText="Introduce un tel??fono v??lido"
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
            <PrivacyPolicy
              onChange={(e) => handleTermsChange(e.target.checked)}
              terms={terms}
            />
            <ReCaptcha
              size="normal"
              render="explicit"
              sitekey="6LdI4SUaAAAAAEPC4phCYBzZVLZg6tAz5nEbLO59"
              className={`recaptcha ${isValidated ? "enabled" : "disabled"}`}
              onChange={onChangeCaptcha}
            />
            <AsyncButton 
              type="submit"
              disabled={!isAllValidated}
              isAllValidated={isAllValidated}
              isSubmited={isSubmited}
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
