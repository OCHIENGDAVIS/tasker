import axios from 'axios';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';

export const loginUser = (userData) => {
  return async (dispath) => {
    try {
      const { data } = await axios.post('/api/personnel/login', userData);
      const { accessToken } = data;
      if (accessToken) {
        // set the token in the local storage
        dispath({
          type: LOGIN_USER_SUCCESS,
          payload: accessToken,
        });
        // navigate to login
      }
    } catch (e) {
      dispath({
        type: LOGIN_USER_FAIL,
        payload: 'something went wrong!, invalid username or password',
      });
    }
  };
};
