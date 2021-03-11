import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/Button';
import styled from 'styled-components';

const StoryContainer = styled.div<{background: string | undefined}>`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background: ${p => p.background || '#FFFFFF'};
`

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps & {background: string, label: string}> = (args) => <StoryContainer background={args.background}>
  <Button {...args}>{args.label}</Button>
</StoryContainer>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'get started',
  background: '#FFFFFF',
  width: '20vw'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  background: '#373560',
  width: '20vw'
};

export const Transparent = Template.bind({});
Transparent.args = {
  transparent: true, 
  label: 'log in',
  background: '#373560', 
  width: '20vw'
};

