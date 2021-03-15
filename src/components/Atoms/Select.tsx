import React from 'react';
import styled from 'styled-components';
import select_arrow from '../../assets/images/select_arrow.svg';

interface Option {
    title: string;
    value?: string;
}

export interface SelectProps {
    options: Option[];
    children?: React.ReactNode;
    style?: React.CSSProperties
}

export default function Select(props: SelectProps): JSX.Element {
    return (
        <StyledLabel style={props.style}>
            {
                props.children && 
                    <StyledLabelText>{props.children}</StyledLabelText>
            }
            <StyledSelect>
                {props.options.map(opt => (
                    <option>{opt.title}</option>
                ))}
            </StyledSelect>
            <StyledArrow src={select_arrow}/>
        </StyledLabel>
    )
}

const StyledSelect = styled.select`
    margin: 0 1rem;
    margin-bottom: 0.7rem;
    border: 0.6px solid #F8F8F8;
    border-radius: 2rem;
    background-color: rgba(0,0,0,0);
    padding: .8rem 1.3rem;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 0.8rem;
`

const StyledLabelText = styled.span`
    margin: 0 1rem;
    margin-bottom: 0.7rem;
`

const StyledArrow = styled.img`
    top: 2.6rem;
    height: 2rem;
    position: absolute;
    right: 1.5rem;
`