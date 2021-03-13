import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input<React.HTMLProps<HTMLInputElement>>`
    outline: none;
    
    /* ––––––––––––––– */
    /* TEXT TYPE INPUT */
    /* ––––––––––––––— */
    ${(p) => ['text', 'email', 'password'].includes(p.type || '')  && `
        margin: 0 1rem;
        margin-bottom: 1rem;
        border: 0.6px solid #F8F8F8;
        border-radius: 2rem;
        background-color: rgba(0,0,0,0);
        padding: .8rem 1.3rem;
        color: white;
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        &::placeholder {
            color: white;
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

const StyledLabel = styled.label`
    margin: 0 1rem;
    margin-bottom: 1rem;
    position: relative;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 0.8rem;
    padding-left: 2rem;
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
        top: .12rem;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        content: "";
        position: absolute;
        display: none;
    }
`

export interface InputProps {
    children?: React.ReactNode,
    type?: 'text' | 'email' | 'password' | 'checkbox',
    placeholder?: string,
    id?: string,
    name?: string,
    value?: string,
}

export function Input(props: InputProps): JSX.Element {

    let inputProps = {...props};
    inputProps.children = null;

    if (props.type === 'checkbox') {
        return (
            <StyledLabel>
                <StyledInput {...inputProps} />
                <StyledCheckboxIndicator />
                <span>{props.children}</span>
            </StyledLabel>
        )
    }

    return (
        <StyledInput {...props}/>
    )
}
