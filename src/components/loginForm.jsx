import React from "react";
import Joi, { errors } from "joi-browser";
import Form from "./form";

import * as authService from '../services/authService'

class LoginForm extends Form {
  username = React.createRef();
  password = React.createRef();

  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("نام کاربری"),
    password: Joi.string().required().label("کلمه عبور"),
  };

  doSubmit = async () => {
    // call server
    console.log("doSubmit");
    const { username: email, password } = this.state.data
    try {
      await authService.login(email, password)
      this.props.history.push('/')
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        this.setState({ errors })
      }
    }
  };

  render() {
    // const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

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
          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
