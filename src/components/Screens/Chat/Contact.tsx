import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import read from '../../../assets/icons/read.svg'
import { ChatContact } from '../../../types/Chat'
import { Text, Title } from '../../Atoms'
import Avatar from './Avatar'

export interface ContactProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    // title: string,
    // lastMessage?: string
    // unread?: string,
    // time?: string,
    // participants?: string
    // imageAvatarSrc?: string
    // avatarColor?: string
}


export default function Contact(props: ChatContact & ContactProps): JSX.Element {

    const { style, title, lastMessage, unread, participants, avatarUrl, contactColor, type } = props

    const history = useHistory()

    return (
        <StyledContact style={style} onClick={() => history.push(`/app/chat/${type}`)}>
            <Avatar
                imageAvatarSrc={avatarUrl}
                avatarColor={contactColor}
                title={title}
                size={'3rem'}
            />
            <InfoContainer>
                <Header>
                    <Title size={'1.2rem'} weight={'600'}>{title}</Title>
                    {
                        lastMessage && (
                            <Text color={'#B0B0B0'}>
                                {new Date(lastMessage.time || 0).toLocaleTimeString('en', { hour12: true, hour: '2-digit', minute: '2-digit' })}
                            </Text>
                        )
                    }
                </Header>
                <SubInfo>
                    {
                        lastMessage && (
                            <LastMessage>
                                <img src={read} alt="read" />
                                <Text size={'.9rem'} color={'#636363'}>{lastMessage.text}</Text>
                            </LastMessage>
                        )
                    }
                    {
                        participants && (
                            <LastMessage>
                                <Title size={'1rem'} color={'#429FBA'} weight={'500'}>{participants} Participants</Title>
                            </LastMessage>
                        )
                    }
                    {
                        unread && (
                            <Unread>{unread}</Unread>
                        )
                    }
                </SubInfo>
            </InfoContainer>
        </StyledContact>
    )
}

const StyledContact = styled.div`
    display: flex;
    width: calc(100% - 2rem);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    padding: 1.2rem;
    border-radius: 1.5rem;
    margin-bottom: .7rem;
    cursor: pointer;
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-bottom: .1rem; */
`

const SubInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Unread = styled.div`
    width: 3rem;
    font-family: 'Poppins';
    background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);
    border-radius: 2rem;
    padding: .2rem 0;
    text-align: center;
    color: white;
    font-size: .8rem;
`

const LastMessage = styled.div`
    && > img {
        margin-right: .2rem;
    }
`