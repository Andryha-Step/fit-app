import React from 'react'
import styled from 'styled-components'
import Contact from './Contact';
import Header from './Header';
import MessageInput from './MessageInput';
import Message from './Message';
import exampleAvatar1 from '../../../assets/images/example-avatar-5.png'
import exampleAvatar2 from '../../../assets/images/example-avatar-6.png'
import exampleAvatar3 from '../../../assets/images/example-avatar-7.png'
import { Route, useHistory } from 'react-router';
import useChatContacts from '../../../hooks/API/useChatContacts';

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
            <Route exact path="/app/chat/group">
                <Group />
            </Route>
        </div>
    )
}

function Contacts(props: ChatProps): JSX.Element {
    const { style } = props

    const contacts = useChatContacts()

    return (
        <StyledChat style={style}>
            {
                contacts?.map(el => (
                    <Contact
                        {...el}
                    />
                ))
            }
            {
                !contacts && 'loading' // TODO
            }
        </StyledChat>
    )

}

function Dialog(props: ChatProps): JSX.Element {
    return (
        <div>
            <Header
                imageAvatarSrc={exampleAvatar1}
            />
            <StyledChat>
                <Message>Lorem ipsum dolor sit amet</Message>
                <Message endOfGroup>Lorem ipsum</Message>
                <Message my>Lorem ipsum </Message>
                <MessageInput></MessageInput>
            </StyledChat>
        </div>
    )
}

function Group(props: ChatProps): JSX.Element {
    return (
        <div>
            <Header
                imageAvatarSrc={exampleAvatar1}
            />
            <StyledChat>
                <Message
                    contactTitle="John Kennedy"
                    imageAvatarSrc={exampleAvatar2}
                    withAvatar
                    endOfGroup
                    titleColor={'#429FBA'}
                >Lorem ipsum dolor sit amet, consectetur</Message>
                <Message
                    titleColor={'#BA4242'}
                    contactTitle="Sara Kross"
                    imageAvatarSrc={exampleAvatar3}
                >Lorem ipsum dolor sit amet</Message>
                <Message
                    withAvatar
                    endOfGroup
                    imageAvatarSrc={exampleAvatar3}
                >Lorem ipsum </Message>
                <Message
                    contactTitle="Ilya"
                    imageAvatarSrc={exampleAvatar3}
                    my
                    endOfGroup
                >Lorem ipsumamet, consectetur</Message>
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