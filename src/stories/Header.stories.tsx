import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';


import Header, { HeaderProps } from '../components/Blocks/Global/Header';
import { Text } from '../components/Atoms'
import { createGlobalStyle } from 'styled-components';

export default {
    title: 'Main App Blocks/Header',
    component: Header
} as Meta;

type TemplateArgsType = HeaderProps

const Template: Story<TemplateArgsType> = args => (
    <div style={{height: '90vh', display: 'flex', flexDirection: 'column'}}>
        <MarginDisable />
        <Header {...args} />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1'}}>
            <Text color={'black'}>Here will be page</Text>
        </div>
    </div>
)

export const Search = Template.bind({});

Search.args = {
    // search: true
} as TemplateArgsType

export const NoSearch = Template.bind({});

NoSearch.args = {
    // search: false
} as TemplateArgsType

const MarginDisable = createGlobalStyle`
    html, body {
        padding: 0!important;
    }
`