import React from 'react';
import SurveysMainPanel from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Components/Surveys Panel', module)
  .add('Desktop', () => <SurveysMainPanel/>)
  .add('Mobile', () => <SurveysMainPanel mobile/>);
