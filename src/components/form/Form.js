import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import PrivacyPolicy from "./PrivacyPolicy";
import AsyncButton from "./AsyncButton";
import analytics from "../../helpers/analytics";
import {
  validateName,
  validateEmail,
  validatePhone,
  checkAdultAge
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import InputRadio from "./InputRadio"
import DateSelector from "./DateSelector";
// import "react-datepicker/dist/react-datepicker.css";


import Select from './Select';
import axios from 'axios';
/* Data Form */

import datashops from '../../data/datashops.json'
import datashopsCa from '../../data/datashops-ca.json'

// const {stores} = datashops
// console.log(datashops)

var urlBaseName = String(window.location.search);
const param = "?sr=N5TWML9";
var setParam = urlBaseName == param ? true : false;
// var setParam = React.createContext('true');

const idCampaign = "306";
// const dataAnalyticsForm = {
//   event: "gaEvent",
//   eventCategory: "Home_B2B_ED",
//   eventAction: "Click",
//   eventLabel: "Home_B2B_EDUCACION_contactanos",
// };


const urlActionForm = "https://specials.mediamarkt.es/10-euros-de-bienvenida/confirmacion";

const urlApiJsonShops = "https://www.mediamarkt.es/static/json/stores.es.json"



const Form = () => {
  
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [lastname, setLastName] = useState("");
  const [isLastNameError, setIsLastNameError] = useState(false);
  const [radio, setRadio] = useState("");
  const [isRadioError, setIsRadioError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [store, setStore] = useState([]);
  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(false);
  const [dateSelect, setDateSelect] = useState("");
  const [isDateSelectError, setIsDateSelectError] = useState(false);
  const [terms, setTerms] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);
  
  const handleRadio = (checked) => {
    setRadio(checked);
  };

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

  useEffect(() => {
      axios.get(urlApiJsonShops)
          .then(({data}) => {
              setStore(data.stores)
          })
          .catch(err => {
              console.log(err)
          })
  }, [setStore])

  const handleStoresChange = (value) => {
    setStoreSelected(value);
    const isOk = value.length>0 ? true : false;
    setIsStoreError(isOk);
  };
  
  const handleDateSelectChange = (date) => {
    setDateSelect(date);
    const isOk = checkAdultAge(date) >= 18 ? true : false;
    setIsDateSelectError(isOk);
  }

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
      email.length > 0) &&
    validateName(name) &&
    validateName(lastname) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    isDateSelectError &&
    isStoreError &&
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
      // analytics(
      //   dataAnalyticsForm.event,
      //   dataAnalyticsForm.eventCategory,
      //   dataAnalyticsForm.eventAction,
      //   dataAnalyticsForm.eventLabel
      // );
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
            name="treatment"
            error={isRadioError}
            errorText="Debes escoger una de las opciones"
            className="input"
            id="gender"
            radio={radio}
            arraysValues={["1", "2", "3"]}
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
              errorText="Introduce un nombre válido"
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
              errorText="Introduce unos apellidos válidos"
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
              errorText="Introduce un teléfono válido"
              className="input"
              id="phone"
            />
            <Select
            name="preferedStoreId"
            type="select"
            data= {setParam ? datashopsCa:datashops}
            className="shop__select"
            error={!isStoreError ? true : false}
            errorText="Es necesario que selecciones una tienda"
            value={storeSelected}
            onChange={(e) => handleStoresChange(e.target.value)}
            labelDefault="Escoja una tienda"
            // onDefault={(event) => handleSelectDefault(event.target)}
            />
            <DateSelector
              error={!isDateSelectError}
              errorText="Es necesario ser mayor de edad"
              value={dateSelect}
              onChange={(date) => handleDateSelectChange(date)}
              name={name}
            />
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
