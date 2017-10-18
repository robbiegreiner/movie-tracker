import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event, type) {
    let value = event.target.value;
    if (type === 'email') {
      value = value.toLowerCase();
    }
    this.setState({
      [type]: value
    });
  }


  render() {
    if (this.props.userStatus === true) {
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <form>
          <h2>Welcome to Movie Tracker</h2>
          <h2>LOGIN</h2>
          <input
            type='text'
            placeholder='Email'
            onChange={ (event) => this.handleChange(event, 'email' ) }
          />
          <input
            type='password'
            placeholder='Password'
            onChange={ (event) => this.handleChange(event, 'password' ) }
          />
          <input
            className='form-button'
            type='submit'
            onClick={
              (event) => {
                event.preventDefault();
                //pass state to action that makes fetch post request to get user back
                const userObj = Object.assign({}, this.state);
                this.props.retrieveUser(userObj);
              }
            }
          />
        </form>
      </div>
    );
  }
}

export default Login;
