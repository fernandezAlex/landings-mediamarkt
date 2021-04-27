import React, { useState, useEffect } from "react";
import Input from "./Input";
import AsyncButton from "./AsyncButton";
import Checkbox from "./Checkbox"
import analytics from "../../helpers/analytics";
import axios from 'axios';

import {
  validateName,
  validateEmail,
  validatePhone,
} from "../validations/ValidateFunctions";

import Select from "./Select";
import {optionsTime} from '../../data/data'
import Swal from 'sweetalert2'
import {getDatosApi} from '../../services/database'

/* Data Form */

const dataAnalyticsForm = {
  event: "gaEvent",
  eventCategory: "Zurich_Formulario",
  eventAction: "Click",
  eventLabel: "Zurich_enviar_formulario",
};



const Form = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    email: "",
    franja_horaria: "",
    check1: false
  });

  const handleInputChange = (e)=>{
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

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

  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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
    value = (value.replaceAll(/\D/gm, ""));
    setPhone(value);
    const isOk = validatePhone(value);
    setIsPhoneError(!isOk);
  };
  
  const handleEmailChange = (value) => {
    setEmail(value);
    const isOk = validateEmail(value);
    setIsEmailError(!isOk);
  };
  
  const handleHourChange = (value) => {
    setHour(value);
    const isOk = value.length > 0 ? true : false;
    setIsHourError(isOk);
  };

  const handleTermsChange = (checked) => {
    setTerms(checked);
  };

  const handleNewsletterChange = (checked) => {
    setNewsletter(checked);
  };


  const reset = () => {
    setName("");setSurname("");setEmail("");setPhone("");setHour("");setTerms(false);setNewsletter(false);setIsSubmited(false);setIsLoading(false);
  }
  const isAllValidated = true
    // validateName(name) &&
    // validateName(surname) &&
    // validatePhone(phone) &&
    // validateEmail(email) &&
    // isHourError &&
    // terms;

  //  const news = async () => {
  //   await fetch("https://specials.mediamarkt.es/seguros-zurich/php/validacion-servidor2.php", {
  //     method: "POST",
  //     body: JSON.stringify(datos)
  //     })
  //     .then( 
  //       res => res.json()
  //     )
  //     .then( data => {
  //       console.log(data)
  //     })
  // }



// const tt = async function fecthData(){
// 			const respuesta = await axios({
// 				method: 'POST',
//         url: "https://specials.mediamarkt.es/seguros-zurich/php/validacion-servidor2.php",
//         data: datos.name
// 			})
// 			console.log(respuesta.data)
//     }


  const dispatchForm =  (e) => {
    e.preventDefault()
    if (isAllValidated) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmited(true);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Gracias ${datos.nombre}, tus datos han sido enviados`,
          timer: 2500
        })
      }, 1000);
      reset();

      axios.post('https://specials.mediamarkt.es/seguros-zurich/php/validacion-servidor2.php', {
        name: 'Fred'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



      // alert(name + surname + phone + email + hour + terms + newsletter);
      // analytics(
      //   dataAnalyticsForm.event,
      //   dataAnalyticsForm.eventCategory,
      //   dataAnalyticsForm.eventAction,
      //   dataAnalyticsForm.eventLabel
      // );
      console.log(datos);

     
      // const insertDatos = async (datosJson) => {
      //   const respuestaJson = await getDatosApi(datosJson);
      //   console.log(respuestaJson);
      // }

      // const respuesta = await fetch("https://specials.mediamarkt.es/seguros-zurich/php/index.php"
      // , {
      //   method: "POST",
      //   body: datosJson
      //  })

      //  const exitoso = await respuesta.json();
      //  if (exitoso){
      //   console.log('exitoso'+ exitoso)
      //  }else{
      //   console.log('error'+ exitoso)
      //  }

      // alert(name, surname, phone, email, hour, terms, newsletter);
    }

    return false;
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
          // action={actionState}
          onSubmit={dispatchForm}
          data-ajax="form-inline-franja-horaria"
          // onsubmit="validar_form(this);return false; event.preventDefault();"
          data-action=""
        >
          <div className="container__inputs__hide" style={{visibility: "hidden"}}>
          <input type="text" placeholder="Tipolead" name="id_sds" id="id_sds" value="YM66yW2ZEZUJYV"/>
          <input type="text" placeholder="Tipolead" name="type_lead" id="type_lead" value="MM-SQUARETRADE-C2C"/>
          <input type="text" placeholder="SourceLead" name="source_lead" id="source_lead" value="MM-SQUARETRADE"/>
          </div>

          <div className="inputs__container">
            <Input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              // value={name}
              // onChange={(e) => handleNameChange(e.target.value)}
              onChange={handleInputChange}
              error={isNameError}
              errorText="Introduce un nombre válido"
              className="input"
            />
            <Input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Apellidos"
              // value={surname}
              // onChange={(e) => handleSurnameChange(e.target.value)}
              onChange={handleInputChange}
              error={isSurnameError}
              errorText="Introduce un/os apellido/s válido/s"
              className="input"
            />
            <Input
              type="text"
              id="telefono"
              name="telefono"
              // onChange={(e) => handlePhoneChange(e.target.value)}
              onChange={handleInputChange}
              placeholder="Teléfono"
              error={isPhoneError}
              errorText="Introduce un teléfono válido"
              className="input"
              // value={phone}
              data-val-required="Required"
              maxlength="9"
            />
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Dirección de email"
              // value={email}
              // onChange={(e) => handleEmailChange(e.target.value.toLowerCase())}
              onChange={handleInputChange}
              error={isEmailError}
              errorText="Introduce un email válido"
              className="input"
            />
            <Select
              type="select"
              name="franja_horaria"
              id="franja_horaria"
              value={hour}
              // onChange={(e) => handleHourChange(e.target.value)}
              onChange={handleInputChange}
              error={!isHourError}
              errorText="Es necesario que selecciones una opción"
              className="input"
              data={optionsTime}
              labelDefault="Hora solicitada"
            />
          </div>
          <div className="footer__form">

            <Checkbox
              // onChange={(e) => handleTermsChange(e.target.checked)}
              onChange={handleInputChange}
              error={!terms}
              type="checkbox"
              name="check1"
              id="check1"
              // value="yes"
              // required=""
              className="test_class"
              // dataTag="termsAndConditionsAccept"
              text='He leído y acepto la <a class="link__terms" href="https://www.mediamarkt.es/es/legal/politica-de-privacidad" rel="noreferrer" target="_blank">Política de Privacidad</a> y las <a class="link__terms" href="https://www.mediamarkt.es/es/legal/condiciones-de-uso-de-la-web" rel="noreferrer" target="_blank">condiciones de uso</a>.'
              errorText="Debes aceptar los términos y condiciones"
            />
            {/* <Checkbox
              onChange={(e) => handleNewsletterChange(e.target.checked)}
              type="checkbox"
              name="newsletter-agree"
              id="newsletter-agree"
              value="mailingList"
              // required=""
              className="test_class"
              text='Deseo recibir comunicaciones comerciales de MEDIA MARKT y de terceras entidades en los términos previstos en la <a class="link__terms" href="https://www.mediamarkt.es/es/legal/politica-de-privacidad" rel="noreferrer" target="_blank">Política de Privacidad</a>.'
            /> */}
            <AsyncButton 
              type="submit"
              disabled={!isAllValidated}
              isAllValidated={isAllValidated}
              isSubmited={isSubmited}
              isLoading={isLoading}
              dataAnalytics="SUM"
              dataSumCategory="Interaccion"
              dataSumAction="Formulario Zurich"
              dataSumLabel="Enviar lead"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
