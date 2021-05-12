import React, { useState, useEffect } from "react";
import Input from "./Input";
import AsyncButton from "./AsyncButton";
import Checkbox from "./Checkbox";
import analytics from "../../helpers/analytics";
import {
  validateName,
  // validatePrefix,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import axios from "axios";
import InfoForm from "./InfoForm";
import Select from "./Select";
import Button from "./Button";
import Timeline from "../timeline/TimeLine";

import SelectBudget from "./SelectBudget";
// import datashops from '../../data/datashops.json'
// const {stores} = datashops

const options = [
  {
    name: "Fibra + Móvil",
    value: "fibra+movil",
  },
  {
    name: "Fibra + Móvil + TV",
    value: "fibra+movil+tv",
  },
  {
    name: "Solo Fibra / ADSL",
    value: "fibra-adsl",
  },
  {
    name: "Movistar Prosegur Alarmas",
    value: "movistar-prosegur-alarmas",
  },
  {
    name: "Segunda linea",
    value: "segunda-linea",
  },
  {
    name: "Solo móvil",
    value: "solo-movil",
  },
];

const steps = [
  {
    name: "Elige el servicio que te gustaría",
    active: true,
  },
  {
    name: "Déjanos tus datos",
    active: true,
  },
  {
    name: "Nos pondremos en contacto contigo para informarte",
    active: false,
  },
];

const budget = [
  {
    name: "Hasta 20€/ mes",
    value: 0,
  },
  {
    name: "De 20€ a 40€ / mes",
    value: 1,
  },
  {
    name: "De 40€ a 60€ / mes",
    value: 2,
  },
  {
    name: "Más de 80€ / mes",
    value: 3,
  },
];

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

const urlParams = "https://specials.mediamarkt.es/tools/api-mm/outletID/all";

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

  // const [store, setStore] = useState([]);
  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(false);

  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);

  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const { data } = await axios({
        method: "GET",
        url: urlParams,
      });
      setStores(data);
    }
    fecthData();
  }, [setStores]);

  let store = Object.values(stores);
  let storesArray = [].concat(store);
  const storesArraySorted = [...storesArray].sort((a, b) =>
    a["displayName"].localeCompare(b["displayName"]),
  );
  // storesArraySorted.map(({displayName}, i) => {
  // 	let filters=['Pinto','@Tienda'];
  // 	if(filters.some(el => displayName.includes(el))) delete store[i];
  // })
  console.log(storesArraySorted);
  console.log(typeof stores);
  console.log(stores);

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
    const isOk = value.length > 0 ? true : false;
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

  // const [option1, setOption1] = useState()
  // const handleOption1Change = (checked) => {
  //   setOption1(checked);
  // }

  // const [option2, setOption2] = useState()
  // const handleOption2Change = (checked) => {
  //   setOption2(checked);
  // }

  // const [option3, setOption3] = useState()
  // const handleOption3Change = (checked) => {
  //   setOption3(checked);
  // }

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
        dataAnalyticsForm.eventLabel,
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

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [option6, setOption6] = useState("");

  const handleOption1Change = (p) => {
    // if (option1 === "") {
    //   setOption1(p);
    // }

      setOption1(p);
    
  };


  // const handleOption2Change = (p) => {
  //   if (option2 === "") {
  //     setOption2(p);
  //   } else if (option2 === p) {
  //     setOption2("");
  //   }
  // };

  // const handleOption3Change = (p) => {
  //   if (option3 === "") {
  //     setOption3(p);
  //   } else if (option3 === p) {
  //     setOption3("");
  //   }
  // };

  // const handleOption4Change = (p) => {
  //   if (option4 === "") {
  //     setOption4(p);
  //   } else if (option4 === p) {
  //     setOption4("");
  //   }
  // };

  // const handleOption5Change = (p) => {
  //   if (option5 === "") {
  //     setOption5(p);
  //   } else if (option5 === p) {
  //     setOption5("");
  //   }
  // };

  // const handleOption6Change = (p) => {
  //   if (option6 === "") {
  //     setOption6(p);
  //   } else if (option6 === p) {
  //     setOption6("");
  //   }
  // };

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
      {/* <Timeline
    steps={steps}
    
    /> */}
      <div className="form__wrapper" id="contacto"></div>
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

            {/* <Button
              onChange={() => handleOption1Change(options[0].value)}
              name={options[0].name}
              id={options[0].name}
              type="checkbox"
              className="option__input__check"
              value={`${checkIsChecked(options[0].name) ? name :  }`}
            />
            {console.log(option1)}discos */}
            {/* <Button
              onChange={handleOption2Change(options[1].value)}
              name={options[1].name}
              type="button"
              className="option__input__check"
            />
            <Button
              onChange={handleOption3Change(options[2].value)}
              name={options[2].name}
              type="button"
              className="option__input__check"
            />
            <Button
              onChange={handleOption4Change(options[3].value)}
              name={options[3].name}
              type="button"
              className="option__input__check"
            />
            <Button
              onChange={handleOption5Change(options[4].value)}
              name={options[4].name}
              type="button"
              className="option__input__check"
            />
            <Button
              onChange={handleOption6Change(options[5].value)}
              name={options[5].name}
              type="button"
              className="option__input__check"
            /> */}
          </div>

          <div className="container__section__form">
            <div className="__header__title">
              <h2 className="--title">
                ¿Cúanto pagas en tu factura actualmente?
              </h2>
            </div>
            <SelectBudget
              name="budget"
              type="select"
              data={budget}
              className="budget__select"
              error={!isStoreError ? true : false}
              errorText="Es necesario que selecciones una opción"
              // value={storeSelected}
              onChange={(e) => handleStoresChange(e.target.value)}
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
                data={storesArraySorted}
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
              />
              {console.log(terms, newsletter)}
              <Checkbox
                onChange={(e) => handleNewsletterChange(e.target.checked)}
                type="checkbox"
                name="newsletter"
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
