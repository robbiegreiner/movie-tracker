import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({ user, handleSignOut }) => {
  let userBox;

  const userContents = (
    <div className='user-box'>
      <p className='user'>Welcome, {user.name}!</p>
      <div className='two-user-btns'>
        <Link className='favorites-link' to='/favorites'>View Favorites</Link>
        <Link
          className='signout'
          to='/login'
          onClick={() => handleSignOut()}>
          Sign Out
        </Link>
      </div>
    </div>);

  const noUserContents =
  <div className='no-user-box'>
    <Link className='login-link' to='/login'>Log In</Link>
    <Link className='login-link' to='/createuser'>Create Account</Link>
  </div>;

  (!user.name) ? userBox = noUserContents : userBox = userContents;

  return (
    <div className='header'>
      <Link to='/'>
        <h1>
          <span className='header-one'>Movie</span>
          <span className='header-two'>Tracker</span>
        </h1>
      </Link>
      {userBox}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  handleSignOut: PropTypes.func
};

export default Header;
