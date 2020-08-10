import React from 'react';
import IconButtonWithLabel from './index';
import penIcon from 'assets/pencil-alt.svg';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms/IconButtonWithLabel', module)
  .add('Normal', () => <IconButtonWithLabel icon={penIcon} label="Label"/>)
  .add('Active', () => <IconButtonWithLabel active icon={penIcon} label="Label"/>);
