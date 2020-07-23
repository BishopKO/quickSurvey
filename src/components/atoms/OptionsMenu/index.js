import React, { useState } from 'react';
import IconButton from 'components/atoms/IconButton';
import ellipsisIcon from 'assets/ellipsis-h.svg';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

const StyledMenu = styled.div`
  position: absolute;
  top: -50px;
  left: -100px;
  background-color: white;
  font-family: inherit;  
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 2px 1px lightgray;
  padding: 3px;
   
  ul{
    list-style: none;
    margin: 0;
    padding: 0px;
  }
`;

const StyledMenuSplit = styled.div`
  height: 1px;
  width:100%;
  margin: 5px 0 2px 0;
  background: lightgray;
 
`;

const OptionsMenu = ({ activateOptions, number, open }) => {
  const handleShowOptions = () => {
    activateOptions(number);
  };

  return (
    <StyledWrapper>
      <IconButton icon={ellipsisIcon} onClick={handleShowOptions}/>
      {open && <StyledMenu>
        <ul>
          <li>Edit title</li>
          <li>Apparence</li>
          <li><StyledMenuSplit/></li>
          <li>Clear Responses</li>
          <li>Delete Survey</li>
        </ul>
      </StyledMenu>}
    </StyledWrapper>
  );
};
export default OptionsMenu;
