import React, { useState, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);


const Example = ({ error, errorText }) => {
  const [date, setDate] = useState(null);

//   const CustomButtonDate = forwardRef(({ value, onClick }, ref) => (
//     <button className="example-custom-input" onClick={onClick} ref={ref}>
//       {value}
//     </button>
//   ));
  console.log(date);
  return (
    <div className="container__input">
    <div className="container__datepicker">
        <DatePicker
          // isClearable
          locale="es"
          placeholderText="Fecha de nacimiento"
          selected={date}
          dateFormat="dd - MMMM - yyyy"
          onChange={(date) => setDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
        //   yearDropdownItemNumber={50}
          dropdownMode="scroll"
          className="input"
          // customInput={<CustomButtonDate />}
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

export default Example;
