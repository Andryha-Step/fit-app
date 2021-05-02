import React from 'react'
import styled from 'styled-components'
import Category from '../../Blocks/Category'
import ClassCard from '../../Blocks/ClassCard'

export interface ExperiencesProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Experiences(props: ExperiencesProps): JSX.Element {

    const { style } = props

    return (
        <StyledExperiences style={style}>
            <ClassCard
                buttonText='WATCH'
                liked
                type='new'
                cardTitle='Staying motivated'
                cardText='Talk'
            />
        </StyledExperiences>
    )
}

const StyledExperiences = styled.div`
    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 25vw;
        max-width: 50vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 30vw;
        max-width: 40vw;
    }

    @media screen and (min-width: 1600px) {
        padding: 1.5rem 35vw;
        max-width: 30vw;
    }
`