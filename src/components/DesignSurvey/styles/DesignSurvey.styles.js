import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
    font-family: inherit; 
    display: grid;
    grid-template-rows: 20px 30px 1fr 100px;
    width: 300px; 
    transform-origin: top;   
    font-size: 8px;     
    -webkit-transform: ${({ scale }) => `scale(${scale})`};
    transform: ${({ scale }) => `scale(${scale})`};        

  span{
    font-size: 8px;
    font-weight: bold;
  }`
;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 0 5px;
  background-color: white;
  border: .5px solid lightgray;
  span{
    color: ${({ theme }) => theme.grey};
    font-weight: normal; 
  }`
;

export const StyledUl = styled.ul`
  list-style: none;
  display: inline-flex;`
;

export const StyledLi = styled.li`
  margin-right: 10px;
  border-radius: 2px;

  ${({ active }) => active && css`
    background: lightblue;
  `};
`;
