import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  height: 12px;
  width: ${({ width }) => width || '40px'};    
  display: flex;
  flex-direction: row;  
  justify-content: center;
  align-items: center;
  font-family: inherit;
  border: none;
  background: none;
  font-size: inherit;
  margin-right: 3px;
  
  :focus{
    outline: none; 
  }
  
  :hover{
    cursor: pointer;
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
  width: 200px;  
  padding: 0;
  margin-left: 3px;    
`;

const Index = ({ label, icon, active, width }) => {
  return (
    <StyledButton active={active} width={width}>
      <StyledImg src={icon}/>
      <StyledParagraph>{label}</StyledParagraph>
    </StyledButton>
  );

};

export default Index;
