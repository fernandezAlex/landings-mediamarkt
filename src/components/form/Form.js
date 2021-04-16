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
import InfoForm from "./InfoForm";
import Select from './Select';
import datashops from '../../data/datashops.json'
import Option from "./Option";
import Timeline from "../timeline/Timeline";

const {stores} = datashops



const steps = [
	{
		name: 'Elige el servicio que te gustaría',
		active: true,
	},
	{
		name: 'Déjanos tus datos',
		active: true,
	},
	{
		name: 'Nos pondremos en contacto contigo para informarte',
		active: false,
	}
]

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

  const [store, setStore] = useState([]);
  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(false);

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

  const handleStoresChange = (value) => {
    setStoreSelected(value);
    const isOk = value.length>0 ? true : false;
    setIsStoreError(isOk);
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

  const [option1, setOption1] = useState()
  const handleOption1Change = (checked) => {
    setOption1(checked);
  }

  const [option2, setOption2] = useState()
  const handleOption2Change = (checked) => {
    setOption2(checked);
  }

  const [option3, setOption3] = useState()
  const handleOption3Change = (checked) => {
    setOption3(checked);
  }


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
  
  // // const [button, setButton] = useState(false)
  // const [options, setOptions] = useState({
  //   videos: [{id: 1, title: 'Video 1'}],
  //   texts: [{id: 1, title: 'Texto 1'}],
  //   audios: [{id: 1, title: 'Audio 1'}]
  // })
  
  // // const handleClickButton = (e) => {
  // const handleClickButton = ({target}) => {
  //     // e.preventDefault();
  //     // const {target} = e
  //     // setButton(!button)
  //     setOptions({
  //       ...options,
  //       [target.name]: target.value,
  //       button: target.checked,
  //     })
 

  //   }



  return (
    <>
    <Timeline
    steps={steps}
    
    />
      <div className="form__wrapper" id="contacto">

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
                <div className="container__section__form">
                <div className="__header__title">
          <h2 className="--title">¿Qué servicios te interesan?</h2>

        </div>

                <Option
                onChange={(e) => handleOption1Change(e.target.checked)}
                name="nombre1"
                type="checkbox"
                value={option1}
                />
                <Option
                onChange={(e) => handleOption2Change(e.target.checked)}
                name="nombre2"
                type="checkbox"
                value={option2}
                />
                <Option
                onChange={(e) => handleOption3Change(e.target.checked)}
                name="nombre3"
                type="checkbox"
                value={option3}
                />
                </div>
                {console.log(option1)}
        
        
        <div className="container__section__form">
        <div className="__header__title">
          <h2 className="--title">¿Cúanto pagas en tu factura actualmente?</h2>

        </div>
        <Select
            name="budget"
            type="select"
            data={stores}
            className="budget__select"
            error={!isStoreError ? true : false}
            errorText="Es necesario que selecciones una opción"
            value={storeSelected}
            onChange={(e) => handleStoresChange(e.target.value)}
            labelDefault="Elige presupuesto"
            // onDefault={(event) => handleSelectDefault(event.target)}
            />
        </div>


        
        <div className="container__section__form">
        <div className="__header__title">
          <h2 className="--title">Dejanos tus datos y te haremos una oferta</h2>
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
              name="company"
              error={isNameError}
              errorText="Introduce un nombre válido"
              className="input"
              id="name"
            />
            <Input
              type="email"
              placeholder="Indicanos tu email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value.toLowerCase())}
              name="email"
              error={isEmailError}
              errorText="Introduce un email válido"
              className="input"
              id="email"
            />
            <Input
              type="text"
              placeholder="Dirección: calle, número, piso, puerta"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="adress"
              error={isNameError}
              errorText="Introduce un nombre válido"
              className="input"
              id="adress"
            />
            <Input
              type="text"
              placeholder="Código postal"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              name="zipCode"
              error={isPhoneError}
              errorText="Introduce un codigo postal válido"
              className="input"
              id="zipCode"
            />
            <Select
            name="preferedStoreId"
            type="select"
            data={stores}
            className="shop__select"
            error={!isStoreError ? true : false}
            errorText="Es necesario que selecciones una tienda"
            value={storeSelected}
            onChange={(e) => handleStoresChange(e.target.value)}
            labelDefault="Elige tu tienda favorita"
            // onDefault={(event) => handleSelectDefault(event.target)}
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
              text='Quiero suscribirme a la newsletter de MediaMarkt'
            />
            <InfoForm/>
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
