import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import PrivacyPolicy from "./PrivacyPolicy";
import AsyncButton from "./AsyncButton";
import SelectShops from "./SelectShops";
import HiddenFields from "./HiddenFields";
import analytics from "../../helpers/analytics";
import {
  validateName,
  validateNif,
  validatePosition,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import Checkbox from "./Checkbox";
import Select from "./Select";

/* Data Form */
import Stores from "../../data/stores.json";
import Enterprise from "../../data/enterprise.json";
import Treatment from "../../data/treatment.json";

const { stores } = Stores;
const { enterprise } = Enterprise
const { treatment } = Treatment;


const idCampaign = "200";
const dataAnalyticsForm = {
  event: "gaEvent",
  eventCategory: "Home_B2B",
  eventAction: "Click",
  eventLabel: "Home_B2B_enviar_formulario",
};
const urlActionForm = "https://specials.mediamarkt.es/empresas/confirmacion";

const actionFormPro =
  "https://prod-105.westeurope.logic.azure.com/workflows/4e28df4964ce4e088935dd3a4471bf29/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gAQhBy1fGZaO4dnVdEz4unZ7PfvseiynkQzkga5JrBw";

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
  const [newsletter, setNewsletter] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);
  const [store, setStore] = useState([]);
  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(null);

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

  const handleStoresChange = (value) => {
    setStoreSelected(value);
    const isOk = value.length > 0 ? true : false;
    setIsStoreError(isOk);
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
        dataAnalyticsForm.eventLabel,
      );
      setActionState(urlActionForm);
    }
  };


  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit
  // } = useCustomForm({
  //   initialValues,
  //   onSubmit: values => console.log({ values })
  // });

  return (
    <>
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
          action={actionState}
          onSubmit={dispatchForm}
        >
          <input
            type="hidden"
            name="campaign"
            id="campaign"
            value={idCampaign}
          />
          <div className="title__contact__info">
            <h4>Regístrate como cliente B2B</h4>
          </div>
          <div className="inputs__container">
            <SelectShops
              // className="input"
              id="preferred_store"
              name="preferred_store"
              type="select"
              data={stores}
              className="input"
              error={null && (!isStoreError ? true : false)}
              errorText="Es necesario que selecciones una tienda"
              value={storeSelected}
              onChange={(e) => handleStoresChange(e.target.value)}
              labelDefault="Escoge una tienda"
              required={true}
            />
            <Input
              type="text"
              placeholder="Nombre de la empresa"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="company_name"
              error={isNameError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="company_name"
              required={true}
            />
            <Select
              // className="input"
              // id="preferred_store"
              // name="preferred_store"
              type="select"
              data={enterprise}
              className="input"
              error={!isStoreError ? true : false}
              errorText="Es necesario que selecciones una tienda"
              value={storeSelected}
              onChange={(e) => handleStoresChange(e.target.value)}
              labelDefault="Tipo de empresa"
              required={true}
            />
            <Input
              type="text"
              placeholder="NIF Empresa"
              value={nif}
              onChange={(e) => handleNifChange(e.target.value.toUpperCase())}
              name="nif"
              error={isNifError}
              errorText="Introduzca un NIF válido"
              className="input"
              id="nif"
              required={true}
            />
            <Input
              type="text"
              placeholder="Sitio Web"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              name="contact"
              error={isContactError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="contact"
            />
            <Input
              type="text"
              placeholder="Número de empleados"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              name="contact"
              error={isContactError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="contact"
            />
          </div>
          <div className="title__contact__info">
            <h4>Información de contacto</h4>
          </div>
          <div className="inputs__container">
            <Select
              // className="input"
              id="preferred_store"
              name="preferred_store"
              type="select"
              data={treatment}
              className="input"
              error={!isStoreError ? true : false}
              errorText="Es necesario que selecciones una tienda"
              value={storeSelected}
              // dataValue={"MC_STORE_ID"}
              // dataName={"Name"}
              onChange={(e) => handleStoresChange(e.target.value)}
              labelDefault="Tratamiento"
              required={true}
            />
            <Input
              type="contact"
              placeholder="Nombre"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              name="contact"
              error={isContactError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="contact"
              required={true}
            />
            <Input
              type="contact"
              placeholder="Apellido"
              value={contact}
              onChange={(e) => handleContactChange(e.target.value)}
              name="contact"
              error={isContactError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="contact"
              required={true}
            />
            <Input
              type="position"
              placeholder="Cargo"
              value={position}
              onChange={(e) => handlePositionChange(e.target.value)}
              name="position"
              error={isPositionError}
              errorText="Posición"
              className="input"
              id="position"              
              required={true}
            />
            <Input
              type="e-mail"
              placeholder="Dirección de email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value.toLowerCase())}
              name="email"
              error={isEmailError}
              errorText="Introduzca un email válido"
              className="input"
              id="email"
              required={true}
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
              required={true}
            />
          </div>
          <div className="title__contact__info">
            <h4>Información de contacto</h4>
          </div>
          <Select
            // className="input"
            id="preferred_store"
            name="preferred_store"
            type="select"
            data={stores}
            className="input"
            error={!isStoreError ? true : false}
            errorText="Es necesario que selecciones una tienda"
            value={storeSelected}
            dataValue={"MC_STORE_ID"}
            dataName={"Name"}
            onChange={(e) => handleStoresChange(e.target.value)}
            labelDefault="Tipo de solicitud"
            required={true}
          />
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
            {/* <PrivacyPolicy
              onChange={(e) => handleTermsChange(e.target.checked)}
              terms={terms}
            /> */}
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
              text="Los clientes comerciales aceptan los términos y condiciones"
              errorText="Debes aceptar los términos y condiciones"
              href="https://www.mediamarkt.es/es/legal/politica-de-privacidad"
              rel="nofollow"
            />
            <Checkbox
              onChange={(e) => handleNewsletterChange(e.target.checked)}
              type="checkbox"
              name="terms"
              id="terms"
              value="yes"
              required=""
              className="test_class"
              dataTag="termsAndConditionsAccept"
              text="Suscríbete al boletín de noticias B2B de Mediamarkt"
            />
            <ReCaptcha
              size="normal"
              render="explicit"
              sitekey="6LdI4SUaAAAAAEPC4phCYBzZVLZg6tAz5nEbLO59"
              className={`recaptcha ${isValidated ? "enabled" : "disabled"}`}
              onChange={onChangeCaptcha}
            />
            <HiddenFields />
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
