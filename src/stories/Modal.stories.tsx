import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import AtomicContainer, { bgType } from './AtomicContainer'

import Modal, { ModalProps } from '../components/Atoms/Modal';

export default {
    title: 'Modal',
    component: Modal
} as Meta;

type TemplateArgsType = ModalProps & {containerBg?: bgType, label?: string}

const Template: Story<TemplateArgsType> = args => (
    <AtomicContainer background={args.containerBg}>
        <Modal wrapperTemplate={'white-box'} isOpen={true} {...args}>{args.label}</Modal>
    </AtomicContainer>
)

export const Default = Template.bind({});
Default.args = {
    label: 'Here is a Modal'
} as TemplateArgsType
