import React, { MouseEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, Title } from '../../Atoms'
import arrow_img from '../../../assets/icons/circle-arrow.svg'

export interface CalendarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const getMonthDayCount = (startDate: Date) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
}

export default function Calendar(props: CalendarProps): JSX.Element {

    const { style } = props

    const [currentStartDate, setCurrentStartDate] = useState<Date>(new Date())

    useEffect(() => { // Sets current month's start date
        const newStartDate = new Date()
        newStartDate.setDate(1);
        setCurrentStartDate(newStartDate)
        console.log(newStartDate);
    }, [])

    const startShift = currentStartDate.getDay() ? currentStartDate.getDay() - 1 : 6;
    const calendarElements = [...Array(startShift).fill(null), ...Array(getMonthDayCount(currentStartDate)).fill(null).map((el, i) => i)]

    const hangleArrowClick: MouseEventHandler<HTMLImageElement> = (event) => {
        const target = event.target as HTMLImageElement
        console.log(target.id)

        if (target.id === 'left') {
            changeMonth(-1)
        } else if (target.id === 'right') {
            changeMonth(1)
        }
    }

    const changeMonth = (number: number) => {
        const newStartDate = new Date(currentStartDate)
        newStartDate.setMonth(newStartDate.getMonth() + number)
        setCurrentStartDate(newStartDate)
    }

    return (
        <StyledCalendar style={style}>
            <CalendarHeader>
                <Title style={{ flex: 1 }} weight={'500'}>{months[currentStartDate.getMonth()]} {currentStartDate.getFullYear()}</Title>
                <ArrowContainer>
                    <Arrow src={arrow_img} alt="arrow" id="left" onClick={hangleArrowClick} />
                    <Arrow src={arrow_img} alt="arrow" id="right" onClick={hangleArrowClick} right />
                </ArrowContainer>
            </CalendarHeader>
            <CalendarGrid>
                {
                    daysOfWeek.map(day => (
                        <Title center weight={'500'} style={{ marginBottom: '2rem' }}>{day}</Title>
                    ))
                }
                {
                    calendarElements.map(day => (
                        <Title center weight={'400'}>{day !== null ? day + 1 : ''}</Title>
                    ))
                }
            </CalendarGrid>
        </StyledCalendar>
    )
}

const StyledCalendar = styled.div`
    margin-top: 1rem;
`

const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
`

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
`
const Arrow = styled.img<{ right?: boolean }>`

    ${p => p.right ? `
        transform: rotate(180deg);
    ` : `
        padding-right: 1rem;
    `}

`
const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 1rem;
`
// const CalendarHeader = styled.div`

// `
// const CalendarHeader = styled.div`

// `
