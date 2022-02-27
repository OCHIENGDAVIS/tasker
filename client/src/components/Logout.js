import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions';

const Logout = ({ logoutUser }) => {
  logoutUser();
  return <Navigate to="/" />;
};
export default connect(null, { logoutUser })(Logout);
