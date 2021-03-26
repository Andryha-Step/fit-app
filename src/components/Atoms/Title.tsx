import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span<TitleProps>`
    font-size: ${p => p.size || '1.3rem'};
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${p => p.weight || 'bold'};
    margin-bottom: 0.8rem;
    ${p => p.center ? `
        text-align: center;
    ` : ''}
    ${p => p.color ? `
        color: ${p.color};
    ` : ''}
    ${p => p.noMargin ? `
        margin: 0;
    ` : ''}
    ${p => p.clickable ? `
        cursor: pointer;
    ` : ''}
    ${p => p.noWrap ? `
        white-space: nowrap;
    ` : ''}
`

export interface TitleProps {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
    color?: string;
    size?: string;
    weight?: string;
    noMargin?: boolean
    clickable?: boolean;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
    noWrap?: boolean
}

export default function Title(props: TitleProps): JSX.Element {

    const { children } = props;
    
    return <StyledTitle {...props}>
        {children}
    </StyledTitle>
}
