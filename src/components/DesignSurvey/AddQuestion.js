import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionTypeModal from './QuestionTypeModal';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;  
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  height: 15px;
  background-color: ${({ theme }) => theme.green};
  border: none;
  border-radius: 3px;
  color: white;
  font-family: inherit;
  font-size: 10px;  
`;

const AddQuestion = () => {
  const [showModal, setShowModal] = useState(true);

  const handleShowQuestionModal = () => {
    setShowModal(true);
  };

  const handleCloseQuestionModal = () => {
    setShowModal(false);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={handleShowQuestionModal}>Add Question</StyledButton>
      {showModal &&
      <QuestionTypeModal close={handleCloseQuestionModal}/>}
    </StyledWrapper>
  );
};

export default AddQuestion;
