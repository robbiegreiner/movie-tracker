import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import validator from 'email-validator';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const { userStatus, createNewUser, createUserError } = this.props;
    const isDisabled = (
      this.state.name.length &&
      this.state.email.length &&
      this.state.password.length
    ) ? false : true;

    if (userStatus === true) {
      return <Redirect to='/'/>;
    }
    const validateEmail = () => {
      validator.validate(this.state.email) ?
        createNewUser(this.state) :
        alert('Please submit a valid email address.');
    };
    const validatePwd = () => {
      this.state.password.length >= 8 ? validateEmail() :
        alert('Your password must be eight characters long.');
    };
// event.target.getAttribute('data-type')
    return (
      <div className="login">
        <form>
          {/* <h2>Welcome to Movie Tracker</h2> */}
          <h2>Create Account</h2>
          <h4 className='error'>
            { createUserError ? 'email already exists' : null }
          </h4>
          <input
            type='text'
            placeholder='Name'
            data-type='name'
            className='name-input'
            onChange={ (event) => this.handleChange(event, 'name' ) }
          />
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
                validatePwd();
              }
            }
          />
        </form>
      </div>
    );
  }
}

CreateUser.propTypes = {
  createNewUser: PropTypes.func,
  userStatus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default CreateUser;

CreateUser.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array,
  userStatus: PropTypes.string,
  createNewUser: PropTypes.func,
  createUserError: PropTypes.bool
};
