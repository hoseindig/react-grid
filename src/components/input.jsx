import React from "react";
function info(type) {
  if (type === "email") return "We'll never share your email with anyone else.";
}
const Input = ({ name, label, value, onChange, type,error }) => {
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
      {error && <div className="alert alert-danger">{error}</div>}
      <small id="emailHelp" className="form-text text-muted">
        {info(type)}
        {/* We'll never share your email with anyone else. */}
      </small>
    </div>
  );
};

export default Input;
