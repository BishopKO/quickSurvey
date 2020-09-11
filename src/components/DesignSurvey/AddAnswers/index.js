import React, { useReducer } from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton';
import plusIcon from 'assets/plus.svg';
import closeIcon from 'assets/close.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
  border-bottom: ${({ theme }) => `0.2px dotted ${theme.lightgrey}`};  
`;

const StyledAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;  
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  
  p{
    margin-right: 5px;
    font-weight: bold;   
  }
`;

const StyledInput = styled.input`
  height: 10px;
  width: 90%; 
  font-size: 6px;  
  padding: 1px;
  border: 1px solid grey;
  border-radius: 2px;
  :focus{
    outline: none;
  }
`;

const StyledAddButton = styled(IconButton)`
  width: 10px;
  height: 10px;
  border: none;
    
  :focus{
    outline: none;   
  }
`;

const MultipleOneAnswer = () => {
  const initState = { questions: [''] };

  const reducer = (state, action) => {
      switch (action.type) {
        case 'ADD_ANSWER':
          return {
            ...state,
            questions: [...state.questions, []],
          };
        case 'REMOVE_ANSWER':
          return {
            ...state,
            questions: [...state.questions.filter((item, index) => index !== action.payload.index)],
          };
        case 'SET_QUESTION':
          return {
            questions: state.questions[action.payload.index] = action.payload.value,
            ...state,
          };
        default:
          return {
            ...state,
          };
      }
    }
  ;

  const [state, dispatch] = useReducer(reducer, initState);

  const addAnswer = () => {
    dispatch({ type: 'ADD_ANSWER' });
  };

  const removeAnswer = (index) => {
    dispatch({ type: 'REMOVE_ANSWER', payload: { index: index } });
  };

  const setAnswer = (index, element) => {
    const value = element.target.value;
    dispatch({ type: 'SET_QUESTION', payload: { index, value } });
  };

  return (
    <StyledWrapper>
      <StyledAddButton onClick={addAnswer} icon={plusIcon}/> Add Answer
      {state.questions.map((value, index) => (
        <StyledAnswerWrapper>
          <p>{index + 1}</p>
          <StyledInput value={value} key={index} onChange={(element) => setAnswer(index, element)}/>
          <StyledAddButton icon={closeIcon} onClick={() => removeAnswer(index)}/>
        </StyledAnswerWrapper>
      ))}
    </StyledWrapper>
  );
};

export default MultipleOneAnswer;
