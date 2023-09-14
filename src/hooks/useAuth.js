'use client'
import { useReducer } from 'react';
// import { AUTH_ACTIONS, AUTH_API_PATHS } from '../constants/auth';
import axios from 'axios';
// import { AUTH_API } from '../config/api';
import { AuthLogin, AuthRegister } from '../api/authApi';

export const AUTH_ACTIONS = {
  AUTHORIZE: 'AUTHORIZE',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem('e-commerce-token') : null,
  error: null,
  isLoading: false,
};
const reduce = (state, action) => {
  switch (action.type) {

    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      console.log('first')
      console.log(action.payload)
      const token =
        action?.payload || state?.token
      localStorage.setItem('e-commerce-token', token);

      return {
        ...state,
        token: token,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      typeof window !== "undefined" && localStorage.removeItem('e-commerce-token')


      return {
        token: null,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || typeof window !== "undefined" ? localStorage.getItem('e-commerce-token') : null;
  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const data = await AuthLogin(body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data?.token || data.token });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await AuthRegister(body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data?.token || data.token });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };



  return {
    ...state,
    login,
    signup,
    logout,
  };
};

export default useAuth;