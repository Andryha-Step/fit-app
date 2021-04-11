import React, { MouseEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../Atoms'
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

    const startShift = currentStartDate.getDay() ? currentStartDate.getDay() - 1 : 6;
    const calendarElements = [...Array(startShift).fill(null), ...Array(getMonthDayCount(currentStartDate)).fill(null).map((el, i) => i)];

    return (
        <StyledCalendar style={style}>
            <CalendarHeader>
                <Title style={{ flex: 1 }} weight={'500'} noMargin>{months[currentStartDate.getMonth()]} {currentStartDate.getFullYear()}</Title>
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
                        <CalendarDay selectable={day !== null}>
                            <Title center weight={'400'}>{day !== null ? day + 1 : ''}</Title>
                        </CalendarDay>
                    ))
                }
            </CalendarGrid>
        </StyledCalendar>
    )
}

const StyledCalendar = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    width: calc(100% - 3rem);
`

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;

    && img {
        height: 2.5rem;
    }
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
    /* grid-template-rows: repeat(7, 1fr); */
    grid-column-gap: .8rem;
    margin: 1rem;
`

const CalendarDay = styled.div<{ selectable?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    && > span {
        width: 3rem;
        height: 3rem;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    ${p => p.selectable ? `
        && > span:hover {
            background: linear-gradient(122.49deg, rgba(66, 159, 186, 0.3) 0%, rgba(33, 126, 154, 0.3) 100%);
        } 
    ` : ''}
`
// const CalendarHeader = styled.div`

// `
