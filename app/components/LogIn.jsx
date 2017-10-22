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

  renderInputs = () => {
    return Object.keys(this.state).map(inputType => {
      return <input
        key={inputType}
        type='text'
        placeholder={inputType.charAt(0).toUpperCase() + inputType.slice(1)}
        className={`${inputType}-input`}
        onChange={ (event) => this.handleChange(event, inputType ) }
      />;
    });
  }

  renderButton = () => {
    const { retrieveUser } = this.props;
    const isDisabled = (
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
          retrieveUser(this.state);
        }}
        onKeyDown={(event) => {
          const key = event.which;
          event.preventDefault();
          if (key === 13) {
            retrieveUser(this.state);
          }
        }}
      />
    );
  }


  render() {
    const { userStatus, loginError } = this.props;
    if (userStatus === true) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="login">
        <form>
          <div className='heading'>
            <h2>LOGIN</h2>
            <h4 className='error'>
              {loginError ? 'Email and Password do not match' : null}
            </h4>
          </div>
          {this.renderInputs()}
          {this.renderButton()}
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
