import React from 'react';
import mainTheme from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';


const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;  
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle/>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default MainTemplate;
