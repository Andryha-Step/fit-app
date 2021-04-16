import React from 'react'
import styled from 'styled-components'

export interface AvatarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    imageAvatarSrc?: string
    avatarColor?: string
    title?: string
    size?: string
}

export default function Avatar(props: AvatarProps): JSX.Element {

    const { style, imageAvatarSrc, avatarColor, title, size } = props

    return (
        <AvatarContainer style={style}>
            {
                imageAvatarSrc && (
                    <ImageAvatar size={size} src={imageAvatarSrc} alt="avatar" />
                )
            }
            {
                avatarColor && title && (
                    <ColorAvatar size={size} color={avatarColor}>{title[0]}</ColorAvatar>
                )
            }
        </AvatarContainer>
    )
}

const ImageAvatar = styled.img<{ size?: string }>`
    height: ${p => p.size || '3.5rem'};
    width: ${p => p.size || '3.5rem'};
    border-radius: 10rem;
    margin-right: 1rem;
`

const ColorAvatar = styled.div<{ color?: string, size?: string }>`
    height: ${p => p.size || '3.5rem'};
    width: ${p => p.size || '3.5rem'};
    border-radius: 10rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${p => p.color};
    font-size: 1.4rem;
    font-family: 'Poppins';
    font-weight: 500;
`

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`