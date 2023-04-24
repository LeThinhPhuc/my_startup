import { useState, useEffect, createContext, useReducer , useContext } from "react";
export const AuthContext = createContext();
import axiosInstance from "../services/axiosInstance";
import { CareersContext } from "./CareersContext";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken") && true,
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {

    case 'LOGIN': {
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        ...payload,
      };
    }

    case 'TOKEN_EXPIRED':
      console.log("token taipham");
      return {
        ...state,
        isAuthenticated: false,
        accessToken: localStorage.getItem("accessToken"),
      };

    default:
      return state;
  }
};

const AuthState = ({children}) => {

  const { employee , errorCandidate } = useContext(CareersContext)
  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log("errorCandidate", errorCandidate);

  
  // const refetchToken = () => {

  //     console.log('here');
  //     delete axiosInstance.defaults.headers.common["Authorization"];

  //     localStorage.removeItem("accessToken");

  //     dispatch({
  //       type: 'TOKEN_EXPIRED',
  //     })

  //     window.location.href = '/login';

  //     }

  // useEffect(() => {
  //   if (errorCandidate) {
  //     refetchToken();
  //   }
  // }, []);
  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )};
export default AuthState;