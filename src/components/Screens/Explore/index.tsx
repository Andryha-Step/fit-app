import React, { useState } from 'react'
import styled from 'styled-components'
import FullWidthCard from '../../Blocks/FullWidthCard'
import Category from '../../Blocks/Category';
import ClassCard from '../../Blocks/ClassCard';
import useWindowSize from '../../../hooks/useWindowSize';
import { Coach } from '../../Atoms';
import example_avatar_3 from '../../../assets/images/example-avatar-3.png'


function randomElFromArray<T>(arr: T[]): T {
    return arr[~~(Math.random() * arr.length)]
}

export interface ExploreProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Explore(props: ExploreProps): JSX.Element {

    const [upcomingTab, setUpcomingTab] = useState('900')
    const { style } = props
    const { width: screenWidth } = useWindowSize()

    return (
        <StyledExplore style={style}>
            <FullWidthCard
                cardTitle="Cardio Blast"
                cardText="Body | Cardio | Stay Toned"
                buttonText="RESUME"
            />
            <Category
                tabs={Array(20).fill(null).map((el, i) => ({
                    title: `${9 + i}:00`,
                    id: `${9 + i}00`
                }))}
                currentTab={upcomingTab}
                title={'Upcoming'}
                link={'View all'}
                onSwitch={setUpcomingTab}
            >
                {Array(20).fill(null).map((el, i) => (
                    <ClassCard
                        key={'upc' + i}
                        type='upcoming'
                        iconType={randomElFromArray(['remote', 'one_to_one', undefined])}
                        duration={randomElFromArray(['5 min', '10 min', '30 min', '45 min', '1 hr 25 min', '2 hr'])}
                        cardText="Class starts in 0:00:12"
                        cardTitle="Cardio Blast"
                    />
                ))}
            </Category>
            <Category
                title={'On-Demand'}
                cardMinWidth={screenWidth > 680 ? '18rem' : '10rem'}
                noScroll
            >
                {Array(8).fill(null).map((el, i) => (
                    <ClassCard
                        key={'ond' + i}
                        type='only_title'
                        cardTitle="Cardio Blast"
                    />
                ))}
            </Category>
            <Category
                title={'Duration'}
                cardMinWidth={screenWidth > 680 ? '18rem' : '10rem'}
                noScroll
            >
                {Array(8).fill(null).map((el, i) => (
                    <ClassCard
                        key={'dur' + i}
                        type='duration'
                        cardTitle="5-10"
                    />
                ))}
            </Category>
            <Category
                title={'Trainers'}
                cardMinWidth={'6rem'}
                noScroll
            >
                {Array(8).fill(null).map((el, i) => (
                    <Coach
                        key={'c' + i}
                        avatarUrl={example_avatar_3}
                        name="Coach"
                    />
                ))}
            </Category>
        </StyledExplore>
    )
}

const StyledExplore = styled.div`

`