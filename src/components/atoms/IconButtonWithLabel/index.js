import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  height: 20px;
  width: 35px;    
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  border: none;
  background: none;
  font-size: inherit;
  margin-right: 3px;
  
  :focus{
    outline: none; 
  }
  
  ${({ active }) => active && css`
    background: ${({ theme }) => theme.lightblue};
    border-radius: 3px;
  `};
  
`;

const StyledImg = styled.img`
  height: 1em; 
  margin: 0;
  padding: 0;
`;

const StyledParagraph = styled.p`  
  font-size: inherit;
  padding: 0;
  margin-left: 3px;    
`;

const Index = ({ label, icon, active }) => {
  return (
    <StyledButton active={active}>
      <StyledImg src={icon}/>
      <StyledParagraph>{label}</StyledParagraph>
    </StyledButton>
  );

};

export default Index;
