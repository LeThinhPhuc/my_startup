import { createContext, useReducer , useContext } from "react";
export const AuthContext = createContext();
import { CareersContext } from "./CareersContext";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken") && true,
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    //////////
    case 'LOGIN': {
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

const AuthState = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

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