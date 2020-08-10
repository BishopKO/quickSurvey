import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  padding: 0 5px 0 5px;
  background-color: ${({ theme }) => theme.lightgrey};
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.grey};
  span{
    color: black;
    font-weight: bold;
    font-size: inherit;
  }
`;

const StyledButton = styled.button`
  height: 15px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 3px;
  color: white;
  font-family: inherit;
  font-size: 10px;  
`;

const TitleBar = ({ title }) => {
  return (
    <StyledWrapper>
      <StyledTitle>Title: <span>Sample title</span></StyledTitle>
      <StyledButton>Preview Survey</StyledButton>
    </StyledWrapper>
  );
};

export default TitleBar;


