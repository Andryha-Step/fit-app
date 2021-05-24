import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TabSwitcher } from '../Atoms'
import homeFilled from '../../assets/icons/homeFilled.svg'
import home from '../../assets/icons/home.svg'
import expolore from '../../assets/icons/explore.svg'
import exploreFilled from '../../assets/icons/exploreFilled.svg'
import book from '../../assets/icons/book.svg'
import bookFilled from '../../assets/icons/bookFilled.svg'
import chat from '../../assets/icons/chat.png'
import chatFilled from '../../assets/icons/chatFilled.svg'
import exampleAvatar from '../../assets/images/example-avatar-4.png'
import { useHistory, useLocation } from 'react-router'

export interface BottomTabNavProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function BottomTabNav(props: BottomTabNavProps): JSX.Element {

    const { style } = props
    const [currentTab, setTab] = useState('forYou')
    const [isHidden, setIsHidden] = useState(false)
    const location = useLocation();
    const history = useHistory();

    const tabs = location.pathname === '/landing' ? noAuthTabs : authTabs;

    useEffect(() => {
        let found = false;
        tabs.forEach(tab => {
            if (tab.links.find(l => location.pathname.includes(l))) {
                setTab(tab.id)
                found = true;
            }
        })

        if (!found) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }

    }, [location.pathname, tabs])

    const onTabSwitch = (tab_id: string) => {
        tabs.forEach(tab => {
            if (tab.id === tab_id) {
                history.push(tab.links[0])
            }
        })
        setTab(tab_id)
    }

    return (
        <StyledBottomTabNav style={style} isHidden={isHidden}>
            <TabSwitcher
                tabs={tabs}
                currentTab={currentTab}
                onSwitch={onTabSwitch}
                fontWeight={'400'}
                fontSize="0.8rem"
                showTitleOnlyWhenActive
            />
        </StyledBottomTabNav>
    )
}

const authTabs = [
    {
        id: 'forYou',
        title: 'For you',
        icon: home,
        iconActive: homeFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/forYou'],
    },
    {
        id: 'exp',
        title: 'Explore',
        icon: expolore,
        iconActive: exploreFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/explore', '/app/community', '/app/plans', '/app/challenges', '/app/experiences', '/app/members'],
    },
    {
        id: 'book',
        title: 'Book',
        icon: book,
        iconActive: bookFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/book'],
    },
    {
        id: 'chat',
        title: 'Chat',
        icon: chat,
        iconActive: chatFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/chat'],
    },
    {
        id: 'profile',
        title: 'Profile',
        icon: exampleAvatar,
        iconActive: exampleAvatar,
        imgStyle: { height: '1.5rem', borderRadius: '1rem' },
        links: ['/app/profile'],
    }
]

const noAuthTabs = [
    {
        id: 'home',
        title: 'Home',
        icon: home,
        iconActive: homeFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/landing'],
    },
    {
        id: 'exp',
        title: 'Explore',
        icon: expolore,
        iconActive: exploreFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/explore'],
    },
    {
        id: 'book',
        title: 'Book',
        icon: book,
        iconActive: bookFilled,
        imgStyle: { height: '1.5rem' },
        links: ['/app/book'],
    }
]

const StyledBottomTabNav = styled.div<{ isHidden?: boolean; }>`
    width: calc(100vw - 2rem);
    position: fixed;
    z-index: 20;
    bottom: 0;
    left:0;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5rem;
    padding: 1rem 1rem;

    ${p => p.isHidden ? `
        display: none;
    ` : ''}

    @media screen and (min-width: 800px) {
        & {
            display: none;
        }
    }
`