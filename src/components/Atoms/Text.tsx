import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span<TextProps>`
    font-size: ${(p) => p.size || '0.8rem'};
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${(p) => p.weight || '400'};
    margin-bottom: 1rem;

    ${p => p.center ? `
        text-align: center;
    ` : ''}

    ${p => p.color ? `
        color: ${p.color};
    ` : ''}

    ${p => p.noMargin ? `
        margin: 0;
    ` : ''}
`

export interface TextProps {
    children: React.ReactNode
    center?: boolean
    style?: React.CSSProperties
    color?: string
    weight?: string;
    noMargin?: boolean,
    size?: string
}

export default function Text(props: TextProps): JSX.Element {

    const { children } = props;
    
    return <StyledText {...props}>
        {children}
    </StyledText>
}
