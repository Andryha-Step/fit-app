import React from 'react'
import styled from 'styled-components'
import Avatar from '../Chat/Avatar'
import exampleAvatar from '../../../assets/images/example-avatar-1.png'
import { Button, Title } from '../../Atoms'
import Flex from '../../Blocks/Flex'

export interface MemberProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    name?: string
    buttonText?: string
    avatarSrc?: string
}

export default function Member(props: MemberProps): JSX.Element {

    const { style, name, buttonText, avatarSrc } = props

    return (
        <StyledMember style={style}>
            <Flex ai='center' flex={'1'}>
                <Avatar
                    imageAvatarSrc={avatarSrc || exampleAvatar}
                />
                <Title weight="600">{name || 'Marho'}</Title>
            </Flex>
            <Flex ai="center">
                <Button primary padding=".5rem 0" width="10rem" noShadow>{buttonText || 'MESSAGE'}</Button>
            </Flex>
        </StyledMember>
    )
}

const StyledMember = styled.div`
    padding: 1rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 2rem;
    margin-bottom: .5rem;
    display: flex;
`