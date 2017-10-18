import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({ user }) => {
  let userBox;

  const userBoxContents = <div className='user-box'>
    <p className='user'>{user.name}</p>
    <Link to='/favorites'>View Favorites</Link>
    <button>Sign Out</button>
  </div>;

  (!user.name) ? userBox = <div>No User Logged In</div> : userBox = userBoxContents;


  return (
    <div className='header'>
      <h1>MovieTracker</h1>
      <Link to='/login'>Log In</Link>
      <Link to='/createuser'>Create Account</Link>
      {userBox}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object
};

export default Header;
