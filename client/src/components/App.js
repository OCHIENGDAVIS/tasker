import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
