import React from "react";

const Input = ({ type, name, label, domElement, valor }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        ref={domElement}
        style={{ maxWidth: "400px" }}
        id={name}
        type={type}
        value={valor}
      />
    </>
  );
};

export default Input;
