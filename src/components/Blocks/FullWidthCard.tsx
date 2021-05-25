import React from 'react'
import styled from 'styled-components'
import { Button, Tag, Title, Text, IconsRow, Coach } from '../Atoms'
import forYouBackground from '../../assets/backgrounds/forYouBackground.png'
import clock from '../../assets/icons/clock.svg'
import eye from '../../assets/icons/eye.svg'
import star from '../../assets/icons/filledStar.svg'
import useWindowSize from '../../hooks/useWindowSize'
import Flex from './Flex'

export interface FullWidthCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    cardTitle?: string,
    cardText?: string
    startsIn?: string
    inProgress?: boolean,
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>
    tag?: string
    coach?: string
    header?: React.ReactNode
}

interface Icon {
    src: string
    alt: string
    title: string;
}

export default function FullWidthCard(props: FullWidthCardProps): JSX.Element {

    const { style, cardTitle, cardText, onButtonClick, tag, coach, inProgress, startsIn, header } = props
    const { width: windowWidth } = useWindowSize()

    const icons = [
        {
            src: eye,
            alt: 'watch',
            title: '1123'
        },
        {
            src: clock,
            alt: 'time',
            title: '45 min',
        },
        {
            src: star,
            alt: 'rating',
            title: '4.9',
        }
    ] as Icon[]

    return (
        <StyledFullWidthCard style={style} header={!!header}>
            <GradientWrapper>
                <Content>
                    {
                        header && header
                    }
                </Content>
                <Content>
                    <ContentContainer>
                        {
                            tag && <Tag>{tag}</Tag>
                        }
                        {
                            coach && <Coach horizontal name={coach} />
                        }
                        <Title weight={'600'} size={windowWidth >= 600 ? '2.5rem' : ''} color="black">{cardTitle}</Title>
                        <Text color="black" mb='.5rem'>{cardText}</Text>
                        <IconsRow icons={icons} />
                    </ContentContainer>
                    <ButtonContainer>
                        {
                            inProgress && (
                                <Button width={'7rem'} onClick={onButtonClick} primary small noShadow mh={'1rem'}>
                                    RESUME
                                </Button>
                            )
                        }
                        {
                            startsIn && <Flex ai='center' column>
                                <Title weight='400' size='1.1rem' mb='.5rem'>Class starts in {startsIn}</Title>
                                <Flex>
                                    <Button fontSize='.7rem' padding='.5rem 0' width='7rem' noShadow transparentDark mr='1rem'>INVITE</Button>
                                    <Button fontSize='.7rem' padding='.5rem 0' width='7rem' noShadow primary>COUNT ME IN</Button>
                                </Flex>
                            </Flex>
                        }
                    </ButtonContainer>
                </Content>
            </GradientWrapper>
        </StyledFullWidthCard>
    )
}

const StyledFullWidthCard = styled.section<{ header?: boolean }>`
    width: 100vw;
    height: ${p => p.header ? '20rem' : '15rem'};
    background-image: url(${forYouBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
    border-bottom: 0.5rem solid #429FBA;

    @media only screen and (min-width: 992px) {
        & {
            height: 20rem;
        }
    }
`

const GradientWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 20%, rgba(255, 255, 255, 0) 100%);
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    display: flex;
    flex: 1;

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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 1rem;
`

const ContentContainer = styled.div`
    flex: 1;
    /* margin: 2rem; */
    margin-bottom: 1rem;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`