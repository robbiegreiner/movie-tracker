import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event, type) {
    this.setState({
      [type]: event.target.value
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <h2>Welcome to Movie Tracker</h2>
          <h2>LOGIN</h2>
          <input
            type='text'
            placeholder='Email'
            value={ email }
            onChange={ (event) => this.handleChange(event, 'email' ) }
          />
          <input
            type='password'
            placeholder='Password'
            value={ password }
            onChange={ (event) => this.handleChange(event, 'password' ) }
          />
          <input
            className='form-button'
            type='submit'
          />
        </form>
      </div>
    );
  }
}
