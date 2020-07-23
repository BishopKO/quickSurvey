import React from 'react';
import LoginRegister from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Components/LoginRegister', module)
  .add('Login', () => <LoginRegister/>);

