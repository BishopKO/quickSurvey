import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.lightgrey}`};
  border-radius: 5px;
  padding: 10px;

`;

const StyledInput = styled.input`

`;

const StyledAnswerWrapper = styled.div`

`;

const MultipleAnswer = () => {
  return (
    <StyledWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="checkbox"/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="checkbox"/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="checkbox"/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="checkbox"/>This is sample answer.
      </StyledAnswerWrapper>
    </StyledWrapper>
  );
};

export default MultipleAnswer;
