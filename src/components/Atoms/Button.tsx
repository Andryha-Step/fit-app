import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    children: React.ReactNode
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    primary?: boolean
    transparent?: boolean
    width?: string
    small?: boolean
    noMargin?: boolean
    fontSize?: string
    color?: string
    background?: string
    noShadow?: boolean,
}

export default function Button(props: ButtonProps): JSX.Element {

    const { children } = props

    return (
        <ButtonStyled
            {...props}
        >
            {children}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button<ButtonProps>`
    padding: ${p => p.small ? '0.4rem' : '0.9rem'};
    margin: 0 1rem;
    margin-bottom: 1rem;
    ${p => !p.noShadow ? `
        box-shadow: 0px 4px 20px rgba(59, 152, 179, 0.3);
    ` : ''}
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    /* letter-spacing: 0.6px; */
    user-select: none;
    outline: none;
    font-size: ${p => p.fontSize || '1rem'};
    text-transform: uppercase;
    transition: 0.2s all;
    ${p => p.width && `
        width: ${p.width};
    `}
    ${p => p.primary ? `
        background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
        // &:hover {
        //     background: #FFFFFF;
        //     color: #308FAB;
        //     cursor: pointer;
        // }
    ` : (
        p.transparent ? `
            background: rgba(196, 196, 196, 0.05);
            color: #FFFFFF;
            border: 2px solid #F8F8F8;
            padding: ${p.small ? 'calc(0.4rem - 4px);' : 'calc(0.9rem - 4px)'};
            cursor: pointer;
            // &:hover {
            //     background: #FFFFFF;
            //     color: #308FAB;
            //     cursor: pointer;
            // }
        ` : `
            background: #FFFFFF;
            color: #308FAB;
            border: 0;
            cursor: pointer;
            // &:hover {
            //     background: #308FAB;
            //     color: #FFFFFF;
            //     cursor: pointer;
            // }
        `
    )}

    ${p => p.noMargin ? 'margin: 0;' : ''}

    ${p => p.background ? `
        background: ${p.background}
    ` : ''}

    ${p => p.color ? `
        color: ${p.color}
    ` : ''}
`
