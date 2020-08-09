import styled, { css } from 'styled-components';
import IconButton from '../atoms/IconButton';

export const StyledWrapperMobile = styled.div`
  display: grid;
  grid-template-rows: 40px 100px 30px 120px;  
  width: 600px;
  background-color: ${({ theme }) => theme.lightgrey};
  font-family: "Roboto", sans-serif;
  
  div:nth-child(1){
    display: flex;
    background: ${({ theme }) => theme.black};  
    padding-left: 15px;
    align-items: center;
    color: white;
    font-size: 18px;
  }
  
  div:nth-child(2){
    width: 95%;  
    align-self: center;
    justify-self: center;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 40px; 
    border: ${({ theme }) => `0.5px solid ${theme.grey}`};    
    border-radius: 5px;
    overflow: hidden; 
    
    input{
      height: 40px;      
      text-align: center;  
      padding:0 5px 0 5px;
      margin:0;
      border: none;
      outline: none;
      font-size: 1rem;
      font-weight: bold;
    }   
  }
  
  div:nth-child(3){
    display: flex;
    flex-direction: row;
  
    border-top: ${({ theme }) => `1px solid ${theme.grey}`};
    padding: 10px 0 0 15px; 
  }
  
  div:nth-child(4){
    display: grid;      
    grid-template-columns: 50% 50%;
    padding: 10px 15px 10px 15px;     
  }
`;

export const StyledParagraph = styled.p`     
      margin: 0 0 0 10px;
      padding: 0;
      font-weight: bold;
      
      ${({ open }) => open && css`
          color: ${({ theme }) => theme.lightgreen};
      `};
      
      ${({ close }) => close && css`
          color: ${({ theme }) => theme.red};
      `};     
`;


export const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.lightgrey};
  height: 40px;
  width: 40px;  
`;

export const StyledBigButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};    
  font-size: 1.3rem;
  font-weight: bold;
  border: ${({ theme }) => `0.5px solid ${theme.lightgrey}`};
  border-radius: 3px;
  color: ${({ theme }) => theme.grey};  
  background-color: white;
  :hover{
    cursor: pointer;
  }

  ${({ open }) => open && css`   
    background-color: ${({ theme }) => theme.buttons.lightgreen};   
    color: ${({ theme }) => theme.lightgrey};    
  `}
  
  ${({ close }) => close && css`      
    background-color: ${({ theme }) => theme.buttons.red};
    color: ${({ theme }) => theme.lightgrey};    
`}
`;
