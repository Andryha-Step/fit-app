import React, { FocusEventHandler, useState } from 'react'
import styled from 'styled-components'
import { Title } from '.'

export interface TextInputProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    placeholder?: string
    leftInner?: React.ReactNode
    rightInner?: React.ReactNode
    disabled?: boolean
    readOnly?: boolean,
    onClick?: () => void,
    onFocus?: FocusEventHandler<HTMLInputElement>,
    value?: string,
    id?: string

    mb?: string
    weight?: string
    fontSize?: string
    title?: string
}

export default function TextInput(props: TextInputProps): JSX.Element {

    const { style, placeholder, leftInner, rightInner, mb, fontSize, weight, children, title, disabled, readOnly, onClick, onFocus, value, id } = props

    const [inputValue, setValue] = useState('');

    return (
        <Label style={style}>
            {
                children ||
                (
                    title && <Title weight='400' size='1.1rem' color="#636363">
                        {title}
                    </Title>
                )
            }
            <StyledContainer
                mb={mb}
                isLabel={(!!children) || (!!title)}
            >
                {
                    leftInner || <></>
                }
                <StyledTextInput
                    type="text"
                    id={id}
                    disabled={disabled}
                    readOnly={readOnly}
                    onClick={onClick}
                    placeholder={placeholder}
                    mb={mb}
                    fontSize={fontSize}
                    weight={weight}
                    isLeftInner={!!leftInner}
                    isRightInner={!!rightInner}
                    value={inputValue || value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={onFocus}
                />
                {
                    rightInner || <></>
                }
            </StyledContainer>
        </Label>
    )
}

const StyledTextInput = styled.input<TextInputProps & { isLeftInner?: boolean, isRightInner?: boolean }>`

    font-size: ${p => p.fontSize || '1rem'};
    color: black;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: ${p => p.weight || '400'};
    border: 0;
    background: #F8F8F8;
    outline: 0;
    flex: 1;

    &&::placeholder {
        color: #B0B0B0;
    }

    ${p => p.isLeftInner ? `    
        padding-left: .5rem;
    ` : ''}

    ${p => p.isRightInner ? `    
        padding-right: .5rem;
    ` : ''}
`

const StyledContainer = styled.div<TextInputProps & { isLabel: boolean }>`
    background: #F8F8F8;
    border-radius: 1rem;
    padding: 0 1rem;
    min-height: 3.5rem;
    display: flex;
    align-items: center;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}

    ${p => p.isLabel ? `
        margin-top: .4rem;
    ` : ''}
`

const Label = styled.label`

`