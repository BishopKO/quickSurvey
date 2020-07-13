import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { faUserEdit, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TweenMax, Linear } from 'gsap';

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;   
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-top: 50px;
  min-height: 300px; 
`;

const StyledButtonsWrapper = styled.div`
  margin-top: 0;  
  height: 40px;
  width: 100%;  
`;

const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: 40px;
  border: none;
  font-family: inherit;
  font-size: 16px;  
  color: lightgray;   
  
  :focus{
    border: none;
    outline: none;
  } 
  
  ${({ login }) => login && css`
    background: ${({ theme }) => theme.buttons.green};    
  `}  
  
  ${({ register }) => register && css`  
    background: ${({ theme }) => theme.buttons.blue};    
  `};  
  
  ${({ active }) => active && css`
    color:black;
`}
  
`;

const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 100px;
  width: 100%;
`;

const StyledParagraph = styled.p`
  font-family: 'Audiowide', cursive;
  height: 24px;
`;

const StyledForm = styled.form` ;
  margin-top: 20px;
  padding: 10px;
  width:  100%;
  min-height: 110px;  
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;  
  font-size: inherit;
  background: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 10px;  
  
  :focus{
    outline: none;
  }
`;


const LoginRegister = () => {
  const [mode, setMode] = useState('register');

  const showAnimation = () => {
    const form = document.querySelector('#loginRegisterForm');
    TweenMax.to(form, 0.5, { height: '160px' }).then(setMode('register'));
  };

  const hideAnimation = () => {
    const form = document.querySelector('#loginRegisterForm');
    TweenMax.to(form, 0.5, { height: '110px' }).then(setMode('login'));
  };

  const handleClick = (value) => {
    console.log(value);
    if (value === 'login') {
      hideAnimation();
    } else {
      showAnimation();
    }
  };

  return (
    <StyledMainWrapper>
      <StyledButtonsWrapper>
        <StyledButton login active={mode === 'login'} width="50%"
                      onClick={() => handleClick('login')}>Login</StyledButton>
        <StyledButton register active={mode === 'register'} width="50%"
                      onClick={() => handleClick('register')}>Register</StyledButton>
      </StyledButtonsWrapper>
      <StyledLogoWrapper>
        <StyledParagraph>
          quickSurvey
        </StyledParagraph>
        {mode === 'register' && <FontAwesomeIcon icon={faUserEdit}/>}
        {mode === 'login' && <FontAwesomeIcon icon={faUserAlt}/>}
      </StyledLogoWrapper>
      <StyledForm id="loginRegisterForm">
        <StyledInput placeholder="e-mail"/>
        <StyledInput type="password" placeholder="Password"/>
        <StyledInput type="password" placeholder="Confirm password"/>
      </StyledForm>
      <StyledButton width='100%' login>Register</StyledButton>
    </StyledMainWrapper>
  );
};

export default LoginRegister;
