import React from 'react'
import styled from 'styled-components'
import { Button, Text, Title } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'

export interface MembershipProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Membership(props: MembershipProps): JSX.Element {

    const { style } = props

    return (
        <StyledMembership style={style}>
            <BackHeader mb='2rem'>
                <Title weight='600' size='1.5rem'>Membership</Title>
            </BackHeader>
            <Title mb='1rem' weight='500' size='1.5rem'>You don’t currently have an active subscription.</Title>
            <Text size='1rem' mb='2rem'>We are glad that you have decided to join us. <br /> Choose the plan that best fits your needs.</Text>
            <PlanCard>
                <Title mb='.8rem' weight='600'>Ticket</Title>
                <Title mb='1.2rem' weight='600' color='#636363'>£7.99</Title>
                <Button primary width='10rem'>BUY</Button>
                <ul>
                    <li><Text size='1rem'>Redeem for any single session.</Text></li>
                </ul>
            </PlanCard>
            <PlanCard>
                <Title mb='.8rem' weight='600'>Monthly Membership</Title>
                <Title mb='1.2rem' weight='600' color='#636363'>£14.99</Title>
                <Button primary width='10rem'>BUY</Button>
                <ul>
                    <li><Text size='1rem'>Unlimited live and on-demand classes</Text></li>
                    <li><Text size='1rem'>Access to in-person studio classes</Text></li>
                    <li><Text size='1rem'>Access to expert fitness coaches and nutritionists.</Text></li>
                </ul>
            </PlanCard>
        </StyledMembership>
    )
}

const StyledMembership = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 10vw;
        max-width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 1.5rem 25vw;
        max-width: 50vw;
    }

    @media screen and (min-width: 1600px) {
        padding: 1.5rem 30vw;
        max-width: 40vw;
    }
`

const PlanCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: .8rem;
    padding: 2rem 0;
    margin-bottom: 1.5rem;

    && li {
        list-style-type: none;
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
    }

    & ul {
        padding: 0;
        margin: 0;
        margin-top: 2rem;
    }

    && li::before {
        content: '•';
        display: inline-block;
        padding-bottom: .3rem;
        margin-right: .5rem;
        font-size: 1.5rem;
    }
`