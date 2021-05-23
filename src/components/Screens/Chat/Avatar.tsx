import React, { useRef } from 'react'
import styled from 'styled-components'
import editButton from '../../../assets/icons/edit-button.svg'
import example_avatar1 from '../../../assets/images/example-avatar-1.png'
import example_avatar2 from '../../../assets/images/example-avatar-2.png'
import example_avatar3 from '../../../assets/images/example-avatar-3.png'
import example_avatar4 from '../../../assets/images/example-avatar-4.png'
import example_avatar5 from '../../../assets/images/example-avatar-5.png'
import example_avatar6 from '../../../assets/images/example-avatar-6.png'
import example_avatar7 from '../../../assets/images/example-avatar-7.png'

const EXAMPLE_AVATARS = [ // For testing
    example_avatar1,
    example_avatar2,
    example_avatar3,
    example_avatar4,
    example_avatar5,
    example_avatar6,
    example_avatar7
]

export interface AvatarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    imageAvatarSrc?: string
    avatarColor?: string
    title?: string
    size?: string
    mr?: string

    edit?: boolean
    onEditClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Avatar(props: AvatarProps): JSX.Element {

    const { style, avatarColor, title, size, mr, onEditClick } = props
    let { imageAvatarSrc } = props

    const tesing_avatar = useRef(EXAMPLE_AVATARS[~~(Math.random() * EXAMPLE_AVATARS.length)]).current

    if (!avatarColor && !imageAvatarSrc) {
        imageAvatarSrc = tesing_avatar
    }

    return (
        <AvatarContainer style={style} mr={mr}>
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
            {
                onEditClick && <EditButton onClick={onEditClick} />
            }
        </AvatarContainer>
    )
}

const ImageAvatar = styled.img<{ size?: string }>`
    height: ${p => p.size || '3.5rem'};
    width: ${p => p.size || '3.5rem'};
    border-radius: 10rem;
`

const ColorAvatar = styled.div<{ color?: string, size?: string }>`
    height: ${p => p.size || '3.5rem'};
    width: ${p => p.size || '3.5rem'};
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${p => p.color};
    font-size: 1.4rem;
    font-family: 'Poppins';
    font-weight: 500;
`

const AvatarContainer = styled.div<{ mr?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${p => p.mr ? `
        margin-right: ${p.mr};
    ` : ''}
`

const EditButton = styled.div`
    background: #429FBA url(${editButton}) no-repeat 60% center;
    background-size: 1rem;
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
`
