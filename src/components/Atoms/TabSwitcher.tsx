import React, { MouseEvent, RefObject } from 'react';
import styled from 'styled-components';

export interface Tab {
    id: string | number;
    title: string;
    icon?: string
    iconActive?: string;
    imgStyle?: React.CSSProperties,
    link?: string,
}

export interface TabSwitcherProps {
    tabs?: Tab[]
    onSwitch?: Function
    style?: React.CSSProperties
    tabStyle?: React.CSSProperties
    activeTabStyle?: React.CSSProperties
    tabClassName?: string
    flex?: string
    currentTab?: string | number
    borderIndicatior?: boolean
    showTitleOnlyWhenActive?: boolean
    withScroll?:boolean
    fontWeight?: string
    fontSize?: string
    containerClassName?: string
    containerRef?: RefObject<HTMLDivElement>
}

export default function TabSwitcher(props: TabSwitcherProps): JSX.Element {

    const handleTabClick = (event: MouseEvent) => {
        const target = event.target as HTMLDivElement
        props.onSwitch && props.onSwitch(target.id);
    }
    
    return <StyledTabSwitcher withScroll={props.withScroll} ref={props.containerRef} flex={props.flex} style={props.style} className={props.containerClassName || ''}>
        {props.tabs?.map(tab => (
            <StyledTab 
                style={{...props.tabStyle, ...(props.currentTab === tab.id ? props.activeTabStyle : {})}}
                className={props.tabClassName || ''}
                key={tab.id}
                id={tab.id + ''}
                borderIndicatior={props.borderIndicatior}
                onClick={handleTabClick}
            >
                {
                    tab.icon && props.currentTab !== tab.id && 
                        <img style={tab.imgStyle} src={tab.icon} alt={tab.title} id={tab.id + ''} />
                }
                {
                    tab.iconActive && props.currentTab === tab.id &&
                        <img style={tab.imgStyle} src={tab.iconActive} alt={tab.title} id={tab.id + ''} />
                }
                {
                    <StyledTitle
                        {...props}
                        id={tab.id + ''}
                        active={props.currentTab === tab.id}
                        style={((props.showTitleOnlyWhenActive && props.currentTab === tab.id) || !props.showTitleOnlyWhenActive) ? {} : {opacity: 0}}
                    >
                        {tab.title}
                    </StyledTitle>
                }
            </StyledTab>
        ))}
    </StyledTabSwitcher>
}

const StyledTabSwitcher = styled.div<{flex?: string, withScroll?: boolean}>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* margin-bottom: 1rem; */

    ${p => p.withScroll ? `
        overflow-x: scroll;
        justify-content: flex-start;
    ` : ''}

    ${p => p.flex ? `
        flex: ${p.flex};
    ` : ''}
`

const StyledTab = styled.div<{borderIndicatior?: boolean, fontSize?: string, fontWeight?: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`

const StyledTitle = styled.span<{fontSize?: string, fontWeight?: string, active?: boolean, borderIndicatior?: boolean}>`
    font-size: ${p => p.fontSize || '1rem'};
    color: #B0B0B0;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${p => p.fontWeight || 'bold'};

    ${p => p.borderIndicatior && `
        border-bottom: 3px solid rgba(0,0,0,0);
    `}

    ${p => p.active && `
        border-color: #217E9A;
        color: #217E9A;
    `}
`