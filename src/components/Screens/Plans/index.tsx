import React from 'react'
import styled from 'styled-components'
import Category from '../../Blocks/Category'
import ClassCard from '../../Blocks/ClassCard'

export interface PlansProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Plans(props: PlansProps): JSX.Element {

    const { style } = props

    return (
        <StyledPlans style={style}>
            <Category
                title='Be More Active'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Lose Weight'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Build Muscle'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Increase Strength'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Mindfulness'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Tone and Sculpt'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
            <Category
                title='Improve Flexibility'
            >
                {
                    Array(20).fill(null).map(e => (
                        <ClassCard
                            type='plan'
                            cardTitle={<>Get Ready For<br /> Summer</>}
                            cardText='8 Weeks | 20 Workouts'
                        />
                    ))
                }
            </Category>
        </StyledPlans>
    )
}

const StyledPlans = styled.div`

`