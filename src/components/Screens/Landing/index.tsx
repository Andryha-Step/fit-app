import React from 'react'
import styled from 'styled-components'
import Flex from '../../Blocks/Flex'
import forYouBackground from '../../../assets/backgrounds/forYouBackground.png'
import devices from '../../../assets/images/landing-devices.png'
import { Button, Text, Title } from '../../Atoms'
import Review from './Review'
import exampleAvatar from '../../../assets/images/example-avatar-1.png'
import googlePlay from '../../../assets/images/google-play.png'
import appStore from '../../../assets/images/app-store.png'
import play from '../../../assets/icons/play.svg'

export interface LandingProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Landing(props: LandingProps): JSX.Element {

    const { style } = props

    return (
        <StyledLanding style={style}>
            <ImageWrapper>
                <Block column first jc={'flex-end'}>
                    <Title weight={'600'} mb={'.2rem'} size={'1.7rem'}>Anna Martin Fitness</Title>
                    <Text weight={'500'} mb={'1rem'} size={'.9rem'}>Join the squad and workout with us virtually or in-person.</Text>
                    <Flex mb={'1rem'}>
                        <Button noShadow primary mr={'.5rem'} padding={'0 1rem'} height={'2.5rem'}>free trial</Button>
                        <IconButton padding={'0 1rem'} height={'2.5rem'}>
                            <img src={play} alt="play" style={{ height: '1rem', marginRight: '.5rem' }} />
                            TRAILER
                        </IconButton>
                    </Flex>
                    <Text>£7.99 per session or £14.99 monthly after a 7 day free trial.</Text>
                </Block>
            </ImageWrapper>
            <SecondBlock style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                <Flex flex={'2'} jc={'center'}>
                    <img src={devices} alt="devices" style={{ width: '100%', height: 'auto' }} />
                </Flex>
                <Flex flex={'3'} style={{ paddingLeft: '5rem' }} column>
                    <Title weight={'600'} mb={'1rem'} size={'1.7rem'} style={{ lineHeight: '1.2' }}>Access from any device, where you want and when you want.</Title>
                    <Text mb={'1.5rem'} weight={'500'} size={'.9rem'}>Join the squad and workout with us virtually or in-person.</Text>
                    <div>
                        <Button noShadow primary padding={'0 1rem'} height={'2.5rem'}>free trial</Button>
                    </div>
                </Flex>
            </SecondBlock>
            <Block gray column>
                <Title center size={'1.5rem'} mb={'2rem'}>Reviews</Title>
                <Flex horizontalScroll>
                    {Array(10).fill(
                        <Review
                            stars={5}
                            avatarUrl={exampleAvatar}
                            username={'Jack Black'}
                            body={'Dein Syria per ssadzm nterpatet diffusa plaznitie averit alia advecticiis Dein Syria per ssadzm nterpatet diffusa plaznitie averit alia advecticiis..'}
                        />
                    )}
                </Flex>
            </Block>
            <PricingBlock column style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
                <Title center weight={'600'} mb={'1rem'} size={'1.7rem'}>Join Now</Title>
                <Text center weight={'400'} size={'.9rem'} mb={'3rem'}>We are glad that you have decided to join us. <br /> Choose the plan that best fits your needs.</Text>
                <Flex>
                    <PricingCard column flex={'1'} jc={'center'}>
                        <Title center mb={'1rem'}>Ticket</Title>
                        <Title center color={'#636363'} mb={'1rem'}>£7.99</Title>
                        <Flex jc={'center'}>
                            <Button noShadow primary padding={'0 1rem'} height={'2rem'} width={'6rem'} fontSize={'.8rem'}>BUY</Button>
                        </Flex>
                        <Flex jc={'center'}>
                            <Features>
                                <li><Text size={'.8rem'} weight={'500'}>Redeem for any single session.</Text></li>
                            </Features>
                        </Flex>
                    </PricingCard>
                    <PricingCard column flex={'1'}>
                        <Title center mb={'1rem'}>Ticket</Title>
                        <Title center color={'#636363'} mb={'1rem'}>£7.99</Title>
                        <Flex jc={'center'}>
                            <Button noShadow primary padding={'0 1rem'} height={'2rem'} width={'6rem'} fontSize={'.8rem'}>BUY</Button>
                        </Flex>
                        <Flex jc={'center'}>
                            <Features style={{ width: '85%' }}>
                                <li><Text size={'.8rem'} weight={'500'}>Unlimited live and on-demand classes.</Text></li>
                                <li><Text size={'.8rem'} weight={'500'}>Access to in-person studio classes.</Text></li>
                                <li><Text size={'.8rem'} weight={'500'}>Access to expert fitness coaches and nutritionists.</Text></li>
                            </Features>
                        </Flex>
                    </PricingCard>
                </Flex>
            </PricingBlock>
            <Block gray column>
                <Title center weight={'600'} mb={'1.7rem'} size={'1.7rem'}>Download  Our App</Title>
                <Text center weight={'400'} size={'.9rem'} mb={'2.3rem'}>Integrate your fitness tracker, track your workout progress <br /> and take part in live leaderboard challenges. </Text>
                <Flex jc={'center'}>
                    <img style={{ height: '3rem', marginRight: '2rem' }} src={googlePlay} alt='get on google play' />
                    <img style={{ height: '3rem' }} src={appStore} alt='get on app store' />
                </Flex>
            </Block>
        </StyledLanding>
    )
}

const StyledLanding = styled.div`

`

const Block = styled(Flex) <{ gray?: boolean, first?: boolean }>`

    ${p => p.gray ? `
        background: #F8F8F8;
    ` : ''}

    ${p => p.first ? `
        height: calc(100% - 4rem);
        background: linear-gradient(0deg, #FFFFFF -3%, rgba(255, 255, 255, .7) 60%, rgba(255, 255, 255, 0) 100%);
    ` : ''}

    padding: 2rem 1rem;

    @media only screen and (min-width: 400px) {
        && {
            padding: 2rem 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) {
        && {
            padding: 2rem 5rem;
        }
    }

    @media only screen and (min-width: 1200px) {
        && {
            padding: 2rem 20vw;
        }
    }
`


const ImageWrapper = styled.div`
    width: 100vw;
    height: 20rem;
    background-image: url(${forYouBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
`

const PricingCard = styled(Flex) <{ mr?: string }>`
    background: #FFFFFF;
    box-shadow: 0px 5.46866px 27.3433px rgba(0, 0, 0, 0.1);
    padding: 1rem 1.5rem;
    justify-content: flex-start;
    border-radius: .8rem;

    &&:nth-child(1) {
        margin-right: 4rem;
    }

    @media only screen and (max-width: 992px) {
        &&:nth-child(1) {
            margin-right: 0rem;
            margin-bottom: 1.5rem;
        }
    }

`

const Features = styled.ul`
    list-style-type: none;
    padding: 0;

    && > li::before {
        content: '•';
        margin-right: .3rem;
    }
`

const IconButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SecondBlock = styled(Block)`
    @media only screen and (max-width: 992px) {
        && {
            flex-direction: column;
            padding-top: 2rem!important;
            padding-bottom: 2rem!important;
        }

        && > div:nth-child(1) {
            margin-bottom: 2rem;
        }

        && > div:nth-child(2) {
            padding-left: 0!important;
        }

        && img {
            width: 20rem!important;
        }
    }
`

const PricingBlock = styled(Block)`
    @media only screen and (max-width: 992px) {
        && {
            padding-top: 1rem!important;
            padding-bottom: 2rem!important;
        }
        && > div {
            flex-direction: column;
        }
    }
`