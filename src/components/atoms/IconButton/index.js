import styled from 'styled-components';

const IconButton = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: 60%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: .5px solid lightgray;
  border-radius: 3px;
  opacity: 0.6; 
`;

export default IconButton;
