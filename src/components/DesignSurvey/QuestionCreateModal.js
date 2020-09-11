import React, { useState } from 'react';
import MultipleChoice from 'components/DesignSurvey/AddAnswers';
import closeIcon from 'assets/close.svg';
import {
  StyledWrapper,
  StyledTopWrapper,
  StyledCloseButton,
  StyledQuestionTextWrapper,
  StyledAnswerTypeWrapper,
  QuestionTypeSelect,
  StyledButtonsWrapper,
  QuestionText,
  StyledSaveButton,
  MultipleSingleWrapper,
} from './styles/QuestionCreateModalStyles';
import multipleSingleSample from 'assets/multipleSingle.png';
import multipleManySample from 'assets/multipleMany.png';


const QuestionCreateModal = ({ close }) => {

  const [answerType, setAnswerType] = useState(null);

  const handleSetAnswerType = (element) => {
    const value = element.target.value;
    setAnswerType(value);
  };

  return (
    <StyledWrapper>
      <StyledTopWrapper>Add Question<StyledCloseButton icon={closeIcon} onClick={() => close()}/></StyledTopWrapper>
      <StyledQuestionTextWrapper>
        <QuestionText/>
      </StyledQuestionTextWrapper>
      <StyledAnswerTypeWrapper>
        <QuestionTypeSelect onChange={element => handleSetAnswerType(element)}>
          <option style={{ display: 'none' }}>Type...</option>
          <option value="text">Text</option>
          <option value="multiple-one">Multiple Choice (One answer)</option>
          <option value="multiple-multi">Multiple Choice (Many answers)</option>
        </QuestionTypeSelect>
      </StyledAnswerTypeWrapper>


      {answerType === 'multiple-one' &&
      <MultipleSingleWrapper>
        <div className="Wrapper">
          <div>
            <p>Example:</p>
            <img alt="" src={multipleSingleSample}/>
          </div>
        </div>
        <MultipleChoice/>
      </MultipleSingleWrapper>
      }

      {answerType === 'multiple-multi' &&
      <MultipleSingleWrapper>
        <div className="Wrapper">
          <div>
            <p>Example:</p>
            <img alt="" src={multipleManySample}/>
          </div>
        </div>
        <MultipleChoice/>
      </MultipleSingleWrapper>
      }


      <StyledButtonsWrapper>
        <StyledSaveButton red onClick={() => close()}>Cancel</StyledSaveButton>
        <StyledSaveButton green>Save</StyledSaveButton>
      </StyledButtonsWrapper>

    </StyledWrapper>
  );
};

export default QuestionCreateModal;
