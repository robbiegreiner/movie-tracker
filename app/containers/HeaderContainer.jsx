import { connect } from 'react-redux';
import Header from '../components/Header';


const mapStateToProps =  (store) => ({ user: store.user });

const mapDispatchToProps = dispatch => null;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
