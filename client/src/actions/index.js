import axios from 'axios';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LOGOUT,
  ALL_TASKS,
  ALL_TASKS_FAIL,
} from './types';

export const loginUser = (userData) => {
  return async (dispath) => {
    try {
      const { data } = await axios.post('/api/personnel/login', userData);
      const { accessToken } = data;
      if (accessToken) {
        // set the token in the local storage
        localStorage.setItem('accessToken', accessToken);
        dispath({
          type: LOGIN_USER_SUCCESS,
          payload: accessToken,
        });
      }
    } catch (e) {
      dispath({
        type: LOGIN_USER_FAIL,
        payload: 'something went wrong!, invalid username or password',
      });
    }
  };
};

export const registerUser = (userData) => {
  return async (dispath) => {
    try {
      const { data } = await axios.post('/api/personnel/register', userData);
      const { email } = data;
      if (email) {
        dispath({
          type: REGISTER_USER_SUCCESS,
          payload: email,
        });
      }
    } catch (e) {
      dispath({
        type: REGISTER_USER_FAIL,
        payload:
          'Something is wrong with the information you are providing, (email MUST be unique)',
      });
    }
  };
};

export const logoutUser = () => {
  return (dispath) => {
    // TODO => invalidate token on the server
    localStorage.removeItem('accessToken');
    dispath({
      type: USER_LOGOUT,
    });
  };
};

export const getAllTasks = () => {
  return async (dispath) => {
    try {
      const { data } = await axios.get('/api/tasks/assigned', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      dispath({
        type: ALL_TASKS,
        payload: data,
      });
    } catch (e) {
      dispath({
        type: ALL_TASKS_FAIL,
        payload: 'something went wrong!, ould not get all tasks',
      });
    }
  };
};
