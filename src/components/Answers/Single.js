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

const SingleAnswer = () => {
  return (
    <StyledWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="radio" checked={true}/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="radio"/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="radio" value="Answer one..."/>This is sample answer.
      </StyledAnswerWrapper>
      <StyledAnswerWrapper>
        <StyledInput type="radio" value="Answer one..."/>This is sample answer.
      </StyledAnswerWrapper>
    </StyledWrapper>
  );
};

export default SingleAnswer;
