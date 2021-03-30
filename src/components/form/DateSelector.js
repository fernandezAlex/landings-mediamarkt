import React, { useState } from "react";
import DatePicker,  { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)



const DateSelector = () => {
  const [startDate, setStartDate] = useState();
  // const [startDate, setStartDate] = useState();
  return (
    <>
    <DatePicker 
      placeholderText="Fecha de nacimiento"
      locale="es"
      selected={startDate}
      onChange={date => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      dateFormat="dd/MM/yyyy"
      />
    </>
  );
};
 export default DateSelector;