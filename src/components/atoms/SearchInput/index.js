import React from 'react';
import styled, { css } from 'styled-components';
import IconButton from 'components/atoms/IconButton';
import searchIcon from 'assets/search.svg';

const StyledWrapper = styled.div`  
  height: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: row; 
  overflow: hidden; 
  margin-right: 10px;
  
  ${({ mobile }) => mobile && css`
    width: 150px;
  `}
  
   ${({ desktop }) => desktop && css`
    width: 250px;
  `}   
`;

const StyledInput = styled.input`
  width: 100%; 
  padding-left: 3px;
  margin: 0;  
  border: none;
  
  :focus{
    outline: none;
    border: none;
  }
  
  ::placeholder{   
    opacity: 0.4;
    font-size: 12px;    
  }  
`;

const StyledSearchButton = styled(IconButton)`
  width: 20px;
  border: none;
  background-color: ${({ theme }) => theme.lightgrey};  
  border-radius: 0;  
  opacity: 1;
`;

const SearchInput = ({ mobile, desktop }) => {
  return (
    <StyledWrapper mobile={mobile} desktop={desktop}>
      <StyledSearchButton icon={searchIcon}/>
      <StyledInput placeholder="Search Surveys"/>
    </StyledWrapper>
  );
};

export default SearchInput;

