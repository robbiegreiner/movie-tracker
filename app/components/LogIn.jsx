import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

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
    const { userStatus, loginError } = this.props;
    if (userStatus === true) {
      return <Redirect to='/'/>;
    }
    const isDisabled = (
      this.state.email.length &&
      this.state.password.length
    ) ? false : true;

    return (
      <div className="login">
        <form>
          {/* <h2>Welcome to Movie Tracker</h2> */}
          <h2>LOGIN</h2>
          <h4 className='error'>
            {loginError ? 'Email and Password do not match' : null}
          </h4>
          <input
            type='text'
            placeholder='Email'
            className='email-input'
            onChange={ (event) => this.handleChange(event, 'email' ) }
          />
          <input
            type='password'
            placeholder='Password'
            className='password-input'
            onChange={ (event) => this.handleChange(event, 'password' ) }
          />
          <input
            className='form-button'
            type='submit'
            disabled={isDisabled}
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

Login.propTypes = {
  retrieveUser: PropTypes.func,
  userStatus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  loginError: PropTypes.bool
};

export default Login;
