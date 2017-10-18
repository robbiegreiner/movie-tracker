import CreateUser from '../components/CreateUser.jsx';
import { connect } from 'react-redux';
import { fetchCreateUser } from '../actions';

const mapStateToProps =  store => ({
  userStatus: store.userStatus
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: userObj => {
    dispatch(fetchCreateUser(userObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
