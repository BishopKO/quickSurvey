import React from 'react';
import mainTheme from 'theme/mainTheme';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ThemeDecorator = storyFn => (
  <StyledWrapper>
    <ThemeProvider theme={mainTheme}>{storyFn()}</ThemeProvider>
  </StyledWrapper>
);

export default ThemeDecorator;
