import React, { useState } from 'react';
import styled from 'styled-components'
import FullWidthCard from '../../Blocks/ForYou/FullWidthCard';
import Header from '../../Blocks/Global/Header';
import Footer from '../../Blocks/Global/Footer';
import ClassCard from '../../Blocks/Global/ClassCard';
import Category from '../../Blocks/ForYou/Category';

function randomElFromArray<T>(arr:T[]): T {
    return arr[~~(Math.random() * arr.length)]
}

interface ForYouScreenProps {

}

export default function ForYou(props:ForYouScreenProps): JSX.Element {

    const [upcomingTab, setUpcomingTab] = useState('900')

    return (
        <div>
            <Header search/>
            <FullWidthCard />
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
                    {Array(10).fill(null).map((el, i) => (
                        <ClassCard 
                            iconType={randomElFromArray(['remote', 'one_to_one', undefined])}
                            duration={randomElFromArray(['5 min', '10 min', '30 min', '45 min', '1 hr 25 min', '2 hr'])}
                            middleText={'Class starts in 0:00:12'}
                        />
                    ))}
                </CategoryContainer>
            </Category>
            <Category title={'Your plan'} link={'View all'}>
                <CategoryContainer>
                    {Array(10).fill(null).map((el, i) => (
                        <ClassCard 
                            iconType={randomElFromArray(['remote', 'one_to_one', undefined])}
                            duration={randomElFromArray(['5 min', '10 min', '30 min', '45 min', '1 hr 25 min', '2 hr'])}
                            middleText={'Class starts in 0:00:12'}
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
    width: calc(100vw - 2rem);
    padding: 0 1rem;
    ${p => p.first ? `
        margin: 1rem 0;
    ` : ''}
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`