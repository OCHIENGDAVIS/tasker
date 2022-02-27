import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  return (
    <header className="bg-blue-100   py-8 mb-16 w-full">
      <div className="w-3/4 m-auto flex">
        <div>
          <span>
            <Link to="/" className="text-xl">
              Tasker App
            </Link>
          </span>
        </div>
        <span className="flex-grow"></span>
        <div>
          <ul className="flex">
            {auth.accessToken ? (
              <li className="px-6  ">
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
