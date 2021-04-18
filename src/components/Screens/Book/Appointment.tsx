import React, { useState } from 'react'
import { TabSwitcher, useTabSwitcher, Title, Button, Modal, Text } from '../../Atoms'
import styled from 'styled-components'
import Calendar from './Calendar'
import Flex from '../../Blocks/Flex'
import closeButton from '../../../assets/icons/closeButton.svg'
import success from '../../../assets/icons/success.svg'
import { Link } from 'react-router-dom'

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

const dayOfWeek = [
    'tuesday',
    'wednesday',
    'thursday',
    'friday	',
    'saturday',
    'sunday',
    'monday',
]

export default function Appointment() {

    const [currentSelectedDate, setCurrentSelectedDate] = useState<Date>(new Date(0));
    const [isModalOpen, setModalOpen] = useState(false)

    const calendarTypeSwitcher = useTabSwitcher({
        tabs: [{
            id: 'week',
            title: 'Week'
        }, {
            id: 'month',
            title: 'Month'
        }]
    })

    const handleTimeSelect = (date: Date) => {
        const newDate = new Date(currentSelectedDate || 0)
        newDate.setHours(date.getHours(), date.getMinutes())
        setCurrentSelectedDate(newDate)
    }

    const handleCalendarSelect = (date: Date) => {
        const newDate = new Date(date || 0)
        newDate.setHours(currentSelectedDate.getHours(), currentSelectedDate.getMinutes())
        setCurrentSelectedDate(newDate)
    }

    const isTimeSelected = (date: Date) => {
        return date.getHours() === currentSelectedDate.getHours() && date.getMinutes() === currentSelectedDate.getMinutes()
    }

    const handleSubmit = () => {
        if (currentSelectedDate !== null) {
            setModalOpen(true);
        }
    }

    return (
        <StyledBook mobilePadding>
            <Modal
                wrapperTemplate={'white-box'}
                isOpen={isModalOpen}
            >
                <ModalContainer>
                    <img src={success} alt="" />
                    <Title>Appointment Booked!</Title>
                    <Text center>
                        {dayOfWeek[currentSelectedDate.getDay()] + ' '}
                        {currentSelectedDate.getDate() + ', '}
                        {months[currentSelectedDate.getMonth() || 0] + ' '}
                        {currentSelectedDate.getFullYear()} <br />
                        {currentSelectedDate.getHours()}:
                        {currentSelectedDate.getMinutes() || '00'} <br />
                        With <b>Coach</b>
                    </Text>
                    <Flex jc={'center'} style={{ marginTop: '1.5rem' }}>
                        <Button fontSize={'.8rem'} width="10rem" noShadow transparentDark>EDIT</Button>
                        <Button fontSize={'.8rem'} width="10rem" noShadow primary onClick={() => setModalOpen(false)}>PROCEED</Button>
                    </Flex>
                </ModalContainer>
            </Modal>
            <AppointmentHeader>
                <Title>Book Appointment</Title>
                <Link to="/app/book">
                    <CloseButton>
                        <img src={closeButton} alt="" />
                    </CloseButton>
                </Link>
            </AppointmentHeader>
            <Title size={'1rem'} weight={'600'}>Select Date</Title>
            <SwitcherContainer>
                <TabSwitcher
                    {...calendarTypeSwitcher.tabSwitcherProps}
                    width={'unset'}
                    customTab={({ tab, active, onClick }) => (
                        <TabSwticherCustomTab key={tab.id} id={tab.id + ''} onClick={onClick} active={active}>
                            <Title
                                id={tab.id + ''}
                                size={'1rem'}
                                weight={'600'}
                            >{tab.title}</Title>
                        </TabSwticherCustomTab>
                    )}
                />
            </SwitcherContainer>
            <Calendar weekMode={calendarTypeSwitcher.currentTab === 'week'} onDateSelect={handleCalendarSelect} />
            <StyledBlock>
                <Title size={'1rem'} weight={'600'}>Select Time</Title>
                <TimeSelector>
                    {
                        getTimeSelectorElements(6, 30, 21, 0).map((date, i) => (
                            <TimeButton selected={isTimeSelected(date)} onClick={() => handleTimeSelect(date)}>{date.getHours()}:{date.getMinutes() || '00'}</TimeButton>
                        ))
                    }
                </TimeSelector>
            </StyledBlock>
            <StyledBlock>
                <Title size={'1rem'} weight={'600'}>Additional Notes</Title>
            </StyledBlock>
            <StyledTextarea placeholder={'What is this appointment about?'} />
            <ConfirmButton>
                <Button noMargin primary width={'20rem'} onClick={handleSubmit}>BOOK</Button>
            </ConfirmButton>
        </StyledBook>
    )
}

function getTimeSelectorElements(startHours: number, startMinutes: number, endHours: number, endMinutes: number): Date[] {
    const startTime = new Date()
    startTime.setHours(startHours, startMinutes, 0, 0);
    const endTime = new Date()
    endTime.setHours(endHours, endMinutes, 0, 0);

    const timeSelectorElements = [];

    for (let t = startTime.getTime(); t < endTime.getTime(); t += 30 * 60 * 1000) {
        timeSelectorElements.push(new Date(t));
    }

    timeSelectorElements.push(endTime)

    return timeSelectorElements;
}

const StyledBook = styled.div<{ mobilePadding?: boolean }>`
    margin-bottom: 8rem;
    ${p => p.mobilePadding ? `
        padding: 0 1rem;
    ` : ''}
    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 0 10vw;
        width: 80vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 0 15vw;
        width: 70vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 0 20vw;
        width: 60vw;
    }
`


const TabSwticherCustomTab = styled.div<{ active?: boolean }>`
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    border-radius: 5rem;
    cursor: pointer;

    & > img {
        vertical-align: middle;
        margin-right: 0.5rem;
        padding-bottom: 2px;
    }

    ${p => p.active ? `
        background: rgba(48, 143, 171, 0.2);
    ` : `
        background: #F8F8F8;
    `}
`

const AppointmentHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

`

const CloseButton = styled.button`
    background: transparent;
    border: 0;
`

const StyledBlock = styled.div`
    border-top: 1px solid#EFEFEF;
    padding-top: 2rem;
    margin-top: 1rem;
`

const TimeSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TimeButton = styled.div<{ selected?: boolean }>`
    padding: .8rem 0;
    margin: .5rem 0.5rem;
    border-radius: 5rem;
    cursor: pointer;
    background: #F8F8F8;
    min-width: 5rem;
    text-align: center;

    &&:hover {
        background-color: rgba(48, 143, 171, 0.3);
    }

    ${p => p.selected ? `
        background-color: rgba(48, 143, 171, 0.3);
    ` : ''}
`

const StyledTextarea = styled.textarea`
    background-color: #F8F8F8;
    border-radius: 1.5rem;
    padding: 1rem;
    font-family: 'Poppins';
    font-size: 1rem;
    min-width: calc(100% - 4rem);
    border: 0;
    min-height: 10rem;
    margin-top: 1rem;

    &&::placeholder {
        color: #C5C5C5;
    }
`

const ConfirmButton = styled.div`
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 5;
    background-color: #FCFCFC;
    padding: 1rem 0;
`

const SwitcherContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    && > div > div { // Switcher Tab
        margin-left: 0;
    }
`

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        height: 4rem;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
`
