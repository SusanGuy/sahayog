import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  USER_LOADED,
} from "../type";
const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: {},
        ...payload,
      };

    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        token: null,
        user: null,
        error: {},
        loading: false,
      };
    }

    case USER_LOADED:
      return {
        ...state,
        loading: false,
        error: {},
        ...payload,
      };

    default:
      return state;
  }
};

export default authReducer;
