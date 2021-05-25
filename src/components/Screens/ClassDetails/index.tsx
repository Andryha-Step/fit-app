import React from 'react'
import styled from 'styled-components'
import { Icon, PeopleIn, Text, Title } from '../../Atoms'
import Flex from '../../Blocks/Flex'
import FullWidthCard from '../../Blocks/FullWidthCard'
import back from '../../../assets/icons/back.svg'
import like from '../../../assets/icons/like.svg'
import { Link } from 'react-router-dom'

export interface ClassDetailsProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function ClassDetails(props: ClassDetailsProps): JSX.Element {

    const { style } = props

    return (
        <StyledClassDetails style={style}>
            <FullWidthCard
                cardTitle="Cardio Blast"
                cardText="Body | Cardio | Stay Toned"
                coach='Anna Martin'
                startsIn='0:00:12'
                header={<Flex jc='space-between' width='100%' padding='1rem 0 0 0'>
                    <Link to='/app'>
                        <TransparentCircleIcon icon={back} />
                    </Link>
                    <TransparentCircleIcon icon={like} />
                </Flex>}
            />
            <Content>
                <Section>
                    <Flex jc='space-between' ai='center'>
                        <Flex ai='center'>
                            <PeopleIn size='1.9rem' />
                            <Title size='1rem' weight='600'>Members in class</Title>
                        </Flex>
                        <Title size='1rem' weight='600' color='#429FBA' clickable>Waitlist</Title>
                    </Flex>
                </Section>
                <Section>
                    <Flex>
                        <Icon name='likeFilled' onClick={() => null} text='1,892' mr='1rem' />
                        <Icon name='comment' size='1.3rem' onClick={() => null} text='1,892' />
                    </Flex>
                </Section>
                <Section>
                    <Flex mb='.5rem'>
                        <Title size='1rem' weight='600'>Class Details</Title><br />
                    </Flex>
                    <Text size='.9rem'>
                        Superatis Tauri monts verticibus qui ad solsum sublimius attolluntur Cilicia spatiis porrigitisten abile flumen Calycadnus.
                    </Text>
                </Section>
                <Section>
                    <Flex mb='.5rem'>
                        <Title size='1rem' weight='600'>Schedule</Title><br />
                    </Flex>
                    <table style={{ borderSpacing: '0' }}>
                        <tr>
                            <td><Text size='.9rem' mr='1rem'>Mondays:</Text></td>
                            <td><Text size='.9rem' weight='600'>18:00</Text></td>
                        </tr>
                        <tr>
                            <td><Text size='.9rem' mr='1rem'>Fridays:</Text></td>
                            <td><Text size='.9rem' weight='600'>20:00</Text></td>
                        </tr>
                    </table>
                </Section>
                <Section>
                    <Flex mb='.5rem'>
                        <Title size='1rem' weight='600'>Location</Title><br />
                    </Flex>
                    <Text size='.9rem' mr='1rem'>Link:</Text>
                    <Text size='.9rem' mr='1rem'>zoom.us/cardioblast</Text><br /><br />
                    <Text size='.9rem' mr='1rem'>Adress:</Text>
                    <Text size='.9rem' mr='1rem'>100-120 Tauri monts verticibus qui ad solsum verticibus qui ad ds ddsd.</Text><br />
                </Section>
                <Section>
                    <Flex mb='.5rem'>
                        <Title size='1rem' weight='600'>Disclaimer</Title><br />
                    </Flex>
                    <Text size='.9rem' mr='1rem' color='#429FBA' weight='600'>Booking and Cancellation Policy</Text><br />
                    <Text size='.9rem' mr='1rem' color='#429FBA' weight='600'>Waiver</Text>
                </Section>
                <Section>
                    <Flex mb='.5rem'>
                        <Title size='1rem' weight='600'>Notes</Title><br />
                    </Flex>
                    <Text size='.9rem'>
                        Superatis Tauri monts verticibus qui ad solsum sublimius attolluntur Cilicia spatiis porrigitisten abile flumen Calycadnus.
                    </Text>
                </Section>
            </Content>
        </StyledClassDetails>
    )
}

const StyledClassDetails = styled.div`
    
`

const Content = styled.div`
    @media only screen and (min-width: 600px) {
        & {
            padding: 0 2rem;
            margin-bottom: 0.5rem;
        }
    }

    @media only screen and (min-width: 992px) {
        & {
            padding: 0 20vw;
            margin-bottom: 1rem;
        }
    }

    @media only screen and (min-width: 1300px) {
        & {
            padding: 0 25vw;
            margin-bottom: 1rem;
        }
    }
`

const TransparentCircleIcon = styled.div<{ icon: string }>`
    background: rgba(255, 255, 255, 0.1) url(${p => p.icon}) no-repeat center;
    background-size: 1.5rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5rem;
    cursor: pointer;
`

const Section = styled.section`
    padding: 1rem 0;
    border-bottom: 1px solid #E6E5E5;
`