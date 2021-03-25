import React, { useState } from 'react';
import styled from 'styled-components'
import FullWidthCard from '../../Blocks/ForYou/FullWidthCard';
import Header from '../../Blocks/Global/Header';
import Footer from '../../Blocks/Global/Footer';
import ClassCard from '../../Blocks/Global/ClassCard';
import Category from '../../Blocks/ForYou/Category';
import { Link } from 'react-router-dom';

function randomElFromArray<T>(arr:T[]): T {
    return arr[~~(Math.random() * arr.length)]
}

interface ForYouScreenProps {

}

export default function ForYou(props:ForYouScreenProps): JSX.Element {

    const [upcomingTab, setUpcomingTab] = useState('900')
    const [headerTab, setHeaderTab] = useState('for_you')
    const [headerBottomTab, setHeaderBottomTab] = useState('fitness')

    const headerTabs = [{
        id: 'for_you',
        title: 'For You',
    },{
        id: 'expore',
        title: 'Explore',
    },{
        id: 'book',
        title: 'Book',
    },{
        id: 'chat',
        title: 'Chat',
    },{
        id: 'profile',
        title: 'Profile',
    }]

    const headerBottomTabs = [{
        id: 'fitness',
        title: 'Fitness'
    }, {
        id: 'experiences',
        title: 'Experiences'
    }]

    return (
        <div>
            <Header 
                search
                bottomTabs={headerBottomTabs}
                currentBottomTab={headerBottomTab}
                setBottomTab={setHeaderBottomTab}
                tabs={headerTabs}
                currentTab={headerTab}
                setTab={setHeaderTab}
            />
            <FullWidthCard 
                cardTitle="Cardio Blast"
                cardText="Body | Cardio | Stay Toned"
                buttonText="RESUME"
            />
            <Category 
                tabs={Array(10).fill(null).map((el, i) => ({
                    title: `${9 + i}:00`,
                    id: `${9 + i}00` 
                }))}
                currentTab={upcomingTab}
                title={'Upcoming'} 
                link={'View all'} 
                onSwitch={setUpcomingTab}
            >
                <CategoryContainer first>
                    {Array(5).fill(null).map((el, i) => (
                        <ClassCard 
                            type='upcoming'
                            iconType={randomElFromArray(['remote', 'one_to_one', undefined])}
                            duration={randomElFromArray(['5 min', '10 min', '30 min', '45 min', '1 hr 25 min', '2 hr'])}
                            cardText="Class starts in 0:00:12"
                            cardTitle="Cardio Blast"
                        />
                    ))}
                </CategoryContainer>
            </Category>
            <Category title={'Your plan'} link={'View all'}>
                <CategoryContainer>
                    <ClassCard 
                        type='plan'
                        cardTitle={<>Get Ready For<br/> Summer</>}
                        cardText='8 Weeks | 20 Workouts'
                    />
                </CategoryContainer>
            </Category>
            <Category title={'Your Challenges'} link={'View all'}>
                <CategoryContainer>
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
                </CategoryContainer>
            </Category>
            <Category title={'Classes Based On Your Fitness Goal'} subtitle="Be More Active" link={'View all'}>
                <CategoryContainer>
                    {Array(5).fill(null).map((el, i) => (
                        <ClassCard 
                            type="new"
                            cardTitle="Cardio Blast"
                            cardText='Cardio'
                        />
                    ))}
                </CategoryContainer>
            </Category>
            <Category title={'Favourites'} link={'View all'}>
                <CategoryContainer>
                    {Array(5).fill(null).map((el, i) => (
                        <ClassCard 
                            liked
                            type="new"
                            cardTitle="Cardio Blast"
                            cardText='Cardio'
                        />
                    ))}
                </CategoryContainer>
            </Category>
            <Footer terms/>
        </div>
    )
}

const CategoryContainer = styled.div<{first?: boolean}>`
    display: flex;
    width: calc(100vw - 4rem);
    padding: 0 1rem;
    margin-right: 2rem;
    ${p => p.first ? `
        margin: 1rem 0rem;
    ` : ''}
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`