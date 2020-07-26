import styled, { css } from 'styled-components';
import IconButton from 'components/atoms/IconButton';

export const StyledWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: 4px 1fr 55px ;
  height: 80px;
  border-top: 1px solid lightgray;    
`;

export const StyledStatusMobile = styled.div`
  height: 80px; 
  width: 100%; 
  background-color: ${({ theme }) => theme.grey}; 
 
  ${({ active }) => active && css`
      background-color: ${({ theme }) => theme.green}; 
  `}
`;

export const StyledSurveyMainMobile = styled.div`
  display: grid;
  grid-auto-rows: 20px 20px 40px;
  padding-left: 20px;
  padding-top: 10px;
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
  }
  
  div:nth-child(2){
    font-size: 10px;
  }
  
  div:nth-child(3){
    ul{
      padding: 0;
      margin: 0; 
    }
    li{    
        display: inline-block;
        list-style: none;
        margin-right: 6px;    
       }    
  }   
`;


export const StyledWrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 130px 180px 50px;
  height: 60px;
  border-top: 1px solid lightgray;    
  align-items: center;  

  div:nth-child(3){
    text-align: center;
  }  
`;

export const StyledOptionsUl = styled.ul`
    display: flex;  
    list-style: none;    
    justify-content: center;
    margin-left: 15px;
    padding: 0;

    li{
      margin-right: 15px;
    }
`;

export const StyledIconButton = styled(IconButton)`
  width: 30px;
  border: none;
`;

export const StyledStatusDesktop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
`;

export const StyledSurveyMainDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;  
  padding-left: 20px; 
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
  }

`;

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;  
  justify-content: center;
  align-items: center;
  
  span{
    padding-right: 20px;
  }
`;
