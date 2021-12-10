import React from "react";
import Input from "./input";
import Joi from "joi-browser";

class LoginForm extends React.Component {
  username = React.createRef();
  password = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("نام کاربری"),
    password: Joi.string().required().label("کلمه عبور"),
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    let { error } = Joi.validate(obj, schema);
    return !error ? null : error.details[0].message;
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, option);

    if (!result || !result.error) return null;
    // debugger;
    const errors = {}; //this.state.error
    const { details } = result.error;

    for (let item of details) errors[item.path[0]] = item.message;

    console.log(errors);

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    // debugger
    const errors = { ...this.state.errors };
    errors[input.name] = this.validateProperty(input);
    this.setState({ errors: errors ? errors : {} });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    // do more
    const errors = this.validate();
    this.setState({ errors: errors ? errors : {} });
    console.log(errors);
    if (errors) return;
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="UserName"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
