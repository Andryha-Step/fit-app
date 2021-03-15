import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span<{center?: boolean}>`
    font-size: 1.3rem;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    ${p => p.center && `
        text-align: center;
    `}
`

export interface TitleProps {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
}

export default function Title(props: TitleProps): JSX.Element {

    const { children, center, style } = props;
    
    return <StyledTitle style={style} center={center}>
        {children}
    </StyledTitle>
}
