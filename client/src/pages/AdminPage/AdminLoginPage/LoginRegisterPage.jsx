import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import userAdminService from '../../../services/userAdminService';
import { AuthContext } from '../../../Context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';

const LoginRegisterPage = () => {
  const { dispatch } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  const onLoginSubmit = async (values) => {
    console.log("Submit form in Login Page", { values });

    try {
      const loginResponse = await userAdminService.loginAdmin(values)
      
      console.log("Login Success", loginResponse);

      // localStorage.setItem("accessToken", loginResponse.data.accessToken);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${loginResponse.data.accessToken}`

      dispatch({
        type: 'LOGIN',
        payload: loginResponse?.data,
      });

      navigate("/");
      
    } catch (error) {
      setLoginError(error?.response.data.message);
      setTimeout(() => {
        setLoginError('');
      }, 3000)
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex place-content-center place-items-center">  {/* PAGE-BACKGROUND */}

      <div className="max-w-sm min-h-[400px] w-3/5 h-3/5 bg-gradient-to-r to-[#00c6fb] from-[#005bea] rounded-lg border shadow-blue-500/50 shadow-lg flex-col flex
      place-content-center place-items-center py-5 relative"> {/* FORM-CONTAINER */}
        
        <div className="flex flex-row place-content-center w-11/12 h-auto absolute top-5"> {/* FORM-SWITCHER */}
          <button /* LOGIN-BUTTON */
            className={showLogin ? 'active w-36 h-10 bg-white text-blue-500 rounded-md font-semibold' : 'text-white w-36 h-10 font-semibold'}
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <button /* REGISTER-BUTTON */
            className={!showLogin ? 'active w-36 h-10 bg-white text-blue-500 rounded-md font-semibold' : 'text-white w-36 h-10 font-semibold'}
            onClick={handleRegisterClick}
          >
            REGISTER
          </button>
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        {showLogin ? (
          <LoginForm onSubmit={onLoginSubmit} />
        ) : (
          <RegisterForm/>
        )}

        <div className="flex place-content-center place-items-center absolute bottom-5">
          {showLogin ? (
            <div>
              Don't have an account?{' '}
              <button className="text-white hover:underline" onClick={handleRegisterClick}>Register</button>
            </div>
          ) : (
            <div>
              Already have an account?{' '}
              <button className="text-white hover:underline" onClick={handleLoginClick}>Log in</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;