import React from 'react';
import {storiesOf} from '@storybook/react';
import PublishSurvey from './index'

storiesOf('Components/PublishSurvey', module)
  .add('Mobile', () => <PublishSurvey mobile/>)
  .add('Desktop', () => <PublishSurvey />);

