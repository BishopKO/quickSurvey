import styled, { css } from 'styled-components';

const StyleBigButton = styled.button`
  height: 15px;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 3px;
  color: white;
  font-family: inherit;
  font-size: 10px;  
  
  :hover{
    cursor: pointer;
  }
  
  ${({ green }) => green && css`
    background-image: -webkit-linear-gradient(rgb(47, 140, 88), rgb(100,200,100));
  `};

  ${({ blue }) => blue && css`
    background-image: -webkit-linear-gradient(rgb(18, 122, 184), rgb(77, 148, 190));
  `};
  
  ${({ red }) => red && css`
    background-image: -webkit-linear-gradient(rgb(104, 28, 41), rgb(230, 90, 90));
  `};
`;


export default StyleBigButton;
