import React from 'react'
import styled from 'styled-components'
import cover from '../../../assets/backgrounds/main_bg.png'

export interface BookClassCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function BookClassCard(props: BookClassCardProps): JSX.Element {

    const { style } = props

    return (
        <StyledBookClassCardContainer style={style}>
            <StyledBookClassCard>
                <ClassCover />
                <InfoContainer>

                </InfoContainer>
            </StyledBookClassCard>
        </StyledBookClassCardContainer>
    )
}

const StyledBookClassCardContainer = styled.div`
    width: calc(100vw - 3rem);
    display: flex;
    padding: 0 1.5rem;
`

const StyledBookClassCard = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 3.33134px 16.6567px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    flex: 1;
    height: 10rem;
`

const ClassCover = styled.div`
    width: 30%;
    height: 100%;
    background-size: 5rem;

    background: url(${cover});
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
`

const InfoContainer = styled.div`
    flex: 3;
`