import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo, TabSwitcher } from '../../Atoms';
import searchIcon from '../../../assets/icons/search.svg'
import useWindowSize from '../../../customHooks/useWindowSize';

export interface HeaderProps {
    search?: boolean;
}

export default function Header(props:HeaderProps): JSX.Element {

    const [currentTab, setCurrentTab] = useState('fy')
    const { width: screenWidth } = useWindowSize()
    const tabs = [{
        id: 'for_you',
        title: 'For You',
    },{
        id: 'expore',
        title: 'Explore',
    },{
        id: 'book',
        title: 'Book',
    },{
        id: 'chat',
        title: 'Chat',
    },{
        id: 'profile',
        title: 'Profile',
    }]

    return (
        <StyledHeader>
            <Logo style={{justifyContent: 'flex-start', paddingLeft: '2rem', height: '100%'}} flex={'1'} dark/>
            {
                screenWidth > 600 && 
                <TabSwitcher 
                    tabStyle={screenWidth > 1000 ? {margin: '0 2rem'} : {}}
                    tabClass='headerTab'
                    style={screenWidth > 1000 ? {justifyContent: 'center'} : {}}
                    flex={'5'}
                    tabs={tabs}
                    currentTab={currentTab}
                    onSwitch={setCurrentTab}
                />
            }
            <SearchContainer isVisable={props.search} >
                <img src={searchIcon} alt="searchIcon" />
            </SearchContainer>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100vw;
    height: 5rem;
    background-color: #ffffff;
    border-bottom: 1px solid #E6E5E5;
    display: flex;
`

const SearchContainer = styled.div<{isVisable?: boolean}>`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 2rem;

    & > img {
        height: 50%;
        cursor: pointer;

        ${p => !p.isVisable ? `
            display: none;
        ` : ''}
    }

    @media screen and (max-width: 1000px) and (min-width: 600px) {
        & {
            display: none;
        }
    }
`

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