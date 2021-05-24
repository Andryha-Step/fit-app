import React, { MutableRefObject, Ref, RefObject, useRef } from 'react';
import styled from 'styled-components';
import select_arrow from '../../assets/icons/arrow-down-black.svg';

interface Option {
    title: string;
    value?: string;
}

export interface SelectProps {
    options: Option[];
    children?: React.ReactNode;
    style?: React.CSSProperties
    theme?: 'white' | 'gray';
    mb?: string
}

export default function Select(props: SelectProps): JSX.Element {

    const selectRef = useRef<HTMLSelectElement>(null);
    return (
        <StyledLabel mb={props.mb} style={props.style} theme={props.theme}>
            {
                props.children &&
                <StyledLabelText>{props.children}</StyledLabelText>
            }
            <StyledSelect ref={selectRef} style={props.style} theme={props.theme}>
                {props.options.map(opt => (
                    <option>{opt.title}</option>
                ))}
            </StyledSelect>
        </StyledLabel>
    )
}

const StyledSelect = styled.select`
    /* margin-bottom: 0.7rem; */
    border: 0.6px solid #F8F8F8;
    border-radius: 1rem;
    background-color: rgba(0,0,0,0);
    padding: 0 1rem;
    min-height: 3rem;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;

    ${p => p.theme === 'gray' ? `
        color: black;
        background: #F8F8F8;
    ` : ''}

    background-image: url(${select_arrow});
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 95% center;
    padding-right: 1rem;

`

const StyledLabel = styled.label<{ mb?: string }>`
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 0.8rem;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}    
`

const StyledLabelText = styled.span`
    margin-bottom: 0.7rem;
`

const StyledArrow = styled.img<{ isLabel?: boolean }>`
    top: .6rem;
    height: 2rem;
    position: absolute;
    right: 1.8rem;
    z-index: 5;

    ${p => p.isLabel ? `
        top: 2.95rem;
    ` : ''}

    ${p => p.theme === 'gray' ? `
        filter: invert(1);
    ` : ''}
`