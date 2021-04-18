import React from 'react'
import styled from 'styled-components'
import cover from '../../../assets/backgrounds/main_bg.png'
import clock from '../../../assets/icons/clock.svg'
import { Title, Text, PeopleIn, Button } from '../../Atoms'
import Flex from '../../Blocks/Flex'
import one_to_one from '../../../assets/icons/one-to-one.svg'
import remote from '../../../assets/icons/remote.svg'

export interface BookClassCardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    title?: string | JSX.Element
    subTitle?: string
    duration?: string
    iconType?: 'one_to_one' | 'remote'
    joined?: boolean
    time?: string
    noCover?: boolean
}

export default function BookClassCard(props: BookClassCardProps): JSX.Element {

    const { style, title, subTitle, duration, iconType, joined, time, noCover } = props


    let classIcon;
    switch (iconType) {
        case 'one_to_one': classIcon = one_to_one; break;
        case 'remote': classIcon = remote; break;
    }

    return (
        <StyledBookClassCardContainer style={style}>
            <Time>
                <Title size={'1.4rem'} weight={'600'}>{time}</Title>
            </Time>
            <StyledBookClassCard noCover={noCover}>
                {
                    !noCover && <ClassCover />
                }
                <InfoContainer>
                    <Flex jc={'space-between'}>
                        <Title size={'1rem'} color={'#429FBA'} noMargin weight={'500'}>{title}</Title>
                        {
                            iconType && <ClassIcon src={classIcon} alt="class type" />
                        }
                    </Flex>
                    <Title size={'1rem'} color={'#636363'} noMargin weight={'500'} style={{ marginBottom: '0.3rem' }}>{subTitle}</Title>
                    <Flex ai={'center'}>
                        <img
                            style={{ marginRight: '0.5rem', marginBottom: '0px', height: '1rem' }}
                            src={clock} alt="clock"
                        />
                        <Text size={'.8rem'} noWrap noMargin>{duration}</Text>
                    </Flex>
                    <Flex jc={'flex-end'} ai={'center'} style={{ marginBottom: '.5rem', marginTop: '.7rem', width: '100%', position: 'relative' }}>
                        <PeopleIn size={'1.4rem'} style={{ position: 'absolute', left: 0 }} />
                        <Button transparentDark={joined} primary={!joined} noShadow noMargin noWrap fontSize={'.7rem'} width={'6rem'}
                            padding={joined ? 'calc(.6rem - 2px) 0.7rem calc(.5rem - 2px) 0.7rem' : '.6rem  0.7rem .55rem 0.7rem'}
                        >
                            {joined ? "JOINED" : 'COUNT ME IN'}
                        </Button>
                    </Flex>
                </InfoContainer>
            </StyledBookClassCard>
        </StyledBookClassCardContainer>
    )
}

const StyledBookClassCardContainer = styled.div`
    width: calc(100% - 3rem);
    display: flex;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    padding-left: 2rem;
`

const StyledBookClassCard = styled.div<{ noCover?: boolean }>`
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 3.33134px 16.6567px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    flex: 1;
    height: 8.5rem;
    ${p => p.noCover ? `
        padding-left: .8rem;
    ` : ''}
`

const ClassCover = styled.div`
    height: 100%;
    width: 6.5rem;
    background-size: 5rem;

    background: url(${cover});
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin: .8rem;
`

const ClassIcon = styled.img`
    height: 1.6rem;
    width: 1.6rem;
    filter: invert(1);
`

const Time = styled.div`
    display: flex;
    align-items: center;
    margin-right: .8rem;
    width: 3.5rem;
`
