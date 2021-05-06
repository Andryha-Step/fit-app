import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../../Atoms'
import BackHeader from '../../Blocks/BackHeader'
import ClassCard from '../../Blocks/ClassCard'

export interface FavouritesProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Favourites(props: FavouritesProps): JSX.Element {

    const { style } = props

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <StyledFavourites style={style}>
            <BackHeader>
                <Title>Favorites</Title>
            </BackHeader>
            <GridContainer>
                {
                    Array(20).fill(
                        <ClassCard
                            type="withBottom"
                            cardTitle="Cardio Blast"
                            cardText="Cardio"
                            liked
                        />
                    )
                }
            </GridContainer>
        </StyledFavourites>
    )
}

const StyledFavourites = styled.div`
    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 15vw;
        max-width: 70vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 5vw;
        max-width: 90vw;
    }

    @media screen and (min-width: 1600px) {
        padding: 1.5rem 5vw;
        max-width: 90vw;
    }
`

const GridContainer = styled.div`
    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1600px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`