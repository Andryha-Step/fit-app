import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface Tab {
    id: string | number;
    title: string;
}

export interface TabSwitcherProps {
    tabs: Tab[]
    onSwitch?: Function
    style?: React.CSSProperties
    tabStyle?: React.CSSProperties
    activeTabStyle?: React.CSSProperties
    tabClass?: string
    flex?: string
    currentTab: string | number
    borderIndicatior?: boolean
}

export default function TabSwitcher(props: TabSwitcherProps): JSX.Element {

    const handleTabClick = (event: MouseEvent) => {
        const target = event.target as HTMLDivElement
        props.onSwitch && props.onSwitch(target.id);
    }
    
    return <StyledTabSwitcher flex={props.flex} style={props.style}>
        {props.tabs.map(tab => (
            <StyledTab 
                style={{...props.tabStyle, ...(props.currentTab === tab.id ? props.activeTabStyle : {})}}
                className={props.tabClass || ''}
                key={tab.id}
                id={tab.id + ''}
                active={props.currentTab === tab.id}
                borderIndicatior={props.borderIndicatior}
                onClick={handleTabClick}
            >{tab.title}</StyledTab>
        ))}
    </StyledTabSwitcher>
}

const StyledTabSwitcher = styled.div<{flex?: string}>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* margin-bottom: 1rem; */

    ${p => p.flex ? `
        flex: ${p.flex};
    ` : ''}
`

const StyledTab = styled.div<{active: boolean, borderIndicatior?: boolean}>`
    font-size: 1rem;
    color: #B0B0B0;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    cursor: pointer;

    ${p => p.borderIndicatior && `
        border-bottom: 3px solid rgba(0,0,0,0);
    `}

    ${p => p.active && `
        border-color: #217E9A;
        color: #217E9A;
    `}
`