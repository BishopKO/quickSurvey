import React from 'react';
import QuestionTypeModal from '../QuestionTypeModal';
import { storiesOf } from '@storybook/react';

storiesOf('Components/QuestionTypeModal', module)
  .add('Normal', () => <QuestionTypeModal/>);
