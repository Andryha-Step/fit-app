import React from 'react'
import styled from 'styled-components'
import { TextProps } from '.'
import Text from './Text'

export interface IconProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    name: string
    size?: string
    ext?: string
    text?: string
    textProps?: TextProps
    mr?: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Icon(props: IconProps): JSX.Element {

    const { style, name, size, children, ext, onClick, text, textProps, mr } = props

    const src = require(`../../assets/icons/${name}.${ext || 'svg'}`).default

    return (
        <StyledIcon clickable={!!onClick} style={style} src={src} size={size || '1.5rem'} mr={mr}>
            {
                text && <Text size='1rem' {...textProps}>{text}</Text>
            }
            {children}
        </StyledIcon>
    )
}

const StyledIcon = styled.div<{ src: string, size: string, clickable: boolean, mr?: string }>`
    background: url(${p => p.src}) no-repeat 0 center;
    background-size: ${p => p.size};
    padding: .5rem 0;
    padding-left: calc(${p => p.size} + .5rem);
    ${p => p.clickable ? `
        cursor: pointer;
    ` : ''}

    ${p => p.mr ? `
        margin-right: ${p.mr}
    ` : ''}
`