import styled, { css } from 'styled-components';

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;   
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-top: 50px;
  min-height: 300px; 
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: 0;  
  height: 40px;
  width: 100%;  
`;

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  height: 40px;
  border: none;
  font-family: inherit;
  font-size: 16px;  
  color: lightgray;   
  
  :focus{
    border: none;
    outline: none;
  }
   
  :hover{
    cursor: pointer;
  }
  
  ${({ login }) => login && css`
    background: ${({ theme }) => theme.buttons.green};    
  `}  
  
  ${({ register }) => register && css`  
    background: ${({ theme }) => theme.buttons.blue};    
  `};  
  
  ${({ active }) => active && css`
    color:black;
`}
  
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 100px;
  width: 100%;
`;

export const StyledParagraph = styled.p`
  font-family: 'Audiowide', cursive;
  height: 24px;
`;

export const StyledForm = styled.form` ;
  margin-top: 20px;
  padding: 10px;
  width:  100%;
  height: 110px;  
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;  
  font-size: inherit;
  background: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 10px;  
  
  ${({ error }) => error && css`
    border: 1.5px solid red;
`}
  
  :focus{
    outline: none;
  }
`;
