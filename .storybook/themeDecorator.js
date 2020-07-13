import React from 'react';
import mainTheme from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';


const ThemeDecorator = storyFn => (
  <ThemeProvider theme={mainTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
