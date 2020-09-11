import React, { useState, useRef, useEffect, createRef } from 'react';
import styled from 'styled-components';
import BigButton from '../atoms/BigButton';
import IconButton from 'components/atoms/IconButton';
import pencilIcon from 'assets/pencil-alt.svg';
import saveIcon from 'assets/save.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 8px;
  padding: 0 5px 0 5px;
  background-image: -webkit-linear-gradient(rgb(212, 212, 212), white);
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  
  .TitleInput{
    padding: 0;
    font-size: inherit;
    border: none;
    background-color: transparent; 
    margin: 0 0 0 2px;  
  }
`;

const StyledIconButton = styled(IconButton)`
  border: none;  
  opacity: 0.5; 
  background-size: 40%;
`;

const TitleBar = () => {
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState('Sample Title');

  const titleRef = useRef(null);

  const handleEdit = () => {
    setDisabled(false);
  };

  const handleSave = () => {
    setDisabled(true);
    setTitle(titleRef.current.value);
  };

  useEffect(() => {
    if (!disabled) {
      titleRef.current.focus();
    }
  });

  return (
    <StyledWrapper>
      <StyledTitle>Title:
        <input size={title.length - 4} ref={titleRef} className="TitleInput" defaultValue={title} disabled={disabled}/>
        {disabled === true && <StyledIconButton icon={pencilIcon} onClick={handleEdit}/>}
        {disabled === false && <StyledIconButton icon={saveIcon} onClick={handleSave}/>}
      </StyledTitle>
      <BigButton blue>Preview Survey</BigButton>
    </StyledWrapper>
  );
};

export default TitleBar;


