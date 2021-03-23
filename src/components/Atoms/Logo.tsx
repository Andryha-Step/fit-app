import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'

export interface LogoProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    width?: string
    height?: string
    flex?: string
    dark?: boolean
}

export default function Logo(props: LogoProps): JSX.Element {

    const { style } = props;

    return (
        <StyledLogo {...props} style={style}>
            <StyledImg src={logo} alt='Moove logo' />
        </StyledLogo>
    )
}

const StyledImg = styled.img`
    height: 50%;
`

const StyledLogo = styled.div<LogoProps>`

    display: flex;
    justify-content: center;
    align-items: center;

    ${p => p.width ? `
        width: ${p.width};
    ` : ''}

    ${p => p.height ? `
        height: ${p.height};
    ` : ''}

    ${p => p.flex ? `
        flex: ${p.flex};
    ` : ''}

    ${p => p.dark ? `
        filter: invert(1);
    ` : ''}
`