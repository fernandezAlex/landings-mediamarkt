import React from 'react'

const Option = ({
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
        <div>
            <div className="container__checkbox_options">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
        className={`button ${value? "active" : "disable"}`}
          onChange={onChange}
        />
      </div>
        </div>
    )
}


export default Option