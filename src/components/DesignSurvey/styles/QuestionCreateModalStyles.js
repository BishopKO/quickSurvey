import styled from 'styled-components';
import IconButton from '../../atoms/IconButton';
import BigButton from '../../atoms/BigButton';

export const StyledWrapper = styled.div`
  font-size: 5px;
  display: grid;
  grid-template-rows: 10px 50px 40px 1fr;
  position: absolute; 
  top: 10%;
  left:0;
  width: 90%;
  transform: translateX(5%);
  min-height: 120px; 
  border: 1px solid grey;
  border-radius: 3px;    
  background-color: white; 
`;

export const StyledTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 5px;
    background-color: ${({ theme }) => theme.grey};      
    padding: 0 2px 0 2px;
    color: white;
`;

export const StyledQuestionTextWrapper = styled.div`
    margin-top: 5px; 
    padding: 0 5px 0 5px;  
`;

export const StyledAnswerTypeWrapper = styled.div`
    position: relative;
    margin-top: 10px; 
    padding: 0 5px 0 5px;
    border-top: ${({ theme }) => `0.2px dotted ${theme.lightgrey}`};
    
    ::before{    
        content: "Answer Type";
        position: absolute;
        top: 4px;
    } 
`;

export const QuestionText = styled.textarea` 
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

export const QuestionTypeSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 2px;
  background-color: white;
  font-size: 5px;
  margin-top: 12px;
  width: 8rem;
  padding: 2px;
  border: ${({ theme }) => `0.2px solid ${theme.lightgrey}`};
  
  :hover{
    cursor: pointer;
  }  
  
  :focus{
    outline: none;
  }
  
  option{   
    font-size: 12px;  
    border-radius: 3px;
    padding: 10px;
  }
`;

export const StyledCloseButton = styled(IconButton)`
  border: none;
  overflow: hidden;  
  background-size: 90%;
  width: 8px;
  height: 8px;
  padding: 0;
`;

export const StyledSaveButton = styled(BigButton)`
  width: 50px; 
  margin: 5px 3px 3px 2px;  
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MultipleSingleWrapper = styled.div`
  .Wrapper{
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
  
  img{
    width: 50px;
  }
`;


export const MultipleMultiWrapper = styled.div`
  .Wrapper{
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
  
  img{
    width: 50px;
  }
`;
