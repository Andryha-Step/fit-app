import React, { useState } from 'react'
import styled from 'styled-components'

export interface SlideToggleProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function SlideToggle(props: SlideToggleProps): JSX.Element {

    const { style } = props

    const [toggled, setToggled] = useState(Math.random() > .5);

    return (
        <StyledSlideToggle style={style} onClick={() => setToggled(!toggled)}>
            <Ball toggled={toggled} />
        </StyledSlideToggle>
    )
}

const StyledSlideToggle = styled.div`
    width: 3rem;
    background-color: #F8F8F8;
    border-radius: 1.5rem;
    border: .2rem solid #F8F8F8;
    cursor: pointer;
`

const Ball = styled.div<{ toggled: boolean }>`
    background-color: #B0B0B0;
    border-radius: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    transition: transform .2s, background .2s;
    ${p => p.toggled ? `
        transform: translateX(1.5rem);
        background-color: #429FBA;
    ` : ''}
`