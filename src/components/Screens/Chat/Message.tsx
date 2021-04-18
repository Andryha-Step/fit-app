import React from 'react'
import styled from 'styled-components'
import { Text, Title } from '../../Atoms'
import Avatar from './Avatar'
import readStatus from '../../../assets/icons/read.svg'

export interface MessageProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    imageAvatarSrc?: string
    titleColor?: string
    contactTitle?: string
    my?: boolean
    withAvatar?: boolean
    endOfGroup?: boolean
}

// const statusImages = {
//     'read': readStatus
// }

export default function Message(props: MessageProps): JSX.Element {

    const { style, imageAvatarSrc, titleColor, contactTitle, children, my, withAvatar, endOfGroup } = props

    return (
        <StyledMessage style={style} my={my} endOfGroup={endOfGroup}>
            {
                !my && (
                    <Avatar
                        imageAvatarSrc={imageAvatarSrc}
                        avatarColor={!imageAvatarSrc ? titleColor : ''}
                        title={contactTitle}
                        size={'2.8rem'}
                        style={!withAvatar ? { opacity: 0 } : {}}
                    />
                )
            }
            <MessageBubble my={my} endOfGroup={endOfGroup}>
                {
                    !my && <Title color={titleColor} size={'1rem'}>{contactTitle}</Title>
                }
                <MessageText>
                    {children}
                    <MessageStatusSpacer />
                </MessageText>
                <MessageStatusContainer>
                    <Text style={{ marginRight: '.2rem' }} color={my ? 'white' : '#C6C6C6'}>11:45 PM</Text>
                    <img src={readStatus} alt="message read" style={my ? { filter: 'brightness(4)' } : {}} />
                </MessageStatusContainer>
            </MessageBubble>
        </StyledMessage>
    )
}

const StyledMessage = styled.div<{ my?: boolean, endOfGroup?: boolean }>`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-bottom: .3rem;
    ${p => p.my ? `
        justify-content: flex-end;
    ` : ''}
    ${p => p.endOfGroup ? `
        margin-bottom: .6rem;
    ` : ''}
`

const MessageBubble = styled.div<{ my?: boolean, endOfGroup?: boolean }>`
    font-family: 'Poppins';
    display: flex;
    flex-direction: column;
    padding: .5rem 1.3rem;
    padding-right: 1rem;
    border-radius: 1.5rem;
    position: relative;
    max-width: 60%;

    ${p => p.endOfGroup && p.my ? `
        border-bottom-right-radius: 0;
    ` : ''}

    ${p => p.endOfGroup && !p.my ? `
        border-bottom-left-radius: 0;
    ` : ''}

    ${p => p.my ? `
        background: linear-gradient(100.24deg, #6EBFD7 15.3%, #5EAEC6 84.7%);
        color: white;
    ` : `
        background-color: #F8F8F7;
        color: #878787;
    `}
`

const MessageText = styled.div`
    font-family: 'Poppins';
`

const MessageStatusContainer = styled.div`
    display: inline;
    margin-left: .5rem;
    position: absolute;
    right: .6rem;
    bottom: .5rem;
`

const MessageStatusSpacer = styled.div`
    min-width: 4.5rem;
    display: inline-block;
    opacity: 0;
`