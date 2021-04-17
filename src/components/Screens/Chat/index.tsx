import React from 'react'
import styled from 'styled-components'
import Contact from './Contact';
import Header from './Header';
import MessageInput from './MessageInput';
import exampleAvatar from '../../../assets/images/example-avatar-5.png'
import { Route, useHistory } from 'react-router';

export interface ChatProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Chat(props: ChatProps): JSX.Element {

    return (
        <div>
            <Route exact path="/app/chat">
                <Contacts />
            </Route>
            <Route exact path="/app/chat/dialog">
                <Dialog />
            </Route>
        </div>
    )
}

function Contacts(props: ChatProps): JSX.Element {
    const { style } = props

    return (
        <StyledChat style={style}>
            <Contact
                title="Coach"
                unread={'2'}
                time="11:17 PM"
                lastMessage="Hello!"
                imageAvatarSrc={exampleAvatar}
            />
            <Contact
                title="Nutrition 101 by Coach"
                unread={'147'}
                participants="20 Participants"
                avatarColor={'linear-gradient(135deg, #9BFFB1 0%, #7BFF88 100%);'}
            />
            <Contact
                title="General Group Chat"
                unread={'147'}
                participants="20 Participants"
                avatarColor={'#F2994A'}
            />
        </StyledChat>
    )

}

function Dialog(props: ChatProps): JSX.Element {
    return (
        <div>
            <Header
                imageAvatarSrc={exampleAvatar}
            />
            <StyledChat>
                <MessageInput></MessageInput>
            </StyledChat>
        </div>
    )
}

const StyledChat = styled.div`
    padding: 1.5rem;
    max-width: calc(100vw - 1.5rem);

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 10vw;
        max-width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 15vw;
        max-width: 70vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }
`