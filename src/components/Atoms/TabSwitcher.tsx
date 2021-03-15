import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';

interface Tab {
    id: string | number;
    title: string;
}

export interface TabSwitcherProps {
    tabs: Tab[];
    onSwitch?: Function;
    style?: React.CSSProperties;
}

export default function TabSwitcher(props: TabSwitcherProps): JSX.Element {

    const [currentTab, setTab] = useState<string | number>(props.tabs[0].id) 

    const handleTabClick = (event: MouseEvent) => {
        setTab(event.currentTarget.id);
        props.onSwitch && props.onSwitch();
    }
    
    return <StyledTabSwitcher style={props.style}>
        {props.tabs.map(tab => (
            <StyledTab 
                key={tab.id}
                id={tab.id + ''}
                active={currentTab === tab.id}
                onClick={handleTabClick}
            >{tab.title}</StyledTab>
        ))}
    </StyledTabSwitcher>
}

const StyledTabSwitcher = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
`

const StyledTab = styled.div<{active: boolean}>`
    font-size: 1rem;
    color: #B0B0B0;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    cursor: pointer;

    ${p => p.active && `
        border-bottom: 3px solid #217E9A;
        color: #217E9A;
    `}
`