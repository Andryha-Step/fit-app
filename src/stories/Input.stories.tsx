import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '../components/Atoms';
import AtomicContainer, { bgType } from './AtomicContainer'

export default {
    title: 'Atoms/Input',
    component: Input
} as Meta;

type TemplateArgsType = InputProps & {containerBg?: bgType, label?: string}

const Template: Story<TemplateArgsType> = args => (
    <AtomicContainer background={args.containerBg}>
        <Input {...args} width={'20vw'}>{args.label}</Input>
    </AtomicContainer>
)

export const Light = Template.bind({});
Light.args = {
    type: 'text',
    placeholder: 'Name',
    label: 'Light input',
    color: 'white',
    containerBg: "dark",
} as TemplateArgsType

export const Dark = Template.bind({});
Dark.args = {
    type: 'text',
    placeholder: 'Name',
    label: 'Dark input',
    color: 'black',
} as TemplateArgsType

export const Number = Template.bind({});
Number.args = {
    type: 'number',
    placeholder: 'Name',
    label: 'Number input',
    color: 'white',
    containerBg: "dark",
} as TemplateArgsType

export const Checkbox = Template.bind({});
Checkbox.args = {
    type: 'checkbox',
    label: 'Are you agree to sell your soul to devil?',
    color: 'white',
    containerBg: "dark",
} as TemplateArgsType