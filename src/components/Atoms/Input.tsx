import React from 'react';
import styled from 'styled-components'

export interface InputProps {
    children?: React.ReactNode
    type?: 'text' | 'email' | 'password' | 'checkbox' | 'number'
    error?: string
    placeholder?: string
    id?: string
    name?: string
    value?: string
    style?: React.CSSProperties
    color?: 'white' | 'black'
    onFocus?: (e: any) => void
    onChange?: (e: any) => void
    onKeyDown?: (e: any) => void,
    ref?: any
    pattern?: string
    inputmode?: string
    step?: number
}


export default React.forwardRef((props: InputProps, ref) => {
    let inputProps = {...props};
    inputProps.children = null;

    if (props.children || props.error) {
        return (
            <StyledLabel type={props.type} htmlFor={props.name}>
                {
                    props.children &&
                    <StyledLabelText type={props.type}>{props.children}</StyledLabelText>
                }
                <StyledInput ref={ref} {...inputProps} />
                {
                    props.type === 'checkbox' &&
                        <StyledCheckboxIndicator />
                }
                {
                    props.error && props.error !== '' &&
                    <StyledLabelText type={props.type} style={{color: '#FF3E3E'}}>{props.error}</StyledLabelText>
                }
            </StyledLabel>
        )
    }

    return (
        <StyledInput {...props}/>
    )
})


const StyledInput = styled.input<InputProps>`
    outline: none;
    
    /* ––––––––––––––– */
    /* TEXT TYPE INPUT */
    /* ––––––––––––––— */
    ${(p) => ['text', 'email', 'password', 'number'].includes(p.type || '')  && `
        /* Remove ios safari shadow */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        margin: 0 1rem;
        margin-bottom: 0.7rem;
        border: 0.6px solid ${p.color === 'black' ? '#636363' : '#F8F8F8'};
        ${p.error && p.error !== '' ? `
            border-color: #FF3E3E;
            margin-bottom: 0.1rem;
        ` : ''}
        border-radius: 2rem;
        background-color: rgba(0,0,0,0);
        padding: .8rem 1.3rem;
        color: ${p.color === 'black' ? 'black' : 'white'};
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        &::placeholder {
            color: #C5C5C5;
        }
    `}

    /* –––––––––––––––———— */
    /* CHECKBOX TYPE INPUT */
    /* ——————————————————— */

    ${(p) => ['checkbox'].includes(p.type || '')  && `
        position: absolute;
        z-index: -1;
        opacity: 0;

        &:checked ~ div:after {
            display: block;
        }

        &:checked ~ div {
            background-color: #2196F3;
        }
    `}

    ${p => p.width && `
        width: ${p.width};
    `}
`

const StyledLabel = styled.label<InputProps>`
    display: flex;
    flex-direction: column;
    ${p => p.type === 'checkbox' && `
        margin: 0 1rem;
        padding-left: 2rem;
        margin-bottom: 1rem;
    `}
    position: relative;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 0.8rem;
`

const StyledLabelText = styled.span<InputProps>`
    ${p => ['text', 'email', 'password', 'number'].includes(p.type || '') && `
        margin 0 1rem;
        margin-bottom: 0.7rem;
    `}
`

const StyledCheckboxIndicator = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    margin: 0.1rem;
    background-color: #eee;
    border-radius: 2px;
    &:after {
        left: .32rem;
        top: 0.16rem;
        width: .20rem;
        height: .4rem;
        border: solid white;
        border-width: 0 .15rem .15rem 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        content: "";
        position: absolute;
        display: none;
    }
`