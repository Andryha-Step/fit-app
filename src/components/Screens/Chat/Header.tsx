import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import back from '../../../assets/icons/chatBack.svg'
import notificationDisable from '../../../assets/icons/notification-disable.png'
import { Text, Title } from '../../Atoms'
import Flex from '../../Blocks/Flex'
import { Link } from 'react-router-dom'

export interface HeaderProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    imageAvatarSrc?: string,
    title?: string
    avatarColor?: string
}

export default function Header(props: HeaderProps): JSX.Element {

    const { style, imageAvatarSrc, avatarColor, title } = props

    return (
        <StyledHeader style={style}>
            <Link to="/app/chat">
                <BackButton src={back} alt="back" />
            </Link>
            <Flex flex={'1'}>
                <Avatar
                    imageAvatarSrc={imageAvatarSrc}
                    avatarColor={avatarColor}
                    title={title}
                    size={'3rem'}
                />
                <Contact>
                    <Title weight={'500'} size={'1.4rem'}>Coach</Title>
                    <Text color={'#B0B0B0'}>last seen 18 min ago</Text>
                </Contact>
            </Flex>
            <NotificationButton
                src={notificationDisable}
            />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #F7F7F7;

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1rem 10vw;
        max-width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1rem 15vw;
        max-width: 70vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1rem 20vw;
        max-width: 60vw;
    }
`

const BackButton = styled.img`
    height: 2.5rem;
    margin-right: 2rem;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const NotificationButton = styled.img`
    height: 2.5rem;
`