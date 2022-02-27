import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

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
    default:
      return state;
  }
};

export default authReducer;
