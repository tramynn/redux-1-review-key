import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_USERNAME } from "../store";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = () => {
    // action builder
    let action = {
      type: UPDATE_USERNAME,
      payload: this.state.username
    };
    // dispatch
    store.dispatch(action);
    console.log(this.state.username);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome Back!</h1>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Link to="/profile">
          <button onClick={this.handleLogin}>Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;
