import React from 'react'
import styled from 'styled-components'

export interface TagProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    width?: string
}

export default function Tag(props: TagProps): JSX.Element {

    const { children } = props

    return (
        <StyledTag {...props}>
            {children}
        </StyledTag>
    )
}

const StyledTag = styled.div<TagProps>`
    padding: 0 1rem;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    font-size: 0.8rem;
    color: #636363;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    margin: 0.5rem 0;

    ${p => p.width ? `
        width: ${p.width};
    ` : ''}
`