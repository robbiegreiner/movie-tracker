import { connect } from 'react-redux';
import Header from '../components/Header';


const mapStateToProps =  (store) => ({ user: store.user });



export default connect(mapStateToProps)(Header);
