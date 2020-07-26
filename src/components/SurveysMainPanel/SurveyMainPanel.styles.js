import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  border-radius: 5px;
  border: ${({ theme }) => `1px solid ${theme.lightgrey}`};  
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 14px; 
  
  ${({ mobile }) => mobile && css`    
    width: 100%;
  `}
  
  ${({ desktop }) => desktop && css`
    width: 900px;
  `}   
`;

export const StyledPanelTop = styled.div`
  display: flex;  
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px; 
  background-color: ${({ theme }) => theme.black};  
  
  p{
    color: white;
    margin-left: 10px;
  }
`;

export const StyledPanelMobile = styled.div`
  width:100%;  
`;

export const StyledPanelHead = styled.div`
  display: grid; 
  height: 25px;
  padding-top: 5px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  align-items: center;  
    
  div:nth-child(2){
    padding-left: 15px;   
    a{
      color: ${({ theme }) => theme.black};
      text-decoration: none;      
    }    
  }       
  
  div:nth-child(4){
    text-align: center;
  }
  
   ${({ mobile }) => mobile && css`
     grid-template-columns: 3px 1fr 55px; 
      padding-left: 20px; 
  `}
  
  ${({ desktop }) => desktop && css`
     grid-template-columns: 40px 1fr 130px 180px 50px;
     padding-left: 5px; 
     
     div:nth-child(3){
      text-align: center;
     }   
  `} 
  
`;
