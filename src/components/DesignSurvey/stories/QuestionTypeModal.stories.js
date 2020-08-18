import React from 'react';
import QuestionCreateModal from '../QuestionCreateModal';
import { storiesOf } from '@storybook/react';

storiesOf('Components/QuestionCreateModal', module)
  .add('Normal', () => <QuestionCreateModal/>);
