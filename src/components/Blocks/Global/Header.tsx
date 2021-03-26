import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo, TabSwitcher } from '../../Atoms';
import searchIcon from '../../../assets/icons/search.svg'
import useWindowSize from '../../../customHooks/useWindowSize';
import Flex from '../Flex'

export interface HeaderProps {
    search?: boolean;
    bottomTabs?: Tab[]
    setBottomTab?: Function,
    currentBottomTab?: string,
    tabs?: Tab[]
    setTab?: Function,
    currentTab?: string,
}

interface Tab {
    id: string | number;
    title: string;
}

export default function Header(props:HeaderProps): JSX.Element {

    const { bottomTabs, setBottomTab, currentBottomTab, setTab, currentTab, tabs } = props

    const { width: screenWidth } = useWindowSize()

    return (
        <>
            <StyledHeader>
                <Logo style={{justifyContent: 'flex-start', paddingLeft: '2rem', height: '100%'}} flex={'1'} dark/>
                {
                    screenWidth > 600 && 
                    <TabSwitcher 
                        tabStyle={screenWidth > 1000 ? {margin: '0 2rem'} : {}}
                        tabClassName='headerTab'
                        style={screenWidth > 1000 ? {justifyContent: 'center'} : {}}
                        flex={'5'}
                        tabs={tabs || []}
                        currentTab={currentTab || ''}
                        onSwitch={setTab}
                    />
                }
                <SearchContainer isVisable={props.search} >
                    <img src={searchIcon} alt="searchIcon" />
                </SearchContainer>
            </StyledHeader>
            {
                (bottomTabs || true) &&
                <HeaderBottom>
                    <Flex flex="1">
                        <TabSwitcher 
                            tabs={bottomTabs || []}
                            currentTab={currentBottomTab || ''}
                            onSwitch={setBottomTab}
                            activeTabStyle={{background: "rgba(48, 143, 171, 0.2)"}}
                            style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}
                            tabStyle={bottomTabStyle}
                        />
                    </Flex>
                    <SearchContainer headerBottom isVisable={props.search} >
                        <img src={searchIcon} alt="searchIcon" />
                    </SearchContainer>
                </HeaderBottom>
            }
        </>
    )
}

const StyledHeader = styled.header`
    width: 100vw;
    height: 5rem;
    background-color: #ffffff;
    border-bottom: 1px solid #E6E5E5;
    display: flex;
`

const SearchContainer = styled.div<{isVisable?: boolean, headerBottom?: boolean}>`
    /* flex: 1; */
    justify-content: flex-end;
    align-items: center;
    margin: 0 2rem;

    & > img {
        height: 2rem;
        cursor: pointer;

        ${p => !p.isVisable ? `
            display: none;
        ` : ''}
    }

    ${p => p.headerBottom ? `
        display: none;
        @media screen and (max-width: 1000px) and (min-width: 600px) {
            & {
                display: flex;
            }
        }
    ` : `
        display: flex;
        @media screen and (max-width: 1000px) and (min-width: 600px) {
            & {
                display: none;
            }
        }
    `}
`

const HeaderBottom = styled.div`
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const bottomTabStyle = {
    margin: '0 0.5rem',
    background: '#F8F8F8',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
    color: 'black',
    fontSize: '0.9rem'
} as React.CSSProperties

// const StyledTabSwitcher = styled(TabSwitcher)`
//     background-color: red;

//     @media screen and (min-width: 1000px) and (min-width: 600px) {
//         & {
//             justify-content: center;
//         }
//         & .headerTab {
//             margin: 0 2rem;
//         }
//     }

//     @media screen and (min-width: 600px) {
//         & {
//             display: none;
//         }
//     }
// `