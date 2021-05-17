import React from 'react'
import styled from 'styled-components'
import { SlideToggle, Title } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'
import Flex from '../../../Blocks/Flex'

export interface NotificationsProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Notifications(props: NotificationsProps): JSX.Element {

    const { style } = props

    return (
        <StyledNotifications style={style}>
            <BackHeader mb='2rem'>
                <Title weight='600' size='1.5rem'>Notifications</Title>
            </BackHeader>
            <Title weight='600'>Reminders</Title>
            <SliderRow jc='space-between'>
                <Title weight='400'>Workouts</Title>
                <SlideToggle />
            </SliderRow>
            <SliderRow jc='space-between' mb='2rem'>
                <Title weight='400'>Appointments</Title>
                <SlideToggle />
            </SliderRow>
            <Title weight='600'>Community</Title>
            <SliderRow jc='space-between'>
                <Title weight='400'>Workout requests</Title>
                <SlideToggle />
            </SliderRow >
            <SliderRow jc='space-between' mb='2rem'>
                <Title weight='400'>Completed workouts</Title>
                <SlideToggle />
            </SliderRow>
            <Title weight='600'>Chat</Title>
            <SliderRow jc='space-between'>
                <Title weight='400'>Administrator</Title>
                <SlideToggle />
            </SliderRow >
            <SliderRow jc='space-between' mb='1rem'>
                <Title weight='400'>Group chat</Title>
                <SlideToggle />
            </SliderRow>
        </StyledNotifications >
    )
}

const StyledNotifications = styled.div`
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

const SliderRow = styled(Flex)`
    padding: 1rem 0;
    border-bottom: 1px solid #F7F7F7;
`