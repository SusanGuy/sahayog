import axios from "../../axios";
import history from "../history";
import { setAuthToken } from "../../utils";
import { USER_LOADED, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT } from "../type";
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      const submitForm = { email, password };
      const {
        data: { token },
      } = await axios.post("/users/login", submitForm);
      dispatch(authSuccess(token));
      dispatch(loadUser());
      history.push("/");
    } catch {
      console.log("Dhoka diyo");
    }
  };
};
export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      const submitForm = { name, email, password };
      const {
        data: { token },
      } = await axios.post("/users/signup", submitForm);
      dispatch(authSuccess(token));
      dispatch(loadUser());
      history.push("/");
    } catch {
      console.log("Dhoka diyo");
    }
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    try {
      setAuthToken(localStorage.token);
      const { data } = await axios.get("/users/me");
      dispatch(userLoaded(localStorage.token, data));
    } catch (err) {
      console.log("Feri Dhoka diyo");
    }
  };
};

const userLoaded = (token, user) => {
  return {
    type: USER_LOADED,
    payload: { token, user },
  };
};

const authStart = () => {
  return {
    type: AUTH_START,
  };
};

const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: { token },
  };
};

const logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};
