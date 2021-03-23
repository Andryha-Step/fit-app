import React from 'react'
import styled from 'styled-components'
import forYouBackground from '../../../assets/backgrounds/forYouBackground.png'
import clock from '../../../assets/icons/clockWhite.svg'
import { Text, Title, Button } from '../../Atoms';
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
    middleText?: string
}

export default function ClassCard(props: ClassCardProps): JSX.Element {

    const { style, iconType, duration, middleText } = props

    return (
        <StyledClassCard style={style}>
            <CardContainer>
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
        </StyledClassCard>
    )
}

const StyledClassCard = styled.div`
    min-width: 20rem;
    height: 14rem;
    border-radius: 0.5rem;
    background-image: url(${forYouBackground});
    transition: background-size 0.4s;
    background-size: 50rem;
    background-position: center center;
    margin: 1rem;

    &:hover {
        background-size: 60rem;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, rgba(27, 27, 27, 0.55) 79.86%);
    transition: backdrop-filter 0.4s;
    backdrop-filter: brightness(90%);

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