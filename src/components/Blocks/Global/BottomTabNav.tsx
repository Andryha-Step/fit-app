import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TabSwitcher } from '../../Atoms'
import homeFilled from '../../../assets/icons/homeFilled.svg'
import expolore from '../../../assets/icons/explore.svg'
import book from '../../../assets/icons/book.svg'
import chat from '../../../assets/icons/chat.png'
import exampleAvatar from '../../../assets/images/example-avatar-4.png'
import { useHistory } from 'react-router'

export interface BottomTabNavProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function BottomTabNav(props: BottomTabNavProps): JSX.Element {

    const { style } = props
    const [currentTab, setTab] = useState('forYou')
    const history = useHistory()

    useEffect(() => {
        tabs.forEach(tab => {
            if (history.location.pathname.includes(tab.link)) {
                setTab(tab.id)
            }
        })
    }, [history])

    const onTabSwitch = (tab_id: string) => {
        tabs.forEach(tab => {
            if (tab.id === tab_id) {
                history.push(tab.link)
            }
        })
        setTab(tab_id)
    }

    const tabs = [
        {
            id: 'forYou',
            title: 'For you',
            icon: expolore,
            iconActive: homeFilled,
            imgStyle: {height: '1.5rem'},
            link: '/app/forYou',
        },
        {
            id: 'exp',
            title: 'Explore',
            icon: expolore,
            iconActive: homeFilled,
            imgStyle: {height: '1.5rem'},
            link: '/app/explore',
        },
        {
            id: 'book',
            title: 'Book',
            icon: book,
            iconActive: homeFilled,
            imgStyle: {height: '1.5rem'},
            link: '/app/book',
        },
        {
            id: 'chat',
            title: 'Chat',
            icon: chat,
            iconActive: homeFilled,
            imgStyle: {height: '1.5rem'},
            link: '/app/chat',
        },
        {
            id: 'profile',
            title: 'Profile',
            icon: exampleAvatar,
            iconActive: exampleAvatar,
            imgStyle: {height: '1.5rem', borderRadius: '1rem'},
            link: '/app/profile',
        }
    ]

    return (
        <StyledBottomTabNav style={style}>
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

const StyledBottomTabNav = styled.div`
    width: calc(100vw - 2rem);
    position: fixed;
    z-index: 20;
    bottom: 0;
    left:0;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5rem;
    padding: 1rem 1rem;

    @media screen and (min-width: 600px) {
        & {
            display: none;
        }
    }
`