import React from 'react'
import styled from 'styled-components'
import { Text, Title } from '../../Atoms'
import clock from '../../../assets/icons/clock.svg'
import classes from '../../../assets/icons/fire-1.png'
import challanges from '../../../assets/icons/fire-2.png'
import Flex from '../../Blocks/Flex'

export interface StatsProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Stats(props: StatsProps): JSX.Element {

    const { style } = props

    return (
        <StyledStats style={style}>
            <Title>All time stats</Title>
            <StatsList>
                <StatsElement src={clock} bigger>
                    <Title lh='1.3' color='#429FBA'>2000</Title>
                    <Text color='#B0B0B0' weight='600'>Minutes</Text>
                </StatsElement>
                <StatsElement src={classes}>
                    <Title lh='1.3' color='#429FBA'>100</Title>
                    <Text color='#B0B0B0' weight='600'>Classes</Text>
                </StatsElement>
                <StatsElement src={challanges} bigger>
                    <Title lh='1.3' color='#429FBA'>50</Title>
                    <Text color='#B0B0B0' weight='600'>Challanges</Text>
                </StatsElement>
            </StatsList>
            <Flex column mt="1rem">
                <Streak>
                    <Flex jc="space-between">
                        <Text size='1rem' weight='500'>Current daily streak</Text>
                        <Text size='1rem' weight='500'>0</Text>
                    </Flex>
                    <Flex jc="space-between">
                        <Text size='1rem' weight='500' color='#B0B0B0'>Longest</Text>
                        <Text size='1rem' weight='500' color='#B0B0B0'>0</Text>
                    </Flex>
                </Streak>
                <Streak>
                    <Flex jc="space-between">
                        <Text size='1rem' weight='500'>Current weekly streak</Text>
                        <Text size='1rem' weight='500'>0</Text>
                    </Flex>
                    <Flex jc="space-between">
                        <Text size='1rem' weight='500' color='#B0B0B0'>Longest</Text>
                        <Text size='1rem' weight='500' color='#B0B0B0'>0</Text>
                    </Flex>
                </Streak>
            </Flex>
        </StyledStats>
    )
}

const StyledStats = styled.div`

`

const StatsList = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const StatsElement = styled.div<{ src: string, bigger?: boolean }>`
    && > img {
        height: 2rem;
        width: 2rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${p => p.src}) no-repeat;
    background-position: center 0;
    background-size: 1.5rem;
    padding-top: 2.4rem;

    ${p => p.bigger ? `
        background-size: 1.7rem;
    ` : ''}
`

const Streak = styled.div`
    border-bottom: 1px solid #F6F6F6;
    padding-bottom: .2rem;
    margin-bottom: .5rem;

    &&:last-child {
        border: 0;
    }
`