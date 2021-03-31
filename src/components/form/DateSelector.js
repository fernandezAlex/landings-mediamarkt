import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);


const DateSelector = ({ error, errorText, value, onChange, name }) => {
  return (
    <div className="container__input">
    <div className="container__datepicker">
        <DatePicker
          name="birthDate"
          locale="es"
          placeholderText="Fecha de nacimiento"
          selected={value}
          dateFormat="yyyy-MM-dd"
          onChange={onChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          className="input"
          value={value}
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
