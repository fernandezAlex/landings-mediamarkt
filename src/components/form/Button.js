import React from 'react'

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
        <button
          type={type}
          name={name}
          id={id}
          value={value}
            className={`button ${value? "active" : "disable"}`}
          onChange={onChange}
        />
      </div>
        
    )
}


export default Option