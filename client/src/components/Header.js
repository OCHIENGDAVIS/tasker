import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log(auth);
  return (
    <header className="bg-blue-100 flex px-6 py-4 mb-16">
      <div>
        <Link to="/">Tasker App</Link>
      </div>
      <span className="flex-grow"></span>
      <div>
        <ul className="flex">
          {auth.accessToken ? (
            <li className="px-6 ">
              <Link to="/logout"> Logout </Link>
            </li>
          ) : (
            <Fragment>
              <li className="px-6 ">
                <Link to="/login"> Login </Link>
              </li>
              <li className="px-6 ">
                <Link to="/register"> Register </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Header);
