import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton';
import MultipleOneAnswer from 'components/DesignSurvey/MultipleOneAnswer';
import closeIcon from 'assets/close.svg';

const StyledWrapper = styled.div`
  font-size: 5px;
  display: grid;
  grid-template-rows: 10px 50px 40px 1fr;
  position: absolute; 
  top: 10%;
  left:0;
  width: 90%;
  transform: translateX(5%);
  min-height: 200px; 
  border: 1px solid grey;
  border-radius: 3px;    
  background-color: white;  
`;

const StyledTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 5px;
    background-color: ${({ theme }) => theme.grey};      
    padding: 0 2px 0 2px;
    color: white;
`;

const StyledQuestionTextWrapper = styled.div`
    margin-top: 5px; 
    padding: 0 5px 0 5px;  
`;

const StyledAnswerTypeWrapper = styled.div`
    position: relative;
    margin-top: 10px; 
    padding: 0 5px 0 5px;
    border-top: 0.5px dotted lightgray;    
    
    ::before{    
        content: "Answer Type";
        position: absolute;
        top: 4px;
    } 
`;


const QuestionText = styled.textarea` 
  border: none;
  margin-top: 2px;
  padding: 2px;
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `0.2px solid ${theme.lightgrey}`};
  resize: none;
  font-size: 7px;
  border-radius:3px;
  
  :focus{
    outline: none;
  }
  `;

const QuestionTypeSelect = styled.select`
  -webkit-appearance: none;
  border-radius: 2px;
  background-color: white;
  font-size: 5px;
  margin-top: 12px;
  width: 70px;  
  padding: 1px;
  
  :focus{
    outline: none;
  }
  
  option{   
    font-size: 12px;  
  }
`;

const StyledCloseButton = styled(IconButton)`
  border: none;
  overflow: hidden;  
  background-size: 100%;
  width: 6px;
  height: 6px;
  padding:0;
`;


const QuestionCreateModal = ({ close }) => {
  return (
    <StyledWrapper>
      <StyledTopWrapper>Add Question<StyledCloseButton icon={closeIcon} onClick={() => close()}/></StyledTopWrapper>
      <StyledQuestionTextWrapper>
        <QuestionText/>
      </StyledQuestionTextWrapper>
      <StyledAnswerTypeWrapper>
        <QuestionTypeSelect>
          <option style={{ display: 'none' }}>Type...</option>
          <option value="text">Text</option>
          <option value="multiple-one">Multiple Choice (One answer)</option>
          <option value="multiple-multi">Multiple Choice (Many answers)</option>
        </QuestionTypeSelect>
      </StyledAnswerTypeWrapper>
      <MultipleOneAnswer/>

    </StyledWrapper>
  );
};

export default QuestionCreateModal;
