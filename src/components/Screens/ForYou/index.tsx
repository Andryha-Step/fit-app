import React, { useState } from 'react';
// import styled from 'styled-components'
import FullWidthCard from '../../Blocks/FullWidthCard';
import ClassCard from '../../Blocks/ClassCard';
import Category from '../../Blocks/Category';
import { useHistory } from 'react-router';

function randomElFromArray<T>(arr: T[]): T {
    return arr[~~(Math.random() * arr.length)]
}

interface ForYouScreenProps {

}

export default function ForYou(props: ForYouScreenProps): JSX.Element {

    const [upcomingTab, setUpcomingTab] = useState('900')
    const history = useHistory()

    return (
        <div>
            <FullWidthCard
                cardTitle="Cardio Blast"
                cardText="Body | Cardio | Stay Toned"
                buttonText="RESUME"
            />
            <Category
                withBorder
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
            <Category withBorder title={'Your plan'} link={'View all'}>
                <ClassCard
                    type='plan'
                    cardTitle={<>Get Ready For<br /> Summer</>}
                    cardText='8 Weeks | 20 Workouts'
                    progress
                />
            </Category>
            <Category withBorder title={'Your Challenges'} link={'View all'}>
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
            <Category withBorder title={'Classes Based On Your Fitness Goal'} subtitle="Be More Active" link={'View all'}>
                {Array(5).fill(null).map((el, i) => (
                    <ClassCard
                        key={i}
                        type="withBottom"
                        cardTitle="Cardio Blast"
                        cardText='Cardio'
                    />
                ))}
            </Category>
            <Category withBorder title={'Favourites'} link={'View all'} onLinkClick={() => history.push('/app/favourites')}>
                {Array(5).fill(null).map((el, i) => (
                    <ClassCard
                        key={i}
                        liked
                        type="withBottom"
                        cardTitle="Cardio Blast"
                        cardText='Cardio'
                    />
                ))}
            </Category>
        </div>
    )
}
