import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);


const DateSelector = ({ error, errorText, value, onChange }) => {
  const [date, setDate] = useState();
console.log(date)
  return (
    <div className="container__input">
    <div className="container__datepicker">
        <DatePicker
          locale="es"
          placeholderText="Fecha de nacimiento"
          selected={date}
          value={value}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDate(date)}
          onChangeRaw={onChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          className="input"
        />
      </div>
          <div className="container__datepicker__span">
              <span className="span__required">*</span>
          </div>
    
    <div className="input__error">
        <span
          className="text_error"
          dangerouslySetInnerHTML={{ __html: error ? errorText : null }}
        />
      </div>
    </div>
  );
};

export default DateSelector;


// const checkAdultAge = (birthdayDate) => {
//   let today = new Date();
//   let birthday = new Date(birthdayDate);
//   let age = today.getFullYear() - birthday.getFullYear();
//   let m = today.getMonth() - birthday.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
//     age--;
//   }
//   return age;
// }
