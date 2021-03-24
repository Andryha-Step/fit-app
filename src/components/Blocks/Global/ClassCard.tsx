import React from 'react'
import styled from 'styled-components'
import forYouBackground from '../../../assets/backgrounds/forYouBackground.png'
import clock from '../../../assets/icons/clockWhite.svg'
import { Text, Title, Button, Tag, ProgressBar } from '../../Atoms';
import Flex from '../Flex';
import example_avatar_1 from '../../../assets/images/example-avatar-1.png'
import example_avatar_2 from '../../../assets/images/example-avatar-2.png'
import example_avatar_3 from '../../../assets/images/example-avatar-3.png'
import one_to_one from '../../../assets/icons/one-to-one.svg'
import remote from '../../../assets/icons/remote.svg'

export interface ClassCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    iconType?: 'remote' | 'one_to_one'
    duration?: string
    middleText?: string | JSX.Element
    middleTitle?: string | JSX.Element
    type: 'upcoming' | 'plan' | 'challenge' | 'new'
}

export default function ClassCard(props: ClassCardProps): JSX.Element {

    const { style, type } = props

    return (
        <StyledClassCard {...props}>
            {
                type === 'upcoming' &&
                    <UpcomingInner {...props}/>
            }
            {
                type === 'plan' &&
                    <PlanInner {...props}/>
            }
             {
                type === 'challenge' &&
                    <ChallengeInner {...props}/>
            }
            {
                type === 'new' &&
                    <NewInner {...props} />
            }
        </StyledClassCard>
    )
}

function UpcomingInner(props:ClassCardProps): JSX.Element {

    const { iconType, duration, middleText } = props

    return (
        <CardContainer {...props}>
            <Control>
                <Flex>
                    <img 
                        style={{marginRight: '0.5rem', height: '1.1rem'}} 
                        src={clock} alt="clock"
                    />
                    <Text noMargin>{duration}</Text>
                </Flex>
                <Avatars>
                    <img style={{zIndex: 1, left: '0.9rem'}} src={example_avatar_1} alt="avatar"/>
                    <img style={{zIndex: 2, left: '0.6rem'}} src={example_avatar_2} alt="avatar"/>
                    <img style={{zIndex: 3, left: '0.3rem'}} src={example_avatar_3} alt="avatar"/>
                    <div style={{zIndex: 4, left: '0rem'}}><Text noMargin>+200</Text></div>
                </Avatars>
            </Control>
            <MiddleText>
                <Title weight={'500'} size={'1rem'}>
                    {middleText}
                </Title>
            </MiddleText>
            {
                iconType && (
                    iconType === 'one_to_one' ? <ClassIcon src={one_to_one} alt="class type"/> : (
                    iconType === 'remote' && <ClassIcon src={remote} alt="class type"/>
                ))
            }
            {
                !iconType && <ClassIcon style={{opacity: 0}}/>
            }
            <Control>
                <Text noMargin size={'1.1rem'}>
                    Cardio Blast
                </Text>
                <Button noMargin fontSize={'0.8rem'} small width={'6rem'}>JOINED</Button>
            </Control>
        </CardContainer>
    )
}

function PlanInner(props:ClassCardProps): JSX.Element {

    const { middleText, middleTitle } = props

    return (<CardContainer {...props}>
        <MiddleText style={{marginTop: '3rem'}}>
            <Tag>
                PLAN
            </Tag>
            <Title center>
                {middleTitle}
            </Title>
            <Text>
                {middleText}
            </Text>
        </MiddleText>
        <ProgressBarContainer>
            <ProgressBar progress={Math.random()} withText />
            </ProgressBarContainer>
    </CardContainer>)
}

function ChallengeInner(props:ClassCardProps) {

    const { middleText, middleTitle } = props

    return (
        <CardContainer {...props}>
            <Flex flex={'1'} jc={'flex-end'} ai={'flex-start'} columns>
                <Tag>CHALLENGE</Tag>
                <Title>{middleTitle}</Title>
                <Text>{middleText}</Text>
            </Flex>
            <ProgressBar progress={Math.random()} withText />
        </CardContainer>
    )
}

function NewInner(props:ClassCardProps) {

    const { middleText, middleTitle } = props

    return (
            <CardContainer {...props}>
                <Flex flex="1"></Flex>
                <BottomFilledControl>
                    123
                </BottomFilledControl>
            </CardContainer>
    )
}

const StyledClassCard = styled.div<ClassCardProps>`
    min-width: 20rem;
    height: 16rem;

    ${p => p.type === 'challenge' ? `
        min-width: 18rem;
        height: 14rem;
    ` : ''}

    ${p => p.type === 'new' ? `
        min-width: 18rem;
        height: 10rem;
    ` : ''}

    border-radius: 0.5rem;
    background-image: url(${forYouBackground});
    transition: background-size 0.4s;
    background-size: 56rem;
    background-position: center center;
    margin: 1rem;

    &:hover {
        background-size: 66rem;
    }
`

const CardContainer = styled.div<ClassCardProps>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, rgba(27, 27, 27, 0.55) 79.86%);
    transition: backdrop-filter 0.4s;
    backdrop-filter: brightness(90%);

    ${p => p.type === 'new' ? `
        padding: 0;
        width: 100%;
        height: 100%;
    ` : ''}

    &:hover {
        backdrop-filter: brightness(60%);
    }
`

const Control = styled.div`
    display: flex;
    justify-content: space-between;
`

const MiddleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Avatars = styled.div`
    display: flex;

    & > * {
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 1.3rem;
        border: 1px solid white;
        position: relative;
    }

    & > div {
        background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);
        display: flex;
        justify-content: center;
        align-content: center;
    }

    & > div > span {
        display: flex;
        align-items: center;
        font-size: 0.45rem;
        margin-top: 0.1rem;
    }
`

const ClassIcon = styled.img`
    height: 1.2rem;
    width: 1.2rem;
    position: relative;
`

const ProgressBarContainer = styled.div` // This container don't use flex because of Chromium render bug
    padding: 0 2rem;
`

const BottomFilledControl = styled.div`
    background-color: white;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0.5rem;
`