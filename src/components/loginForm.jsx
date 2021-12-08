import React from "react";
import Input from "./input";
class LoginForm extends React.Component {
  username = React.createRef();
  password = React.createRef();

  state = {
    account: {
      userName: "",
      password: "",
    },
    error:{
        
    }
  };
  //   componentDidMount(){
  //     this.username.current.focus()
  //   }
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    const user = {
      uname: this.username.current.value,
      password: this.password.current.value,
    };

    console.log(user);
    // do more
  };
  render() {
    const account = this.state.account;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="userName"
            label="UserName"
            type="email"
            value={account.userName}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />

          {/* <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              ref={this.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div> */}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
