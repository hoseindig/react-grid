import React from "react";
const Input = ({ name, label, value, onChange, type }) => {
  if (!type) type = "text";
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder={"Enter " + label}
      />
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
  );
};

export default Input;
