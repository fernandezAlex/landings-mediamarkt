import React from "react";
const currentURL = window.location;

const HiddenFields = () => {
  return (
    <div style={{display: "none"}}>
      <input
        type="text"
        id="url"
        name="url"
        value={currentURL}
        hidden=""
        // className="untouched is-positive"
      />
      <input
        type="text"
        id="country"
        name="country"
        value="ES"
        hidden=""
        // className="untouched is-positive"
      />
      <input
        type="text"
        id="language"
        name="language"
        value="es"
        hidden=""
        // className="untouched is-positive/"
      />
    </div>
  );
};

export default HiddenFields;