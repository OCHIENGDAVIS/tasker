import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { registerUser } from '../actions';

const Register = ({ auth, registerUser }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      phone.trim() === '' ||
      password.trim() === '' ||
      email.trim() === '' ||
      firstname.trim() === '' ||
      lastname.trim() === ''
    ) {
      alert('All fields are required, Please fill all fields');
    } else {
      registerUser({ phone, password, email, firstname, lastname });
    }
  };
  if (auth.success) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-full mb-8">
      <div className="w-4/5 m-auto">
        <h1 className="font-bold text-2xl">Register Form</h1>
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
          <div className="w-full mt-8">
            <h4>Email</h4>
            <input
              className="border-2 border-gray-600 w-full p-2  rounded-lg"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="w-full mt-8">
            <h4>First Name</h4>
            <input
              className="border-2 border-gray-600 w-full p-2  rounded-lg"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="w-full mt-8">
            <h4>Last Name</h4>
            <input
              className="border-2 border-gray-600 w-full p-2  rounded-lg"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              type="text"
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
              Register
            </button>
          </div>
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
export default connect(mapStateToProps, { registerUser })(Register);
