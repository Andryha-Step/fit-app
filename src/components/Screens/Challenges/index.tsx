import React from 'react'
import styled from 'styled-components'
import Category from '../../Blocks/Category'
import ClassCard from '../../Blocks/ClassCard'

export interface ChallengesProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Challenges(props: ChallengesProps): JSX.Element {

    const { style } = props

    return (
        <StyledChallenges style={style}>
            <Category
                title='Started'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            timer='Ends in 4d 21h'
                            type='challenge'
                            cardTitle={"April challenge"}
                            cardText='2 Weeks | 10 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Starting soon'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            timer='Starts in 4d 21h'
                            type='challenge'
                            cardTitle={"April challenge"}
                            cardText='2 Weeks | 10 Workouts'
                        />
                    ))
                }
            </Category>
        </StyledChallenges>
    )
}

const StyledChallenges = styled.div`

`