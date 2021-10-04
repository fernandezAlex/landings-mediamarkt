import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import AsyncButton from "./AsyncButton";
import SelectShops from "./SelectShops";
import HiddenFields from "./HiddenFields";
import axios from 'axios';
import analytics from "../../helpers/analytics";
import {
  validateInteger,
  validateName,
  validateNif,
  validatePosition,
  validateEmail,
  validatePhone,
  validateMessage,
} from "../validations/ValidateFunctions";
import ReCaptcha from "react-google-recaptcha";
import Checkbox from "./Checkbox";
import Select from "./Select";
import Swal from 'sweetalert2'

/* Data Form */
import dataForm from '../../data/dataForm/dataForm.json';
import Enterprise from "../../data/dataForm/enterprise.json";
import Treatment from "../../data/dataForm/treatment.json";
import Request from "../../data/dataForm/request.json"
import termsAndConditions from "../../data/dataForm/termsAndConditions";

const { enterprise } = Enterprise
const { treatment } = Treatment;
const { request } = Request

const Form = () => {
  const [storeSelected, setStoreSelected] = useState("");
  const [isStoreError, setIsStoreError] = useState(null);
  const [nameEnterprise, setNameEnterprise] = useState("");
  const [isNameEnterpriseError, setIsNameEnterpriseError] = useState(false);
  const [typeEnterprise, setTypeEnterprise] = useState("");
  const [isTypeEnterpriseError, setIsTypeEnterpriseError] = useState(null);
  const [nif, setNif] = useState("");
  const [isNifError, setIsNifError] = useState(false);
  const [web, setWeb] = useState("");
  const [isWebError, setIsWebError] = useState(false);
  const [employees, setEmployees] = useState("");
  const [isEmployeesError, setIsEmployeesError] = useState(false);

  const [typeTreatment, setTypeTreatment] = useState("");
  const [isTypeTreatmentError, setIsTypeTreatmentError] = useState(null);
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [surname, setSurname] = useState("");
  const [isSurnameError, setIsSurnameError] = useState(false);
  const [position, setPosition] = useState("");
  const [isPositionError, setIsPositionError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  
  const [typeRequest, setTypeRequest] = useState("");
  const [isTypeRequestError, setIsTypeRequestError] = useState(null);
  const [message, setMessage] = useState("");
  const [respon, setRespon] = useState("");

  const [terms, setTerms] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [responEmarsys, setResponEmarsys] = useState("");

  // const [recaptcha, setRecaptcha] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStoresChange = (value) => {
    setStoreSelected(value);
    const isOk = value.length > 0 ? true : false;
    setIsStoreError(isOk);
  };

  const handleNameEnterpriseChange = (value) => {
    setNameEnterprise(value);
    const isOk = validateName(value);
    setIsNameEnterpriseError(!isOk);
  };

  const handleTypeEnterpriseChange = (value) => {
    setTypeEnterprise(value);
    const isOk = value.length > 0 ? true : false;
    setIsTypeEnterpriseError(isOk);
  };

  const handleNifChange = (value) => {
    setNif(value);
    const isOk = validateNif(value);
    setIsNifError(!isOk);
  };

  const handleWebChange = (value) => {
    setWeb(value);
    const isOk = validateName(value);
    setIsWebError(!isOk);
  };
  
  const handleEmployeesChange = (value) => {
    setEmployees(value);
    const isOk = validateInteger(value);
    setIsEmployeesError(!isOk);
  };

  const handleTypeTreatmentChange = (value) => {
    setTypeTreatment(value);
    const isOk = value.length > 0 ? true : false;
    setIsTypeTreatmentError(isOk);
  };

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

  const handleTypeRequestChange = (value) => {
    setTypeRequest(value);
    const isOk = value.length > 0 ? true : false;
    setIsTypeRequestError(isOk);
  };

  const handleMessageChange = (value) => {
    setMessage(value);
  };

  const handleTermsChange = (checked) => {
    setTerms(checked);
  };

  const handleNewsletterChange = (checked) => {
    setNewsletter(checked);
  };

  // const onChangeCaptcha = (value) => {
  //   if (value.length > 0) {
  //     setRecaptcha(true);
  //   }
  // };

  // const isValidated = isStoreError && validateName(nameEnterprise) && isTypeEnterpriseError && validateNif(nif) && (web === "" || validateName(web))&& validateInteger(employees) &&
  // isTypeTreatmentError && validateName(name) && validateName(surname) && validatePosition(position) && validateEmail(email) && validatePhone(phone) &&
  // isTypeRequestError && (message === "" || validateMessage(message)) && terms;

  const isAllValidated = true
    // isValidated === true
    // && recaptcha === true ? true : false;

  // const isAllValidated = isValidated ;

  const dispatchForm = (e) => {
    e.preventDefault();
    if (isAllValidated) {
      sendDataPartner(e);
      if(newsletter)sendDataEmarsys(e);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true);
      }, 1000);
      // analytics(
      //   dataForm.dataAnalyticsForm.event,
      //   dataForm.dataAnalyticsForm.eventCategory,
      //   dataForm.dataAnalyticsForm.eventAction,
      //   dataForm.dataAnalyticsForm.eventLabel
      // );
      reset(newsletter);
      return setTimeout(() => {
        reset(newsletter);
      }, `${newsletter ? 2000 : 1000}`);
    }
  };

  // Send data to Emarsys
  async function sendDataEmarsys(e){ 
    const formData = new FormData(e.target)
    // insert origin tercero field of just Emarsys
    formData.append("origin_tercero", dataForm.originTercero);
    // insert newsletter_agree field of just Emarsys
    formData.has("newsletter") ? formData.append("newsletter_agree", true) : formData.append("newsletter_agree", false);
    const body = {}
    formData.forEach((value, property) => body[property] = value)
    body.newsletter_agree = body.newsletter_agree == "true" ? true : false;
    const respuestaEmarsys = await axios({
      method: 'POST',
      url: dataForm.urlActionForm,
      data: JSON.stringify(body)
    })
    setResponEmarsys(respuestaEmarsys.data.responEmarsys)
  };
  
  // Send data to partner
  async function sendDataPartner(e){
    const formData = new FormData(e.target)
    const body = {}
    formData.forEach((value, property) => body[property] = value)
    body.newsletter = body.newsletter == "yes" ? true : false;
    const respuesta = await axios({
      method: 'POST',
      url: dataForm.urlSendPartner,
      data: body,
    })
    .then( (response) => {
        //handle success
        setRespon(response)
    })
    .catch( (response) => {
        //handle error
        setRespon(response)
    });
  }

  useEffect(() => {
    if(respon == ""){
      return 
    }
    Swal.fire({
      position: 'center',
      icon: respon.status == 200 ? 'success' : 'error' ,
      showCloseButton: true,
      title: respon.status == 200 ? `Gracias` : `Hay un error` ,
      text: respon.status == 200 ? `Hemos recibido tus datos, pronto nos pondremos en contacto contigo. ${responEmarsys}`: `No hemos podido guardar tus datos, vuelve a intentarlo más tarde.` ,
      timer: 100000,
    })    
  },[respon]);

  const reset = () => {
    setStoreSelected("");
    setNameEnterprise("");
    setTypeEnterprise("");
    setNif("");
    setWeb("");
    setEmployees("");
    setTypeTreatment("");
    setName("");
    setSurname("");
    setPosition("");
    setEmail("");
    setPhone("");
    setTypeRequest("");
    setMessage("");
    document.getElementById("check1").checked = false;
    if (newsletter) {document.getElementById("newsletter-agree").checked = false;}
    setNewsletter(false);
    setTerms(false);
    setIsLoading(false);
    setIsSubmited(false);
    setResponEmarsys("");
  }

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
          <h2 className="--subtitle">Tus datos de contacto</h2>
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
          className="--form campaign-form required"
          onSubmit={dispatchForm}
        >
          <div className="title__contact__info">
            <h4 className="subtitle__section__form">Información de la empresa</h4>
          </div>
          <div className="inputs__container">
            <Input
              type="text"
              placeholder="Nombre de la empresa"
              value={nameEnterprise}
              onChange={(e) => handleNameEnterpriseChange(e.target.value)}
              name="company_name"
              error={isNameEnterpriseError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="company_name"
              required={true}
            />
            <Input
              type="text"
              placeholder="NIF Empresa"
              value={nif}
              onChange={(e) => handleNifChange(e.target.value.toUpperCase())}
              name="taxid"
              error={isNifError}
              errorText="Introduzca un NIF válido"
              className="input"
              id="taxid"
              required={true}
            />
             <Input
              type="text"
              placeholder="Número de empleados"
              value={employees}
              onChange={(e) => handleEmployeesChange(e.target.value)}
              name="num_employees"
              error={isEmployeesError}
              errorText="Indica el número de empleados"
              className="input"
              id="num_employees"
              required={true}
            />
            <Select
              id="company_type"
              name="company_type"
              type="select"
              data={enterprise}
              className="input"
              // error={!isStoreError ? true : false}
              error={null && (!isTypeEnterpriseError ? true : false)}
              errorText="Es necesario que selecciones una tienda"
              value={typeEnterprise}
              onChange={(e) => handleTypeEnterpriseChange(e.target.value)}
              labelDefault="Tipo de empresa"
              required={true}
            />
            <Input
              type="text"
              placeholder="Sitio Web"
              value={web}
              onChange={(e) => handleWebChange(e.target.value)}
              name="website"
              error={isWebError}
              errorText="Introduzca un nombre válido"
              className="input"
              id="website"
            />
            <SelectShops
              id="preferred_store"
              name="preferred_store"
              type="select"
              className="input"
              error={null && (!isStoreError ? true : false)}
              errorText="Es necesario que selecciones una tienda"
              value={storeSelected}
              onChange={(e) => handleStoresChange(e.target.value)}
              labelDefault="Escoge tu equipo de empresa más cercano"
              required={true}
            />
          </div>
          <div className="title__contact__info">
            <h4 className="subtitle__section__form">Información de contacto</h4>
          </div>
          <div className="inputs__container">
            <Select
              id="salutation"
              name="salutation"
              type="select"
              data={treatment}
              className="input"
              error={null && (!isTypeTreatmentError ? true : false)}
              errorText="Es necesario que selecciones una tienda"
              value={typeTreatment}
              onChange={(e) => handleTypeTreatmentChange(e.target.value)}
              labelDefault="Tratamiento"
              required={true}
            />
            <Input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              name="contact_name"
              error={isNameError}
              errorText="Introduce un nombre válido"
              className="input"
              id="contact_name"
              required={true}
            />
            <Input
              type="text"
              placeholder="Apellido"
              value={surname}
              onChange={(e) => handleSurnameChange(e.target.value)}
              name="contact_surname"
              error={isSurnameError}
              errorText="Introduce un nombre válido"
              className="input"
              id="contact_surname"
              required={true}
            />
            <Input
              type="text"
              placeholder="Cargo en la empresa"
              value={position}
              onChange={(e) => handlePositionChange(e.target.value)}
              name="job_title"
              error={isPositionError}
              errorText="Introduce un cargo válido"
              className="input"
              id="job_title"              
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
              required={true}
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
              required={true}
            />
          </div>
          <div className="title__contact__info">
            <h4 className="subtitle__section__form">Consulta</h4>
          </div>
          <Select
            id="request_type"
            name="request_type"
            type="select"
            data={request}
            className="input"
            error={null && (!isTypeRequestError ? true : false)}
            errorText="Es necesario que selecciones un tipo de solicitud"
            value={typeRequest}
            onChange={(e) => handleTypeRequestChange(e.target.value)}
            labelDefault="Tipo de solicitud"
            required={true}
          />
          <TextArea
            type="mytext"
            placeholder="Consulta"
            rows={5}
            name="request"
            className="message"
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
            id="request"
          />
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
              text={termsAndConditions.HTMLstring}
              errorText="Debes aceptar los términos y condiciones"
            />
            <Checkbox
              onChange={(e) => handleNewsletterChange(e.target.checked)}
              type="checkbox"
              name="newsletter"
              id="newsletter-agree"
              value="yes"
              required=""
              className="test_class"
              text="Suscríbete al boletín de noticias B2B de MediaMarkt."
            />
            {/* <ReCaptcha
              size="normal"
              render="explicit"
              sitekey="6LdI4SUaAAAAAEPC4phCYBzZVLZg6tAz5nEbLO59"
              className={`recaptcha ${isValidated ? "enabled" : "disabled"}`}
              onChange={onChangeCaptcha}
            /> */}
            <HiddenFields />
            <AsyncButton
              type="submit"
              // disabled={!isAllValidated}
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
