import React, { useState } from "react";
import Input from "./Input";
import AsyncButton from "./AsyncButton";
import Checkbox from "./Checkbox"
import analytics from "../../helpers/analytics";
import {
  validateName,
  // validatePrefix,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";


/* Data Form */

const idCampaign = "194";
const dataAnalyticsForm = {
  event: "gaEvent",
  eventCategory: "Home_B2B_ED",
  eventAction: "Click",
  eventLabel: "Zurich_enviar_formulario",
};
const urlActionForm =
  "https://specials.mediamarkt.es/seguros-zurich/confirmacion";



const Form = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [surname, setSurname] = useState("");
  const [isSurnameError, setIsSurnameError] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [isPrefixError, setIsPrefixError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);

  const handleNameChange = (value) => {
    setName(value);
    const isOk = validateName(value);
    setIsNameError(!isOk);
  };

  const handleSurnameChange = (value) => {
    setSurname(value);
    const isOk = validateName(value);
    setIsSurnameError(!isOk);
  };

  const handlePrefixChange = (value) => {
    setPrefix(value);
    const isOk = validatePhone(value);
    setIsPrefixError(!isOk);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    const isOk = validatePhone(value);
    setIsPhoneError(!isOk);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const isOk = validateEmail(value);
    setIsEmailError(!isOk);
  };

  const handleTermsChange = (checked) => {
    setTerms(checked);
  };

  const handleNewsletterChange = (checked) => {
    setNewsletter(checked);
  };

  const onChangeCaptcha = (value) => {
    if (value.length > 0) {
      setRecaptcha(true);
    }
  };

  const isValidated =
    validateName(name) &&
    validateName(surname) &&
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
          <h2 className="--title">¿Quieres conocer más? Envíanos tus datos y nos pondremos en contacto contigo</h2>
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
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="company"
              error={isNameError}
              errorText="Introduce un nombre válido"
              className="input"
              id="name"
            />
            <Input
              type="text"
              placeholder="Apellidos"
              value={surname}
              onChange={(e) => handleSurnameChange(e.target.value)}
              name="surname"
              error={isSurnameError}
              errorText="Introduce un/os apellido/s válido/s"
              className="input"
              id="surname"
            />
            <Input
              type="text"
              placeholder="Prefijo"
              value={prefix}
              onChange={(e) => handlePrefixChange(e.target.value)}
              name="prefix"
              error={isPrefixError}
              errorText="Inválido"
              className="input"
              id="prefix"
            />
            <Input
              type="text"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              name="phone"
              error={isPhoneError}
              errorText="Introduce un teléfono válido"
              className="input"
              id="phone"
            />
            <Input
              type="email"
              placeholder="Dirección de email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value.toLowerCase())}
              name="email"
              error={isEmailError}
              errorText="Introduce un email válido"
              className="input"
              id="email"
            />
          </div>
          <div className="footer__form">

            <Checkbox
              onChange={(e) => handleTermsChange(e.target.checked)}
              error={!terms}
              type="checkbox"
              name="terms"
              id="terms"
              value="yes"
              required=""
              className="test_class"
              dataTag="termsAndConditionsAccept"
              target="_blank"
              text='He leído y acepto la <a class="link__terms" href="https://www.mediamarkt.es/es/legal/politica-de-privacidad" rel="noreferrer" target="_blank">Política de Privacidad</a> y las <a class="link__terms" href="https://www.mediamarkt.es/es/legal/condiciones-de-uso-de-la-web" rel="noreferrer" target="_blank">condiciones de uso</a>.'
              errorText="Debes aceptar los términos y condiciones"
            />{console.log(terms, newsletter)}
            <Checkbox
              onChange={(e) => handleNewsletterChange(e.target.checked)}
              type="checkbox"
              name="newsletter"
              id="newsletter"
              value="yes"
              required=""
              className="test_class"
              text='Deseo recibir comunicaciones comerciales de MEDIA MARKT y de terceras entidades en los términos previstos en la <a class="link__terms" href="https://www.mediamarkt.es/es/legal/politica-de-privacidad" rel="noreferrer" target="_blank">Política de Privacidad</a>.'
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
