import React, { useState } from 'react';
import styled from 'styled-components'
import FullWidthCard from '../../Blocks/Global/FullWidthCard';
import ClassCard from '../../Blocks/Global/ClassCard';
import Category from '../../Blocks/Global/Category';
import { Link } from 'react-router-dom';
import BottomTabNav from '../../Blocks/Global/BottomTabNav'
import { useHeader } from '../../Blocks/Global/Header'

function randomElFromArray<T>(arr: T[]): T {
    return arr[~~(Math.random() * arr.length)]
}

interface ForYouScreenProps {

}

export default function ForYou(props: ForYouScreenProps): JSX.Element {

    const [upcomingTab, setUpcomingTab] = useState('900')
    const { renderHeader } = useHeader({})

    return (
        <div>
            { renderHeader()}
            <BottomTabNav />
            <FullWidthCard
                cardTitle="Cardio Blast"
                cardText="Body | Cardio | Stay Toned"
                buttonText="RESUME"
            />
            <Category
                tabs={Array(20).fill(null).map((el, i) => ({
                    title: `${9 + i}:00`,
                    id: `upcoming${9 + i}00`
                }))}
                currentTab={upcomingTab}
                title={'Upcoming'}
                link={'View all'}
                onSwitch={setUpcomingTab}
            >
                {Array(20).fill(null).map((el, i) => (
                    <ClassCard
                        key={'upc' + i}
                        id={`upcoming${9 + i}00`}
                        type='upcoming'
                        iconType={randomElFromArray(['remote', 'one_to_one', undefined])}
                        duration={randomElFromArray(['5 min', '10 min', '30 min', '45 min', '1 hr 25 min', '2 hr'])}
                        cardText="Class starts in 0:00:12"
                        cardTitle="Cardio Blast"
                    />
                ))}
            </Category>
            <Category title={'Your plan'} link={'View all'}>
                <ClassCard
                    type='plan'
                    cardTitle={<>Get Ready For<br /> Summer</>}
                    cardText='8 Weeks | 20 Workouts'
                />
            </Category>
            <Category title={'Your Challenges'} link={'View all'}>
                <ClassCard
                    type="challenge"
                    cardTitle="April Challenge"
                    cardText='2 Weeks | 10 Workouts'
                />
                <ClassCard
                    type="challenge"
                    cardTitle="Summer Challenge"
                    cardText='2 Weeks | 10 Workouts'
                />
            </Category>
            <Category title={'Classes Based On Your Fitness Goal'} subtitle="Be More Active" link={'View all'}>
                {Array(5).fill(null).map((el, i) => (
                    <ClassCard
                        type="new"
                        cardTitle="Cardio Blast"
                        cardText='Cardio'
                    />
                ))}
            </Category>
            <Category title={'Favourites'} link={'View all'}>
                {Array(5).fill(null).map((el, i) => (
                    <ClassCard
                        liked
                        type="new"
                        cardTitle="Cardio Blast"
                        cardText='Cardio'
                    />
                ))}
            </Category>
        </div>
    )
}
