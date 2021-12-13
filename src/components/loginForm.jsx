import React from "react";
import Joi from "joi-browser";
import Form from "./form";

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

  doSubmit = () => {
    // call server
    console.log("doSubmit");
  };

  render() {
    // const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "UserName")}
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
