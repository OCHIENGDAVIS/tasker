import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LOGOUT,
} from '../actions/types';

const defaultState = {
  accessToken: null,
  error: null,
};

const authReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, accessToken: payload, error: null };
    case LOGIN_USER_FAIL:
      return { ...state, accessToken: null, error: payload };
    case REGISTER_USER_SUCCESS:
      console.log(payload);
      return { ...state, accessToken: null, error: null, success: true };
    case REGISTER_USER_FAIL:
      return { ...state, accessToken: null, error: payload };
    case USER_LOGOUT:
      return { accessToken: null, error: null, success: false };
    default:
      return state;
  }
};

export default authReducer;
