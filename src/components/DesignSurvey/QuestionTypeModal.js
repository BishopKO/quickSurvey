import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 5px;
  display: grid;
  grid-template-rows: 10px 50px 40px 1fr;
  position: absolute;
  overflow: hidden;
  top: 10%;
  left:0;
  width: 90%;
  transform: translateX(5%);
  height: 100px; 
  border: 1px solid grey;
  border-radius: 3px;    
  background-color: white;  
  
  div:first-child{
    display: flex;
    align-items: center;
    font-size: 5px;
    background-color: ${({ theme }) => theme.grey};      
    padding: 3px;
    color: white;
  }
  
  div:nth-child(2){   
    margin-top: 5px; 
    padding: 0 5px 0 5px;    
    
    ::before{    
        content: "Question Text";
    } 
  }
  
  div:nth-child(3){   
    position: relative;
    margin-top: 15px; 
    padding: 0 5px 0 5px;
    border-top: 0.5px dotted lightgray;    
    
    ::before{    
        content: "Answer Type";
        position: absolute;
        top: 4px;
    } 
  }
`;

const QuestionText = styled.textarea` 
  border: none;
  margin: 0;
  padding: 2px;
  width: 100%;
  height: 100%;
  border: ${({ theme }) => `0.2px solid ${theme.lightgrey}`};
  resize: none;
  font-size: 7px;
  
  :focus{
    outline: none;
  }
  `
;

const QuestionType = styled.select`
  font-size: inherit;
  margin-top: 10px;
  width: 100px;
  
  option{
    margin:0;
    padding: 0;
    font-size: 12px;
  }
`;


const QuestionTypeModal = () => {
  return (
    <StyledWrapper>
      <div>Add Question</div>
      <div>
        <QuestionText/>
      </div>
      <div>
        <QuestionType>
          <option value="text">Text</option>
          <option value="multiple-one">Multiple Choice (One answer)</option>
          <option value="multiple-multi">Multiple Choice (Many answers)</option>
        </QuestionType>
      </div>
    </StyledWrapper>
  );
};

export default QuestionTypeModal;
