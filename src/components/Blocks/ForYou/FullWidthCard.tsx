import React from 'react'
import styled from 'styled-components'

export interface FullWidthCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function FullWidthCard(props: FullWidthCardProps):   JSX.Element {

    const { style } = props

    return (
        <StyledFullWidthCard style={style}>
        
        </StyledFullWidthCard>
    )
}

const StyledFullWidthCard = styled.div`

`