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
`

export interface TitleProps {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
    color?: string;
    size?: string;
    weight?: string;
}

export default function Title(props: TitleProps): JSX.Element {

    const { children } = props;
    
    return <StyledTitle {...props}>
        {children}
    </StyledTitle>
}
