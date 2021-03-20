import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../components/Atoms/Button';
import AtomicContainer, { bgType } from './AtomicContainer';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps & {background: bgType, label: string}> = (args) => <AtomicContainer background={args.background}>
  <Button {...args}>{args.label}</Button>
</AtomicContainer>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'get started',
  background: 'light',
  width: '20vw'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  background: 'dark',
  width: '20vw'
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true, 
  label: 'log in',
  background: 'dark', 
  width: '20vw'
};

