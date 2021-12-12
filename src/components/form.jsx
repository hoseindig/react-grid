import React from "react";
import Joi from "joi-browser";
import Input from "./input";
import Combo from "./combo";

class From extends React.Component {
  state = {
    data: {},
    error: {},
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    let { error } = Joi.validate(obj, schema);
    return !error ? null : error.details[0].message;
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);

    if (!result || !result.error) return null;
    const errors = {};
    const { details } = result.error;

    for (let item of details) errors[item.path[0]] = item.message;

    console.log(errors);

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // do more
    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    // debugger
    const errors = { ...this.state.errors };
    errors[input.name] = this.validateProperty(input);
    this.setState({ errors: errors ? errors : {} });
  };
  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        type={type}
      />
    );
  };
  renderCombo=(label, name, value, onChange,options )=>{
    return <Combo
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    options={options} 
  />
  }
}

export default From;
