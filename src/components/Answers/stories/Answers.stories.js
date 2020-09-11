import React from 'react';
import { storiesOf } from '@storybook/react';
import Multiple from '../Multiple';
import Single from '../Single';

storiesOf('Answers', module)
  .add('Multiple', () => <Multiple/>)
  .add('Single', () => <Single/>);

