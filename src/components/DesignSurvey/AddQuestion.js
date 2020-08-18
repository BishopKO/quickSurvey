import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionCreateModal from './QuestionCreateModal';
import BigButton from 'components/atoms/BigButton';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;  
  justify-content: center;
  align-items: center;
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
      <BigButton green onClick={handleShowQuestionModal}>Add Question</BigButton>
      {showModal &&
      <QuestionCreateModal close={handleCloseQuestionModal}/>}
    </StyledWrapper>
  );
};

export default AddQuestion;
