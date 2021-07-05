import React, { useState, useEffect } from "react";
import Input from "./Input";
import AsyncButton from "./AsyncButton";
import Checkbox from "./Checkbox";
import analytics from "../../helpers/analytics";
import {
  validateName,
  validateAddress,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import axios from "axios";
import Swal from 'sweetalert2'
import InfoForm from "./InfoForm";
import Select from "./Select";
import {optionsTime} from '../../data/dataForm'
import dataForm from '../../data/dataForm.json';


const Form = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [surname, setSurname] = useState("");
  const [isSurnameError, setIsSurnameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [hour, setHour] = useState("");
  const [isHourError, setIsHourError] = useState(false);
  const [respon, setRespon] = useState("");

  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actionState, setActionState] = useState(null);

  const valuesForm = {
    nombre: name,
    apellidos: surname,
    email: email,
    telefono: phone,
    franja_horaria: hour,
    newsletter_agree: newsletter,
    origin_tercero: dataForm.originTercero,
    numberNode: dataForm.numberNode,
    idCampaign: dataForm.idCampaign
  }

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

  const handlePhoneChange = (value) => {
    setPhone(value);
    const isOk = validatePhone(value);
    setIsPhoneError(!isOk);
  };

  const handleHourChange = (value) => {
    setHour(value);
    const isOk = value.length > 0 ? true : false;
    setIsHourError(isOk);
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

  const reset = () => {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setHour("");
    document.getElementById("check1").checked = false;
    if (newsletter) {document.getElementById("newsletter-agree").checked = false;}
    setNewsletter(false);
    setTerms(false);
    setIsLoading(false);
    setIsSubmited(false);
  }

  const isValidated =
    validateName(name) &&
    validateName(surname) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateName(name) &&
    isHourError &&
    terms;

  const isAllValidated =
    isValidated === true && recaptcha === true ? true : false;
    // true;

  useEffect(() => {
    if(respon.registerEmarsys == null){
      return 
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Gracias <b>${valuesForm.nombre}`,
      text: `${respon.responPam} ${respon.responEmarsys}`,
      timer: `${newsletter ? 7000 : 2500}`,
    })
  },[respon]);

  async function fecthData(){
    const respuesta = await axios({
    method: 'POST',
    url: dataForm.urlActionForm,
    data: JSON.stringify(valuesForm)
    })
    setRespon(respuesta.data)
  }

  const dispatchForm = (e, valuesForm) => {
    e.preventDefault();
    if (isAllValidated) {
      fecthData();
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true);
      }, 1000);
      // analytics(
      //   valuesForm.dataAnalyticsForm.event,
      //   valuesForm.dataAnalyticsForm.eventCategory,
      //   valuesForm.dataAnalyticsForm.eventAction,
      //   valuesForm.dataAnalyticsForm.eventLabel
      // );
      return setTimeout(() => {
        reset(newsletter);
      }, `${newsletter ? 2000 : 1000}`);
    }
  };

  return (
    <>
      <div className="form__container">
        <form
          name="campaign-form"
          id="campaign-form"
          class="--form campaign-form required"
          method="POST"
          // action={actionState}
          onSubmit={dispatchForm}
        >
          <input
            type="hidden"
            name="campaign"
            id="campaign"
            value={valuesForm.idCampaign}
          />
          <div className="container__section__form">
            <div className="__header__title">
              <h2 className="--title">
                ¿Quieres conocer más? Envíanos tus datos y nos pondremos en contacto contigo
              </h2>
              <p className="--text">
                Los campos marcados con un asterisco (
                <span style={{ color: `#df0000` }}>*</span>) son obligatorios
              </p>
            </div>
            <div className="inputs__container">
              <Input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                name="name"
                error={isNameError}
                errorText="Introduce un nombre válido"
                className="input"
                id="name"
              />
              <Input
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder="Apellidos"
                value={surname}
                onChange={(e) => handleSurnameChange(e.target.value)}
                // onChange={handleInputChange}
                error={isSurnameError}
                errorText="Introduce un/os apellido/s válido/s"
                className="input"
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
              <Input
                type="email"
                placeholder="Email"
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
              <Select
                type="select"
                name="franja_horaria"
                id="franja_horaria"
                value={hour}
                onChange={(e) => handleHourChange(e.target.value)}
                // onChange={handleInputChange}
                error={!isHourError}
                errorText="Es necesario que selecciones una opción"
                className="input"
                data={optionsTime}
                labelDefault="Hora solicitada"
              />
            </div>
            <div className="footer__form">
              <Checkbox
                onChange={(e) => handleTermsChange(e.target.checked)}
                error={!terms}
                type="checkbox"
                name="terms"
                id="check1"
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
                id="newsletter-agree"
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
