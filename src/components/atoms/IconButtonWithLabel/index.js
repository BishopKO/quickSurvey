import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  position: relative;
  display: flex;
  height: 12px;
  width: ${({ width }) => width || '40px'};    
  flex-direction: row;
  align-items: center;
  font-family: inherit;
  border: none;
  border-radius: 3px;
  font-size: inherit;
  margin-right: 3px;    
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-size: 7px;
  background-position: 3px; 
  
  ::after{
    content: "${({ label }) => `${label}`}";
    font-family: inherit;
    position: absolute;
    right: 3px;  
  }
    
  :focus{
    outline: none; 
  }
  
  :hover{
    cursor: pointer;
  }  
  
  &.active{
    background: ${({ theme }) => theme.lightblue};
    background-image: ${({ icon }) => `url(${icon})`};  
    background-repeat: no-repeat;
    background-size: 8px;
    background-position: 3px;  
    border-radius: 3px;
    color: black;
  };  
`;


export default StyledButton;
