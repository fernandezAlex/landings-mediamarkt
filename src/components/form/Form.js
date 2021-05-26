import React, { useState, useEffect } from "react";
import Input from "./Input";
import AsyncButton from "./AsyncButton";
import Checkbox from "./Checkbox";
import analytics from "../../helpers/analytics";
import {
  validateMultipleOptions,
  validateName,
  // validatePrefix,
  validateAddress,
  validateEmail,
  validatePhone,
  validateZipCode
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import axios from "axios";
import InfoForm from "./InfoForm";
import Select from "./Select";
import Button from "./Button";
import MultipleOptions from "./MultipleOptions";
import Timeline from "../timeline/TimeLine";

import SelectBudget from "./SelectBudget";
// import datashops from '../../data/datashops.json'
// const {stores} = datashops

import multipleOptionsData from '../../data/options.json';
import dataForm from '../../data/dataForm.json';


const Form = () => {
  const [multipleOptions, saveMultipleOptions] = useState([]);
  const [isMultipleOptionsError, setIsMultipleOptionsError] = useState(false);
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [address, setAddress] = useState("");
  const [isAddressError, setIsAddressError] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [isPrefixError, setIsPrefixError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [isZipCodeError, setIsZipCodeError] = useState(false);

  const [budgetSelected, setBudgetSelected] = useState("");
  const [isBudgetError, setIsBudgetError] = useState(false);

  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(false);

  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);

  const [stores, setStores] = useState([]);

  const updateMultipleOption = (option) => {

    if(multipleOptions.indexOf(option) > -1){
      // Remove selected option
      saveMultipleOptions(
        multipleOptions.filter(opt => opt !== option)
      )
    } else {
      // Add selected option
      saveMultipleOptions([
        ...multipleOptions,
        option
      ])
    } 
  }

  useEffect(() => {
    const isOk = validateMultipleOptions(multipleOptions);
    setIsMultipleOptionsError(!isOk);
    document.getElementById('serviciosSelect').value= multipleOptions;
  }, [multipleOptions])

  const handleNameChange = (value) => {
    setName(value);
    const isOk = validateName(value);
    setIsNameError(!isOk);
  };

  const handlerAddressChange = (value) => {
    setAddress(value);
    const isOk = validateAddress(value);
    setIsAddressError(!isOk);
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

  const handleZipCode = (value) => {
    setZipCode(value);
    const isOk = validateZipCode(value);
    setIsZipCodeError(!isOk);
  };

  const handleStoresChange = (value) => {
    setStoreSelected(value);
    const isOk = value.length > 0 ? true : false;
    setIsStoreError(isOk);
  };

  const handleBudgetChange = (value) => {
    setBudgetSelected(value);
    const isOk = value.length > 0 ? true : false;
    setIsBudgetError(isOk);
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
    validateMultipleOptions(multipleOptions) &&
    validateName(name) &&
    validateAddress(address) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    terms;

  const isAllValidated =
    isValidated === true && recaptcha === true ? true : false;
    //true;

  const dispatchForm = () => {
    if (isAllValidated) {
    //if (true) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true);
      }, 1000);
      /*analytics(
        dataForm.dataAnalyticsForm.event,
        dataForm.dataAnalyticsForm.eventCategory,
        dataForm.dataAnalyticsForm.eventAction,
        dataForm.dataAnalyticsForm.eventLabel
      );*/
      
      setActionState(dataForm.urlActionForm);
    }
  };

  const checkIsChecked = (id) => {
    let isChecked = document.getElementById(id).checked;
    if(isChecked){
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
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
            value={dataForm.idCampaign}
          />

          <MultipleOptions 
            data={multipleOptionsData} 
            error={isMultipleOptionsError} 
            errorText="Es necesario que selecciones un servicio" 
            multipleOptions={multipleOptions} 
            updateMultipleOption={updateMultipleOption}  
          />

          <div className="container__section__form">
            <div className="__header__title">
              <h2 className="--title">
                ¿Cúanto pagas en tu factura actualmente?
              </h2>
            </div>
            <SelectBudget
              name="budget"
              type="select"
              value={budgetSelected}
              className="budget__select"
              error={!isBudgetError ? true : false}
              errorText="Es necesario que selecciones una opción"
              onChange={(e) => handleBudgetChange(e.target.value)}
              labelDefault="Elige presupuesto"
              // onDefault={(event) => handleSelectDefault(event.target)}
            />
          </div>

          <div className="container__section__form">
            <div className="__header__title">
              <h2 className="--title">
                Dejanos tus datos y te haremos una oferta
              </h2>
              <p className="--text">
                Los campos marcados con un asterisco (
                <span style={{ color: `#df0000` }}>*</span>) son obligatorios
              </p>
            </div>
            <div className="inputs__container">
              <Input
                type="text"
                placeholder="Introduce tu nombre"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                name="name"
                error={isNameError}
                errorText="Introduce un nombre válido"
                className="input"
                id="name"
              />
              <Input
                type="email"
                placeholder="Indicanos tu email"
                value={email}
                onChange={(e) =>
                  handleEmailChange(e.target.value.toLowerCase())
                }
                name="email"
                error={isEmailError}
                errorText="Introduce un email válido"
                className="input"
                id="email"
              />
              <Input
                type="text"
                placeholder="Dirección: calle, número, piso, puerta"
                value={address}
                onChange={(e) => handlerAddressChange(e.target.value)}
                name="address"
                error={isAddressError}
                errorText="Introduce una dirección válida"
                className="input"
                id="adress"
              />
              <Input
                type="text"
                placeholder="Código postal"
                value={zipCode}
                onChange={(e) => handleZipCode(e.target.value)}
                name="zipCode"
                error={isZipCodeError}
                errorText="Introduce un codigo postal válido"
                className="input"
                id="zipCode"
              />
              <Select
                 name="preferedStoreId"
                 type="select"
                 className="shop__select"
                 error={!isStoreError ? true : false}
                 errorText="Es necesario que selecciones una tienda"
                 value={storeSelected}
                 onChange={(e) => handleStoresChange(e.target.value)}
                 labelDefault="Escoja una tienda"
              />
              <Input
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                name="phone"
                error={isPhoneError}
                errorText="Introduce un número de teléfono válido"
                className="input"
                id="phone"
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
              />
              <Checkbox
                onChange={(e) => handleNewsletterChange(e.target.checked)}
                type="checkbox"
                name="newsletter-agree"
                id="newsletter"
                value="yes"
                required=""
                className="test_class"
                text="Quiero suscribirme a la newsletter de MediaMarkt"
              />
              <InfoForm />
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
