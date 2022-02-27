import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import { loginUser } from '../actions';

const Login = ({ loginUser, auth }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim() === '' || password.trim() === '') {
      alert('Please fill in the username and the password');
    } else {
      loginUser({ phone, password });
    }
  };
  if (auth.accessToken) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="w-full mb-8">
      <div className="w-4/5 m-auto">
        <h1 className="font-bold text-2xl">Login Form</h1>
        <span className="text-red-800">{auth.error ? auth.error : null}</span>
        <form className="">
          <div className="w-full mt-8">
            <h4>Phone Number</h4>
            <input
              className="border-2 border-gray-600 w-full p-2  rounded-lg"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone"
              type="number"
            />
          </div>
          <div className="w-full mt-8 mb-8">
            <h4>Password</h4>
            <input
              className="border-2 border-gray-600 w-full p-2 rounded-lg"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
          </div>
          <div>
            <button
              className="bg-blue-200 py-2 px-6 font-bold rounded-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className=" mt-2">
            Don't' have an account?
            <span className="text-blue-700">
              <Link to="/register">register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
