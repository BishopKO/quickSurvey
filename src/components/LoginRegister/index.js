import React, { useState, useReducer, useEffect } from 'react';
import { validateLogin, validateRegister } from './utils/validate';
import { faUserEdit, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweenMax } from 'gsap';
import {
  StyledMainWrapper,
  StyledButtonsWrapper,
  StyledButton,
  StyledLogoWrapper,
  StyledInput,
  StyledForm,
  StyledParagraph,
} from './LoginRegister.styles';

import store from 'store';


const LoginRegister = () => {
  const [mode, setMode] = useState('login');
  const [errors, setErrors] = useState({});


  useEffect(() => {
    store.dispatch({ type: 'janex', payload: 'cos tam' });
  });

  const initState = {
    email: '',
    password1: '',
    password2: '',
  };

  const formReducer = (state, { field, value }) => {
    console.log(field, value);
    return {
      ...state,
      [field]: value,
    };
  };

  const [state, dispatch] = useReducer(formReducer, initState);

  const showAnimation = () => {
    const form = document.querySelector('#loginRegisterForm');
    TweenMax.to(form, 0.3, { height: '170px' }).then(setMode('register'));
  };

  const hideAnimation = () => {
    const form = document.querySelector('#loginRegisterForm');
    TweenMax.to(form, 0.3, { height: '110px' }).then(setMode('login'));
  };

  const handleSetFormData = (element) => {
    const { name, value } = element.target;
    dispatch({ field: name, value: value });
  };

  const handleClickMode = (value) => {
    if (value === 'login') {
      hideAnimation();
    } else {
      showAnimation();
    }
  };

  const handleValidate = () => {
    if (mode === 'login') {
      setErrors(validateLogin(state));
    } else if (mode === 'register') {
      setErrors(validateRegister(state));
    }
  };

  const checkFieldError = (field) => {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).includes(field);
    }
  };

  return (
    <StyledMainWrapper>
      <StyledButtonsWrapper>
        <StyledButton login active={mode === 'login'} width="50%"
                      onClick={() => handleClickMode('login')}>Login</StyledButton>
        <StyledButton register active={mode === 'register'} width="50%"
                      onClick={() => handleClickMode('register')}>Register</StyledButton>
      </StyledButtonsWrapper>
      <StyledLogoWrapper>
        <StyledParagraph>
          quickSurvey
        </StyledParagraph>
        {mode === 'register' && <FontAwesomeIcon icon={faUserEdit}/>}
        {mode === 'login' && <FontAwesomeIcon icon={faUserAlt}/>}
      </StyledLogoWrapper>
      <StyledForm id="loginRegisterForm">
        <StyledInput error={checkFieldError('email')} placeholder="e-mail" name="email" value={state.email}
                     onChange={(element) => handleSetFormData(element)}/>
        <StyledInput error={checkFieldError('password1')} type="password" name="password1" value={state.password1}
                     onChange={(element) => handleSetFormData(element)}
                     placeholder="Password"/>
        <StyledInput error={checkFieldError('password2')} type="password" name="password2" value={state.password2}
                     onChange={(element) => handleSetFormData(element)}
                     placeholder="Confirm password"/>
      </StyledForm>
      <StyledButton width='100%'
                    login
                    onClick={handleValidate}>{mode === 'register' ? 'Register' : 'Login'} </StyledButton>
    </StyledMainWrapper>
  );
};

export default LoginRegister;
