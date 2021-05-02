import React from 'react'
import styled from 'styled-components'

export interface TextInputProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    placeholder?: string
    leftInner?: React.ReactNode

    mb?: string
    weight?: string
    fontSize?: string
}

export default function TextInput(props: TextInputProps): JSX.Element {

    const { style, placeholder, leftInner, mb, fontSize, weight } = props

    return (
        <StyledContainer
            mb={mb}
        >
            {
                leftInner || <></>
            }
            <StyledTextInput
                style={style}
                type="text"
                placeholder={placeholder}
                mb={mb}
                fontSize={fontSize}
                weight={weight}
                isLeftInner={!!leftInner}
            />
        </StyledContainer>
    )
}

const StyledTextInput = styled.input<TextInputProps & { isLeftInner?: boolean }>`

    font-size: ${p => p.fontSize || '1rem'};
    color: black;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${p => p.weight || '400'};
    border: 0;
    background: #F8F8F8;
    outline: 0;

    &&::placeholder {
        color: #B0B0B0;
    }


    ${p => p.isLeftInner ? `    
        padding-left: .5rem;
    ` : ''}
`

const StyledContainer = styled.div<TextInputProps>`
    background: #F8F8F8;
    border-radius: 1rem;
    padding: .6rem 1rem;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
`