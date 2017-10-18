import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

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

    if (userStatus === true) {
      return <Redirect to='/'/>;
    }
// event.target.getAttribute('data-type')
    return (
      <div>
        <form>
          <h2>Welcome to Movie Tracker</h2>
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
            onClick={
              (event) => {
                event.preventDefault();
                //pass state to action that makes fetch post request to get user back
                const userObj = Object.assign({}, this.state);
                createNewUser(userObj);
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
