import React from "react";

const Button = ({
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
    <div className="container__button">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={`button ${value ? "active" : "disable"}`}
        onChange={onChange}
        label={name}
      />
    </div>
  );
};

export default Button;
