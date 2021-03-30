import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import PrivacyPolicy from "./PrivacyPolicy";
import AsyncButton from "./AsyncButton";
import analytics from "../../helpers/analytics";
import {
  validateName,
  validateLastName,
  validateNif,
  validatePosition,
  validateEmail,
  validatePhone,
  validateGender,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import InputRadio from "./InputRadio"
import DateSelector from "./DateSelector";
import "react-datepicker/dist/react-datepicker.css";

import Select from './Select';
import axios from 'axios';
/* Data Form */

// import datashops from '../../data/datashops.json'
// const {stores} = datashops

const idCampaign = "194";
const dataAnalyticsForm = {
  event: "gaEvent",
  eventCategory: "Home_B2B_ED",
  eventAction: "Click",
  eventLabel: "Home_B2B_EDUCACION_contactanos",
};
const urlActionForm =
  "https://specials.mediamarkt.es/empresas/confirmacion";

const urlApiJsonShops = "https://www.mediamarkt.es/static/json/stores.es.json"



const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isLastNameError, setIsLastNameError] = useState(false);
  const [nif, setNif] = useState("");
  const [isNifError, setIsNifError] = useState(false);
  const [contact, setContact] = useState("");
  const [isContactError, setIsContactError] = useState(false);
  const [position, setPosition] = useState("");
  const [isPositionError, setIsPositionError] = useState(false);
  const [radio, setRadio] = useState("");
  const [isRadioError, setIsRadioError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [storeSelected, setStoreSelected] = useState(false);
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);


  const [shops, setShops] = useState([])

  useEffect(() => {
      axios.get(urlApiJsonShops)
          .then(({data}) => {
              setShops(data.stores)
          })
          .catch(err => {
              console.log(err)
          })
  }, [setShops])



  const handleNameChange = (value) => {
    setName(value);
    const isOk = validateName(value);
    setIsNameError(!isOk);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    const isOk = validateName(value);
    setIsLastNameError(!isOk);
  };

  const handleNifChange = (value) => {
    setNif(value);
    const isOk = validateNif(value);
    setIsNifError(!isOk);
  };

  const handleRadio = (checked) => {
    setRadio(checked);
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

  const handleStoresChange = (value) => {
    setStoreSelected(value);
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
    validateLastName(lastname) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    radio &&
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
          <InputRadio
            type="radio"
            value={radio}
            onChange={(e) => handleRadio(e.target.checked)}
            name="gender"
            error={isRadioError}
            errorText="Seleccione un Genero"
            className="input"
            id="gender"
            radio={radio}
            arraysValues={["Hombre", "Mujer", "Sin especificar"]}
            label={["Sr.","Sra.","Sin Especificar"]}
          />
          <div className="inputs__container">
            <Input
              type="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="firstname"
              error={isNameError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="firstname"
            />
            <Input
              type="lastname"
              placeholder="Apellidos"
              value={lastname}
              onChange={(e) => handleLastNameChange(e.target.value)}
              name="lastname"
              error={isLastNameError}
              errorText="Introduzca un Apellido válido"
              className="input"
              id="lastname"
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
            <Select
            type="select"
            data={shops}
            propertiesData={["IDSAP", "Name"]}
            className="shop__select"
            error={!storeSelected ? true : false}
            errorText="Es necesario que seleccione una tienda"
            value={storeSelected}
            onChange={(e) => handleStoresChange(e.target.value)}
            labelDefault="Escoja una tienda"
            // onDefault={(event) => handleSelectDefault(event.target)}

            />
            <DateSelector />
          </div>
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
