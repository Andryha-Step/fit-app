import React, { useRef } from 'react';
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
    icon?: string
    iconSize?: string
    mb?: string
}

export default function Select(props: SelectProps): JSX.Element {

    return (
        <StyledLabel mb={props.mb} style={props.style} theme={props.theme}>
            {
                props.children &&
                <StyledLabelText>{props.children}</StyledLabelText>
            }
            <StyledSelect style={props.style} theme={props.theme} icon={props.icon || select_arrow} iconSize={props.iconSize || '1rem'}>
                {props.options.map(opt => (
                    <option>{opt.title}</option>
                ))}
            </StyledSelect>
        </StyledLabel>
    )
}

const StyledSelect = styled.select<{ icon?: string, iconSize?: string }>`
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

    background-image: url(${p => p.icon});
    background-repeat: no-repeat;
    background-size: ${p => p.iconSize};
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