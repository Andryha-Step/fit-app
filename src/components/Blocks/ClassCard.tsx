import React from 'react'
import styled from 'styled-components'
import forYouBackground from '../../assets/backgrounds/forYouBackground.png'
import clock from '../../assets/icons/clockWhite.svg'
import clockBlack from '../../assets/icons/clock.svg'
import { Text, Title, Button, Tag, ProgressBar, IconsRow } from '../Atoms';
import Flex from './Flex';
import example_avatar_1 from '../../assets/images/example-avatar-1.png'
import example_avatar_2 from '../../assets/images/example-avatar-2.png'
import example_avatar_3 from '../../assets/images/example-avatar-3.png'
import one_to_one from '../../assets/icons/one-to-one.svg'
import remote from '../../assets/icons/remote.svg'
import eye from '../../assets/icons/eye.svg'
import star from '../../assets/icons/filledStar.svg'
import like from '../../assets/icons/like.svg'
import likeFilled from '../../assets/icons/likeFilled.svg'

export interface ClassCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    iconType?: 'remote' | 'one_to_one'
    duration?: string
    cardText?: string | JSX.Element
    cardTitle?: string | JSX.Element
    tag?: string
    timer?: string | JSX.Element
    type: 'upcoming' | 'plan' | 'challenge' | 'withBottom' | 'only_title' | 'duration'
    buttonText?: string
    liked?: boolean,
    id?: string,
    progress?: boolean
}

export default function ClassCard(props: ClassCardProps): JSX.Element {

    const { style, type, progress } = props

    return (
        <StyledClassCard style={style} type={type} progress={progress}>
            {
                type === 'upcoming' &&
                <UpcomingInner {...props} />
            }
            {
                type === 'plan' &&
                <PlanInner {...props} />
            }
            {
                type === 'challenge' &&
                <ChallengeInner {...props} />
            }
            {
                type === 'withBottom' &&
                <WithBottomInner {...props} />
            }
            {
                type === 'only_title' &&
                <OnlyTitleInner {...props} />
            }
            {
                type === 'duration' &&
                <DurationInner {...props} />
            }
        </StyledClassCard>
    )
}

function UpcomingInner(props: ClassCardProps): JSX.Element {

    const { iconType, duration, cardText, cardTitle } = props

    return (
        <CardContainer {...props}>
            <Control>
                <Flex>
                    <img
                        style={{ marginRight: '0.5rem', height: '1.1rem' }}
                        src={clock} alt="clock"
                    />
                    <Text noWrap color={'white'}>{duration}</Text>
                </Flex>
                <Avatars>
                    <img style={{ zIndex: 1, left: '0.9rem' }} src={example_avatar_1} alt="avatar" />
                    <img style={{ zIndex: 2, left: '0.6rem' }} src={example_avatar_2} alt="avatar" />
                    <img style={{ zIndex: 3, left: '0.3rem' }} src={example_avatar_3} alt="avatar" />
                    <div style={{ zIndex: 4, left: '0rem' }}><Text color={'white'}>+200</Text></div>
                </Avatars>
            </Control>
            <MiddleText>
                <Title color={'white'} weight={'500'} size={'1rem'}>
                    {cardText}
                </Title>
            </MiddleText>
            {
                iconType && (
                    iconType === 'one_to_one' ? <ClassIcon src={one_to_one} alt="class type" /> : (
                        iconType === 'remote' && <ClassIcon src={remote} alt="class type" />
                    ))
            }
            {
                !iconType && <ClassIcon style={{ opacity: 0 }} />
            }
            <Control>
                <Text size={'1.1rem'} color={'white'}>
                    {cardTitle}
                </Text>
                <Button noShadow fontSize={'0.8rem'} small width={'6rem'}>JOINED</Button>
            </Control>
        </CardContainer>
    )
}

function PlanInner(props: ClassCardProps): JSX.Element {

    const { cardText, cardTitle, progress } = props

    return (<CardContainer {...props}>
        <MiddleText style={{ marginTop: progress ? '3rem' : '0' }}>
            <Tag>
                PLAN
            </Tag>
            <Title center color={'white'}>
                {cardTitle}
            </Title>
            <Text color={'white'}>
                {cardText}
            </Text>
        </MiddleText>
        {
            progress ? (
                <ProgressBarContainer>
                    <ProgressBar progress={Math.random()} withText textColor={'white'} />
                </ProgressBarContainer>
            ) : (
                <Flex jc="center">
                    <Button padding=".5rem 2rem" primary fontSize=".8rem">START</Button>
                </Flex>
            )
        }
    </CardContainer>)
}

