import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span<TextProps>`
    font-size: ${(p) => p.size || '0.8rem'};
    color: black;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${(p) => p.weight || '400'};

    ${p => p.center ? `
        text-align: center;
    ` : ''}

    ${p => p.color ? `
        color: ${p.color};
    ` : ''}

    ${p => p.noWrap ? `
        white-space: nowrap;
    ` : ''}

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
    
    ${p => p.mr ? `
        margin-right: ${p.mr};
    ` : ''}
`

export interface TextProps {
    children: React.ReactNode
    center?: boolean
    style?: React.CSSProperties
    color?: string
    weight?: string;
    size?: string
    noWrap?: boolean
    mb?: string
    mr?: string
}

export default function Text(props: TextProps): JSX.Element {

    const { children } = props;

    return <StyledText {...props}>
        {children}
    </StyledText>
}
