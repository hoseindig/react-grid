import React from "react";
import Joi from "joi-browser";
import Form from "./form";
class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("نام کاربری"),
    password: Joi.string().min(5).required().label("کلمه عبور"),
    name: Joi.string().required().label("نام"),
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInpurt("username", "UserName")}
          {this.renderInpurt("password", "Password", "password")}
          {this.renderInpurt("name", "Name")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