function ChallengeInner(props: ClassCardProps) {

    const { cardText, cardTitle, progress, timer } = props

    return (
        <CardContainer {...props}>
            {
                timer && <Text center color="white" size="1rem">{timer}</Text>
            }
            <Flex flex={'1'} jc={'flex-end'} ai={'flex-start'} column>
                <Tag>CHALLENGE</Tag>
                <Title color={'white'}>{cardTitle}</Title>
                <Flex ai='flex-end' jc='space-between' style={{ width: '100%' }}>
                    <Text color={'white'} mb={progress ? '1rem' : ''} style={!progress ? { marginRight: '1rem' } : {}}>{cardText}</Text>
                    <Button padding=".3rem 1.5rem" primary fontSize=".7rem">JOIN</Button>
                </Flex>
            </Flex>
            {
                progress && <ProgressBar progress={Math.random()} withText textColor={'white'} />
            }
        </CardContainer>
    )
}

function WithBottomInner(props: ClassCardProps) {

    const { cardText, cardTitle, liked, buttonText, tag } = props

    const icons = [
        {
            src: eye,
            alt: 'watch',
            title: '1123'
        },
        {
            src: clockBlack,
            alt: 'time',
            title: '45 min',
        },
        {
            src: star,
            alt: 'rating',
            title: '4.9',
        }
    ]

    return (
        <CardContainer {...props}>
            <Flex style={{ margin: '0.8rem', cursor: 'pointer' }} jc={'flex-end'}>
                {
                    liked ?
                        <img src={likeFilled} alt="" />
                        : <img src={like} alt="" />
                }
            </Flex>
            <Flex style={{ margin: '0.8rem' }} flex="1" column ai={'flex-start'} jc={'flex-end'}>
                {tag && <Tag>{tag || 'NEW'}</Tag>}
                <Title color={'white'}>{cardTitle}</Title>
            </Flex>
            <BottomFilledControl>
                <Flex column>
                    <Text style={{ marginBottom: '0.2rem' }} color="#636363">{cardText}</Text>
                    <IconsRow icons={icons} iconSize='1rem' fontSize="0.7rem" />
                </Flex>
                <Button noShadow style={{ padding: '0.3rem 1rem' }} fontSize="0.7rem" primary small>{buttonText || 'START'}</Button>
            </BottomFilledControl>
        </CardContainer>
    )
}

function OnlyTitleInner(props: ClassCardProps) {

    const { cardTitle } = props

    return (
        <CardContainer {...props}>
            <Flex flex={'1'} jc={'center'} ai={'flex-center'} column>
                <Title color={'white'} center>{cardTitle}</Title>
            </Flex>
        </CardContainer>
    )
}

function DurationInner(props: ClassCardProps) {

    const { cardTitle } = props

    return (
        <CardContainer {...props}>
            <Flex flex={'1'} jc={'center'} ai={'flex-center'} column>
                <Title color={'#217E9A'} center>{cardTitle}</Title>
            </Flex>
        </CardContainer>
    )
}


const StyledClassCard = styled.div<ClassCardProps>`
    min-width: 20rem;
    height: 16rem;
    border-radius: 0.5rem;
    background-image: url(${forYouBackground});
    transition: background-size 0.4s;
    background-size: 56rem;
    background-position: center center;
    margin: 1rem;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

    &:hover {
        background-size: 66rem;
    }

    ${p => p.type === 'challenge' || (p.type === 'plan' && !p.progress) ? `
        min-width: 18rem;
        height: 14rem;
    ` : ''}

    ${p => p.type === 'withBottom' ? `
        min-width: 18rem;
        height: 12rem;
    ` : ''}

    ${p => p.type === 'duration' ? `
        background: #FFFFFF;
        border: 2px solid #217E9A;
        height: 10rem;
    ` : ''}

    ${p => ['duration', 'only_title'].includes(p.type) ? `
        height: 12rem;
        min-width: 16rem;

        @media only screen and (max-width: 680px) {
            && {
                background-size: 35rem;
                min-width: 8rem;
                height: 9rem;
                margin: 0.3rem;
                margin-top: 0.8rem;
                margin-left: 1rem;
                margin-right: 0;
            }
        }
    ` : ''}
`

const CardContainer = styled.div<ClassCardProps>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    background: linear-gradient(180deg, rgba(27, 27, 27, 0.1) 0%, rgba(27, 27, 27, 0.75) 79.86%);
    /* transition: backdrop-filter 0.4s; */
    /* backdrop-filter: brightness(90%); */

    ${p => p.type === 'withBottom' ? `
        padding: 0;
        width: 100%;
        height: 100%;
    ` : ''}

    ${p => p.type === 'duration' ? `
        background: transparent;
        // backdrop-filter: none!important;
    ` : ''}

    &:hover {
        /* backdrop-filter: brightness(60%); */
    }
`

const Control = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: white;
    border-bottom-left-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    padding: 0.5rem .8rem;
`