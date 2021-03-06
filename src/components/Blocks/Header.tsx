import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Logo, TabSwitcher, useTabSwitcher, Text } from '../Atoms';
import searchIcon from '../../assets/icons/search.svg'
import calendarAdd from '../../assets/icons/calendar-add.svg'
import settings from '../../assets/icons/header-settings-icon.svg'
// import useWindowSize from '../../../hooks/useWindowSize';
import Flex from './Flex'
import { Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export interface HeaderProps {

}

interface HeaderTab {
    id: string;
    title: string;
    link?: string;
    bottomTabs?: {
        id: string;
        title: string;
        link?: string;
    }[];
}

// interface RouteState {
//     route: string;
//     bottomTabs: HeaderTab[],
// }

// interface HeaderHookArgs {

// }

// interface HeaderHook {
//     renderHeader: Function
// }

const tabs: HeaderTab[] = [{ // List of tabs for rendering in header
    id: 'for_you',
    title: 'For You',
    link: '/app/forYou',
}, {
    id: 'explore',
    title: 'Explore',
    link: '/app/explore',
    bottomTabs: [{
        id: 'workouts',
        title: 'Workouts',
        link: '/app/explore',
    }, {
        id: 'Community',
        title: 'Community',
        link: '/app/community'
    }, {
        id: 'Plans',
        title: 'Plans',
        link: '/app/plans'
    }, {
        id: 'Challenges',
        title: 'Challenges',
        link: '/app/challenges'
    }, {
        id: 'Experiences',
        title: 'Experiences',
        link: '/app/experiences'
    }, {
        id: 'Members',
        title: 'Members',
        link: '/app/members'
    }],
}, {
    id: 'book',
    title: 'Book',
    link: '/app/book',
}, {
    id: 'chat',
    title: 'Chat',
    link: '/app/chat',
}, {
    id: 'profile',
    title: 'Profile',
    link: '/app/profile',
}]

const noAuthTabs: HeaderTab[] = [{
    id: 'explore',
    title: 'Explore',
    link: '/app/explore',
}, {
    id: 'book',
    title: 'Book',
    link: '/app/book',
}]



export default function Header(props: HeaderProps): JSX.Element {

    // const { bottomTabSwitcher, mainTabSwitcher } = props;

    const history = useHistory()

    const onSwitch = (newTabId: string | number) => {
        const tab = tabs.find(tab => tab.id === newTabId) || currentBottomTabs?.find(t => t.id === newTabId)
        if (tab && tab.link) {
            history.push(tab.link)
        }
    }

    const mainTabSwitcher = useTabSwitcher({ // Main tabs
        tabs: history.location.pathname === '/landing' ? noAuthTabs : tabs,
        layoutStyle: 'header',
        onSwitch
    })

    // const currentBottomTabs = bottomTabs.find(tab => history.location.pathname.includes(tab.route))?.bottomTabs || []
    const currentBottomTabs = tabs.find(t => t.id === mainTabSwitcher.currentTab)?.bottomTabs || []

    const bottomTabSwitcher = useTabSwitcher({ // Bottom tabs
        tabs: currentBottomTabs,
        layoutStyle: 'header-bottom',
        visualStyle: 'button',
        onSwitch
    })

    useEffect(() => {
        const tab = tabs.find(tab => tab.link === history.location.pathname || tab.bottomTabs?.find(t => t.link === history.location.pathname))
        if (tab) {
            mainTabSwitcher.setTab(tab.id || mainTabSwitcher.currentTab)
            if (tab.bottomTabs) {
                bottomTabSwitcher.setTab(tab.bottomTabs.find(t => t.link === history.location.pathname)?.id || bottomTabSwitcher.currentTab)
            }
        }
    }, [history, mainTabSwitcher])

    return (
        <>
            <StyledHeader>
                <HeaderSpaceGlobalStyle isBottomTabs={currentBottomTabs.length > 0} />
                <Logo style={{ justifyContent: 'flex-start', paddingLeft: '2rem', height: '100%' }} flex={'1'} dark />
                {/* {
                    screenWidth > 600 && 
                    <TabSwitcher 
                        tabStyle={screenWidth > 1000 ? {margin: '0 2rem'} : {}}
                        tabClassName='headerTab'
                        style={screenWidth > 1000 ? {justifyContent: 'center'} : {}}
                        flex={'5'}
                        tabs={tabs || []}
                        currentTab={currentTab || ''}
                        onSwitch={onTabSwitch}
                    />
                } */}
                <TabSwitcher
                    {...mainTabSwitcher.tabSwitcherProps}
                />
                <SearchContainer isVisable={true}>
                    <Route
                        path={["/app/forYou", "/app/explore", "/app/chat"]}
                    >
                        <Link to="/app/search">
                            <img src={searchIcon} alt="searchIcon" />
                        </Link>
                    </Route>
                    <Route
                        path={["/app/book"]}
                    >
                        <Link to="/app/book/book-appointment">
                            <img src={calendarAdd} alt="calendar add" />
                        </Link>
                    </Route>
                    <Route
                        path={["/app/profile"]}
                    >
                        <Link to="/app/profile/settings">
                            <img src={settings} alt="settings" />
                        </Link>
                    </Route>
                    <Route
                        path={["/landing"]}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Text noWrap size={'1rem'} color={'#B0B0B0'} weight={'700'}>Sign In</Text>
                        </Link>
                    </Route>
                </SearchContainer>
            </StyledHeader>
            {
                currentBottomTabs.length > 0 &&
                <HeaderBottom>
                    <StyledSwitcherContainer>
                        {/* <TabSwitcher 
                            tabs={bottomTabs || []}
                            currentTab={currentBottomTab || ''}
                            onSwitch={setBottomTab}
                        /> */}
                        <TabSwitcher
                            {...bottomTabSwitcher.tabSwitcherProps}
                        />
                    </StyledSwitcherContainer>
                    <SearchContainer headerBottom isVisable={false}>
                        <Link to="/app/search">
                            <img src={searchIcon} alt="searchIcon" />
                        </Link>
                    </SearchContainer>
                </HeaderBottom>
            }
        </>
    )
}


const StyledHeader = styled.header`
    position: fixed;
    z-index: 21;
    top: 0;
    width: 100vw;
    height: 5rem;
    background-color: #ffffff;
    border-bottom: 1px solid #E6E5E5;
    display: flex;
`

const StyledSwitcherContainer = styled(Flex)`
    overflow-x: scroll;
    @media screen and (max-width: 1000px) and (min-width: 600px) {
        & > div::after { // space for search button on pads
            content: '';
            min-width: 6rem;
            height: 1px;
        }
    }
`

const SearchContainer = styled.div<{ isVisable?: boolean, headerBottom?: boolean }>`
    /* flex: 1; */
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    min-width: 3rem;

    & img {
        height: 2.5rem;
        cursor: pointer;

        @media screen and (max-width: 800px) {
            height: 3rem;
        }

        ${p => !p.isVisable ? `
            display: none;
        ` : ''}
    }

    ${p => p.headerBottom ? `
        display: none;
        position: absolute;
        right: 0;
        margin: 0;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), white, white, white, white, white);
        width: 8rem;
        height: 100%;
        & > img {
            margin-left: 2rem;
        }
        @media screen and (max-width: 1000px) and (min-width: 600px) {
            & {
                display: flex;
            }
        }
    ` : `
        display: flex;
        // @media screen and (max-width: 1000px) and (min-width: 600px) {
        //     & {
        //         display: none;
        //     }
        // }
    `}
`

const HeaderBottom = styled.div`
    position: fixed;
    top: calc(5rem + 1px);
    width: 100vw;
    z-index: 21;
    background-color: #ffffff;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow-x: scroll; */

    /* @media screen and (max-width: 1000px) and (min-width: 600px) {
        & {
            width: calc(100vw - 4rem);
            padding-right: 4rem;
        }
    } */

    @media screen and (max-width: 1000px) {
        & {
            justify-content: flex-start;
        }
    }
`


const HeaderSpaceGlobalStyle = createGlobalStyle<{ isBottomTabs?: boolean }>`
    body {
        margin-top: calc(${p => p.isBottomTabs ? "8.5rem" : '5rem'} + 1px);
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