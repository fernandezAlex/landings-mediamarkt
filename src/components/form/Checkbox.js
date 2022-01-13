import React from "react";

const Checkbox = ({
  type,
  name,
  id,
  value,
  required,
  className,
  href,
  target,
  dataTag,
  onChange,
  text,
  error,
  errorText,
  rel,
}) => {
  return (
    <>
      <div className="container__checkbox">
        <label for={id} className="label__checkbox">
          <input
            type={type}
            name={name}
            id={id}
            value={value}
            required={required}
            className={className}
            onChange={onChange}
          />
          <span  
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </label>
        <div className="input__error">
          <span
            className="text_error"
            dangerouslySetInnerHTML={{ __html: error ? errorText : null }}
          />
        </div>
      </div>
    </>
  );
};

export default Checkbox;