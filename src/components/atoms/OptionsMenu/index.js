import React from 'react';
import IconButton from 'components/atoms/IconButton';
import styled, { css } from 'styled-components';

import ellipsisIcon from 'assets/ellipsis-h.svg';
import editIcon from 'assets/edit.svg';
import toolIcon from 'assets/tools.svg';
import eraserIcon from 'assets/eraser.svg';
import trashIcon from 'assets/trash-alt.svg';

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
  left: -117px;
  top: -69px;
  background-color: white;
  font-family: inherit;  
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 2px 1px lightgray; 
  width: 130px;
  
  ${({ mobile }) => mobile && css`
    top: -53px;
     left: -115px;
  `} 
   
  ul{
    list-style: none;
    margin: 0;
    padding: 5px;    
  }
`;

const StyledMenuSplit = styled.div`
  height: 1px;
  width: 100%;
  margin: 5px 0 2px 0;
  background: lightgray;
 
`;

const StyledMenuButton = styled(IconButton)`
  border: none;
  position: relative;   
  
  ::after{
    position: absolute;
    content: "${({ text }) => text}";
    left: 25px;
    top: 5px; 
    width: 100px;  
    font-size: 12px;
    text-align: left;
  }
`;


const OptionsMenu = ({ mobile, activateOptions, number, open }) => {
  const handleShowOptions = () => {
    activateOptions(number);
  };

  return (
    <StyledWrapper>
      <IconButton icon={ellipsisIcon} onClick={handleShowOptions}/>
      {open && <StyledMenu mobile={mobile}>
        <ul>
          <li><StyledMenuButton icon={editIcon} text="Edit title"/></li>
          <li><StyledMenuButton icon={toolIcon} text="Appearance"/></li>
          <li><StyledMenuSplit/></li>
          <li><StyledMenuButton icon={eraserIcon} text="Clear Responses"/></li>
          <li><StyledMenuButton icon={trashIcon} text="Delete Survey"/></li>
        </ul>
      </StyledMenu>}
    </StyledWrapper>
  );
};
export default OptionsMenu;
