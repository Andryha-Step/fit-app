import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span<{center?: boolean}>`
    font-size: 0.8rem;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    ${p => p.center && `
        text-align: center;
    `}
`

export interface TextProps {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
}

export function Text(props: TextProps): JSX.Element {

    const { children, center, style } = props;
    
    return <StyledText style={style} center={center}>
        {children}
    </StyledText>
}
