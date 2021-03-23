import React from 'react'
import styled from 'styled-components'
import { Button, Tag, Title, Text } from '../../Atoms'
import forYouBackground from '../../../assets/backgrounds/forYouBackground.png'
import clock from '../../../assets/icons/clock.svg'
import eye from '../../../assets/icons/eye.svg'
import star from '../../../assets/icons/filledStar.svg'
import useWindowSize from '../../../customHooks/useWindowSize'

export interface FullWidthCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

interface Icon {
    src: string
    alt: string
    title: string;
}

export default function FullWidthCard(props: FullWidthCardProps): JSX.Element {

    const { style } = props
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
        <StyledFullWidthCard style={style}>
            <GradientWrapper>
                <Content>
                    <ContentContainer>
                        <Tag>FEATURED</Tag>
                        <Title weight={'600'} size={windowWidth >= 600 ? '2.5rem' : ''} color="black">Cardio Blast</Title>
                        <Text color="black">Body | Cardio | Stay Toned</Text>
                        <IconsWrapper>
                            {
                                icons.map((icon, i) => (
                                    <IconsElement key={i}>
                                        <img src={icon.src} alt={icon.alt}/>
                                        <Text color="black">{icon.title}</Text>
                                    </IconsElement>
                                ))
                            }
                        </IconsWrapper>
                    </ContentContainer>
                    <ButtonContainer>
                        <Button width={'7rem'} primary small>
                            Resume
                        </Button>
                    </ButtonContainer>
                </Content>
            </GradientWrapper>
        </StyledFullWidthCard>
    )
}

const StyledFullWidthCard = styled.section`
    width: 100vw;
    height: 15rem;
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
`

const Content = styled.div`
    display: flex;
    flex: 1;

    @media only screen and (min-width: 600px) {
        & {
            padding: 0 10vw;
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

`

const ContentContainer = styled.div`
    flex: 1;
    margin: 1rem;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    & > span {
        margin-bottom: 0.5rem;
    }
`

const IconsWrapper = styled.div`
    display: flex;
`

const IconsElement = styled.div`
    display: flex;
    margin-right: 1rem;
    align-items: center;

    & img {
        margin-right: 0.3rem;
        height: 1.2rem;
    }

    & span {
        margin: 0;
    }

    @media only screen and (max-width: 350px) {
        & span {
            font-size: 0.7rem;
        }
    }
`