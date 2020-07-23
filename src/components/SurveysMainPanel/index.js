import React, { useReducer, useState } from 'react';
import styled, { css } from 'styled-components';
import Row from './Row';


const StyledWrapper = styled.div`
  width: ${({ width }) => width || '900px'};
  border-radius: 5px;
  border: 1px solid blue;  
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 14px; 
  
  ${({ mobile }) => mobile && css`
    width: 600px;
`}  
`;

const StyledPanelTop = styled.div`
  height:40px;
  width:100%;
  background-color: ${({ theme }) => theme.black};
`;

const StyledPanelMobile = styled.div`
  width:100%;  
`;

const StyledPanelHead = styled.div`
  display: grid;
  grid-template-columns: 3px 1fr 55px ;
  height: 20px;
  padding-top: 5px;
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.black}; 
  
  div:nth-child(2){
    padding-left: 20px;
    a{
      color: ${({ theme }) => theme.black};
      text-decoration: none;
    }    
  }
    
  div:nth-child(3){
    padding-right: 5px;
  }  
  
`;


const SurveysMainPanel = ({ mobile }) => {
  const [currentOptions, setCurrentOptions] = useState(null);

  const handleShowOptions = (val) => {
    if (val === currentOptions) {
      setCurrentOptions(null);
    } else {
      setCurrentOptions(val);
    }
  };

  return (
    <StyledWrapper mobile={mobile}>
      <StyledPanelTop/>
      {mobile &&
      <StyledPanelMobile>
        <StyledPanelHead>
          <div></div>
          <div>
            <a href=".">Survey Title</a>
            <span>  /  </span>
            <a href=".">Date Created</a>
          </div>
          <div>Options</div>
        </StyledPanelHead>

        <Row mobile activateOptions={handleShowOptions} number={0} open={currentOptions === 0}/>
        <Row mobile activateOptions={handleShowOptions} number={1} open={currentOptions === 1}/>

      </StyledPanelMobile>}


    </StyledWrapper>);
};

export default SurveysMainPanel;
