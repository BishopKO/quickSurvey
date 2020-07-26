import React from 'react';

import IconButton from 'components/atoms/IconButton';
import pencilIcon from 'assets/pencil-alt.svg';
import linkIcon from 'assets/link.svg';
import chartPieIcon from 'assets/chart-pie.svg';

import OptionsMenu from 'components/atoms/OptionsMenu';

import styled, { css } from 'styled-components';


const StyledWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: 4px 1fr 55px ;
  height: 80px;
  border-top: 1px solid lightgray;  
  
`;

const StyledStatusMobile = styled.div`
  height: 80px; 
  width: 100%; 
  background-color: ${({ theme }) => theme.grey}; 
 
  ${({ active }) => active && css`
      background-color: ${({ theme }) => theme.green}; 
  `}
`;

const StyledSurveyMain = styled.div`
  display: grid;
  grid-auto-rows: 20px 20px 40px;
  padding-left: 20px;
  padding-top: 10px;
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
  }
  
  div:nth-child(2){
    font-size: 10px;
  }
  
  div:nth-child(3){
  ul{
    padding: 0;
    margin: 0; 
  }
  li{    
      display: inline-block;
      list-style: none;
      margin-right: 6px;    
     }    
  }   
`;

const StyledOptions = styled.div`
  display: flex;
  height: 100%;
  width: 100%;  
  justify-content: center;
  align-items: center;
  
  span{
    padding-right: 20px;
  }
`;


const Row = ({ active, mobile, activateOptions, number, open }) => {
  if (mobile) {
    return (
      <StyledWrapperMobile>
        <StyledStatusMobile active={active}/>
        <StyledSurveyMain>
          <div><a href=".">Survey title...</a></div>
          <div>Created: 12/07/2020 17:10</div>
          <div>
            <ul>
              <li><IconButton icon={pencilIcon}/></li>
              <li><IconButton icon={linkIcon}/></li>
              <li><IconButton icon={chartPieIcon}/></li>
            </ul>
          </div>
        </StyledSurveyMain>
        <StyledOptions>
          <OptionsMenu activateOptions={activateOptions} number={number} open={open}/>
        </StyledOptions>
      </StyledWrapperMobile>
    );
  } else {
    return (
      <div>Desktop</div>
    );
  }
};

export default Row;
