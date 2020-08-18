import React from 'react';
import styled from 'styled-components';
import BigButton from '../atoms/BigButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 8px;
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

const TitleBar = ({ title }) => {
  return (
    <StyledWrapper>
      <StyledTitle>Title: <span>Sample title</span></StyledTitle>
      <BigButton blue>Preview Survey</BigButton>
    </StyledWrapper>
  );
};

export default TitleBar;


