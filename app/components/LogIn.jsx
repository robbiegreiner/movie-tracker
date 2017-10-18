import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }



  render() {
    return (
      <div>
        <form>
          <h2>Welcome to MovieTracker</h2>
          <h2>LOGIN</h2>
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <input
            className="form-button"
            type="submit"
          />
        </form>
      </div>
    );
  }
}
