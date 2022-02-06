import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { toast } from "react-toastify";


import * as userService from '../services/userService'

class Register extends Form {
  state = {
    data: {
      username: "aa@aa.cc",
      name: "aa",
      password: "11111",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("نام کاربری"),
    password: Joi.string().min(5).required().label("کلمه عبور"),
    name: Joi.string().required().label("نام"),
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data)
    } catch (ex) {
      debugger
      if (ex.response && ex.response.status === 400) {
        toast.error(this.state.errors)

        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        this.setState({ errors })

      }
    }
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
