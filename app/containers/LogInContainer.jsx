import Login from '../components/LogIn.jsx';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


const mapStateToProps =  store => ({
  userStatus: store.userStatus,
  loginError: store.loginError
});

const mapDispatchToProps = (dispatch) => ({
  retrieveUser: userObj => {
    dispatch(fetchUser(userObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
