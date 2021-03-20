import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Popup, PopupProps } from '../components/Atoms';
import AtomicContainer from './AtomicContainer'

export default {
    title: 'Atoms/Popup',
    component: Popup,
} as Meta

const Template: Story<PopupProps> = args => (
    <AtomicContainer></AtomicContainer>
)