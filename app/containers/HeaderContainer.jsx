import { connect } from 'react-redux';
import Header from '../components/Header';
import { signOutUser } from '../actions';


const mapStateToProps =  (store) => ({
  user: store.user,
  userStatus: store.userStatus
});

const mapDispatchToProps = dispatch => {
  return {
    handleSignOut: () => dispatch(signOutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
