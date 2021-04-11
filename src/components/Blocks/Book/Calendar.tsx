import React, { MouseEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../../Atoms'
import arrow_img from '../../../assets/icons/circle-arrow.svg'

export interface CalendarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    weekMode?: boolean
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

const getThisWeekDays = (startDate: Date) => {
    const date = new Date(startDate);
    const currentWeekDay = date.getDay() ? date.getDay() - 1 : 6;
    date.setDate(date.getDate() - currentWeekDay);
    return Array(7).fill(0).map((el) => {
        const resDate = new Date(date);
        date.setDate(date.getDate() + 1);
        return resDate;
    })
}

const getMonthDayCount = (startDate: Date) => {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
}

const isToday = (date: Date) => {
    if (!date) return;
    return new Date(date).getDate() === new Date().getDate() &&
        new Date(date).getMonth() === new Date().getMonth() &&
        new Date(date).getFullYear() === new Date().getFullYear();
}

export default function Calendar(props: CalendarProps): JSX.Element {

    const { style, weekMode } = props

    const [currentStartDate, setCurrentStartDate] = useState<Date>(new Date())

    useEffect(() => { // Sets current month's start date
        if (!weekMode) {
            const newStartDate = new Date()
            newStartDate.setDate(1);
            setCurrentStartDate(newStartDate)
        } else {
            const newStartDate = new Date()
            const currentWeekDay = newStartDate.getDay() ? newStartDate.getDay() - 1 : 6;
            newStartDate.setDate(newStartDate.getDate() - currentWeekDay);
            setCurrentStartDate(newStartDate)
        }
    }, [weekMode])

    const hangleArrowClick: MouseEventHandler<HTMLImageElement> = (event) => {
        const target = event.target as HTMLImageElement

        if (weekMode) {
            if (target.id === 'left') {
                changeWeek(-1)
            } else if (target.id === 'right') {
                changeWeek(1)
            }
        } else {
            if (target.id === 'left') {
                changeMonth(-1)
            } else if (target.id === 'right') {
                changeMonth(1)
            }
        }
    }

    const changeMonth = (number: number) => {
        const newStartDate = new Date(currentStartDate)
        newStartDate.setMonth(newStartDate.getMonth() + number)
        setCurrentStartDate(newStartDate)
    }

    const changeWeek = (number: number) => {
        const newStartDate = new Date(currentStartDate)
        newStartDate.setDate(newStartDate.getDate() + (number * 7))
        setCurrentStartDate(newStartDate)
    }


    const startShift = currentStartDate.getDay() ? currentStartDate.getDay() - 1 : 6;
    let calendarElements;
    if (weekMode) {
        calendarElements = getThisWeekDays(currentStartDate);
    } else {
        calendarElements = [...Array(startShift).fill(null), ...Array(getMonthDayCount(currentStartDate)).fill(currentStartDate).map((el, i) => new Date(el).setDate(i + 1))];
    }

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
                    !weekMode && daysOfWeek.map(day => (
                        <Title center weight={'500'} style={{ marginBottom: '2rem' }}>{day}</Title>
                    ))
                }
                {
                    !weekMode && calendarElements.map((date, i) => (
                        <CalendarDay selectable={date !== null} key={i} today={isToday(date)}>
                            <Title center weight={'400'}>{date !== null ? new Date(date).getDate() : ''}</Title>
                        </CalendarDay>
                    ))
                }
                {
                    weekMode && calendarElements.map((date, i) => (
                        <CalendarDay selectable={date !== null} key={i} today={isToday(date)} weekDay>
                            <Title center weight={'500'} style={{ marginBottom: '.5rem' }}>{daysOfWeek[i]}</Title>
                            <Title center weight={'400'}>{date !== null ? new Date(date).getDate() : ''}</Title>
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

const CalendarDay = styled.div<{ selectable?: boolean, today?: boolean, weekDay?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    && > span {
        width: 3rem;
        height: 3rem;
        border-radius: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ${p => p.selectable && p.weekDay ? `
        &&:hover {
            background: linear-gradient(122.49deg, rgba(66, 159, 186, 0.3) 0%, rgba(33, 126, 154, 0.3) 100%);
            border-radius: 2rem;
        }
        && > span {
            height: 2rem;
        }
    ` : ''}
    
    ${p => p.selectable && !p.weekDay ? `
        && > span:hover {
            background: linear-gradient(122.49deg, rgba(66, 159, 186, 0.3) 0%, rgba(33, 126, 154, 0.3) 100%);
        } 
    ` : ''}

    ${p => p.today ? `
        position: relative;
        &&::after {
            content: '';
            width: .5rem;
            height: .5rem;
            background-color: #B0B0B0;
            border-radius: 1rem;
            position: absolute;
            bottom: ${p.weekDay ? '-1rem' : '0'};
        }
    ` : ''}
`
// const CalendarHeader = styled.div`

// `
