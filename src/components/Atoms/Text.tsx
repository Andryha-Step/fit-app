import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span<{center?: boolean, weight?: string}>`
    font-size: 0.8rem;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${(p) => p.weight || '400'};
    margin-bottom: 1rem;
    ${p => p.center && `
        text-align: center;
    `}
`

export interface TextProps {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
    weight?: string; 
}

export default function Text(props: TextProps): JSX.Element {

    const { children, center, weight, style } = props;
    
    return <StyledText style={style} center={center} weight={weight}>
        {children}
    </StyledText>
}
