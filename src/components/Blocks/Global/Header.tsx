import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Logo, TabSwitcher } from '../../Atoms';
import searchIcon from '../../../assets/icons/search.svg'
import useWindowSize from '../../../hooks/useWindowSize';
import useTabSwitcher from '../../../hooks/useTabSwitcher';
import Flex from '../Flex'
import { useHistory } from 'react-router';

export interface HeaderProps {
    search?: boolean;
}

interface HeaderTab {
    id: string;
    title: string;
    link: string;
}

type HeaderId = 'for_you' | 'explore' | 'book' | 'chat' | 'profile'
const tabs: HeaderTab[] = [{
    id: 'for_you',
    title: 'For You',
    link: '/app/forYou',
},{
    id: 'explore',
    title: 'Explore',
    link: '/app/explore',
},{
    id: 'book',
    title: 'Book',
    link: '/app/book',
},{
    id: 'chat',
    title: 'Chat',
    link: '/app/chat',
},{
    id: 'profile',
    title: 'Profile',
    link: '/app/profile',
}]

const bottomTabs = [
    {
        id: 'explore',
        tabs: [{
            id: 'workouts',
            title: 'Workouts',
        },{
            id: 'Community',
            title: 'Community',
        },{
            id: 'Plans',
            title: 'Plans',
        },{
            id: 'Challenges',
            title: 'Challenges',
        },{
            id: 'Experiences',
            title: 'Experiences',
        },{
            id: 'Shop',
            title: 'Shop',
        }],
    },
    {
        id: 'for_you',
        tabs: [{
            id: 'fitness',
            title: 'Fitness'
        }, {
            id: 'experiences',
            title: 'Experiences'
        }]
    }
]


export default function Header(props:HeaderProps): JSX.Element {

    const { width: screenWidth } = useWindowSize()
    const history = useHistory()

    const [currentTab, setTab] = useState('for_you')
	// const [currentBottomTab, setBottomTab] = useState('fitness')
    console.log(bottomTabs.find(tab => tab.id === currentTab), currentTab, bottomTabs)
    const { tabSwitcher: bottomTabSwitcher } = useTabSwitcher({
        tabs: bottomTabs.find(tab => tab.id === currentTab)?.tabs || [],
        tabSwitcherProps: {
            activeTabStyle: {background: "rgba(48, 143, 171, 0.2)"},
            style: {justifyContent: 'center', alignItems: 'center', height: '100%'},
            tabStyle: bottomTabStyle
        }
    })

    
    useEffect(() => {
        tabs.forEach(tab => {
            if (history.location.pathname.includes(tab.link)) {
                setTab(tab.id)
            }
        })
    }, [history.location.pathname])

    const onTabSwitch = (tab_id: string) => {
        tabs.forEach(tab => {
            if (tab.id === tab_id) {
                history.push(tab.link)
            }
        })
        setTab(tab_id)
    }

    // let bottomTabs;
    // switch(currentTab) {
    //     case 'for_you':
    //         bottomTabs = ForYouBottomTabs; break;
    //     case 'explore':
    //         bottomTabs = ExploreBottomTabs; break;
    //     default:
    //         break;
    // }

    return (
        <>
            <StyledHeader>
                <HeaderSpace />
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
                        onSwitch={onTabSwitch}
                    />
                }
                <SearchContainer isVisable={props.search} >
                    <img src={searchIcon} alt="searchIcon" />
                </SearchContainer>
            </StyledHeader>
            {
                bottomTabs &&
                <HeaderBottom>
                    <Flex style={{overflowX: 'scroll'}}>
                        {/* <TabSwitcher 
                            tabs={bottomTabs || []}
                            currentTab={currentBottomTab || ''}
                            onSwitch={setBottomTab}
                        /> */}
                        { bottomTabSwitcher }
                    </Flex>
                    <SearchContainer headerBottom isVisable={props.search}>
                        <img src={searchIcon} alt="searchIcon" />
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

    
`

const bottomTabStyle = {
    margin: '0 0.5rem',
    background: '#F8F8F8',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
    color: 'black',
    fontSize: '0.9rem'
} as React.CSSProperties

const HeaderSpace = createGlobalStyle`
    body {
        margin-top: calc(8.5rem + 1px);
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