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
      password: '',
      error: ''
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

  renderInputs = () => {
    const inputTypes = Object.keys(this.state);
    inputTypes.pop();
    return inputTypes.map(inputType => {
      return <input
        key={inputType}
        type='text'
        placeholder={inputType.charAt(0).toUpperCase() + inputType.slice(1)}
        className={`${inputType}-input`}
        onChange={ (event) => this.handleChange(event, inputType ) }
      />;
    });
  }

  validateEmail = () => {
    const { createNewUser } = this.props;
    validator.validate(this.state.email) ?
      createNewUser(this.state) :
      this.setState({ error: 'Please submit a valid email address.' });
  }

  validatePwd = () => {
    this.state.password.length >= 8 ? this.validateEmail() :
      this.setState({ error: 'Your password must be eight characters long.' });
  }

  renderButton = () => {
    const isDisabled = (
      this.state.name.length &&
      this.state.email.length &&
      this.state.password.length
    ) ? false : true;

    return (
      <input
        className='form-button'
        type='submit'
        disabled={isDisabled}
        onClick={(event) => {
          event.preventDefault();
          this.validatePwd();
        }}
      />
    );
  };

  render() {
    const { userStatus, createUserError } = this.props;

    if (userStatus === true) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="login">
        <form>
          <div className='heading'>
            <h2>Create Account</h2>
            <h4 className='error'>
              { createUserError ? 'Email already exists.' : this.state.error }
            </h4>
          </div>
          {this.renderInputs()}
          {this.renderButton()}
        </form>
      </div>
    );
  }
}

CreateUser.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array,
  createNewUser: PropTypes.func,
  createUserError: PropTypes.bool,
  userStatus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default CreateUser;
