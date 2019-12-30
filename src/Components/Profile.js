import React, { Component } from "react";
import store from "../store";

class Profile extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    // store subscription
    store.subscribe(() => {
      this.setState({ username: store.getState().username });
    });
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        Hi, {this.state.username}
      </div>
    );
  }
}

export default Profile;
