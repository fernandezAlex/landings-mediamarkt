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
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          required={required}
          className={className}
          onChange={onChange}
        />
        <label for={id} className="label__checkbox">
          {/* <a href={href} target={target} dataTag={dataTag} rel={rel}> */}
          <span
            // style="vertical-align: inherit;"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {/* {text}</font> */}
          {/* </a> */}
        </label>
        <div className="input__error">
          <span
            className="text_error"
            dangerouslySetInnerHTML={{ __html: error ? errorText : null }}
            // className={`error__terms ${!terms ? '' : 'disabled'}`}
          />
        </div>
      </div>
    </>
  );
};

export default Checkbox;
