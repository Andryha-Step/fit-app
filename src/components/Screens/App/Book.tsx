import React, { useState } from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie';
import { Logo, TabSwitcher, useTabSwitcher, Title, Button, Modal, Text, MultipleSelect, useMultipleSelect, Coach } from '../../Atoms'
import calendarAdd from '../../../assets/icons/calendar-add.svg'
import settings from '../../../assets/icons/settings.svg'
import Calendar from '../../Blocks/Book/Calendar'
import BookClassCard from '../../Blocks/Book/BookClassCard'
import Flex from '../../Blocks/Flex'
import { useHistory } from 'react-router'
import closeButton from '../../../assets/icons/closeButton.svg'
import success from '../../../assets/icons/success.svg'
import { Link } from 'react-router-dom'
import Category from '../../Blocks/Global/Category'
import example_avatar_3 from '../../../assets/images/example-avatar-3.png'

export interface BookProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

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

export default function Book(props: BookProps): JSX.Element {

    const { style } = props
    const history = useHistory();

    if (history.location.pathname === '/app/book') {
        return <Main style={style} />
    }

    if (history.location.pathname === '/app/book/book-appointment') {
        return <Appointment style={style} />
    }

    if (history.location.pathname === '/app/book/filters') {
        return <Filters style={style} />
    }

    return <></>;
}

function Main(props: BookProps) {

    const calendarTypeSwitcher = useTabSwitcher({
        tabs: [{
            id: 'week',
            title: 'Week'
        }, {
            id: 'month',
            title: 'Month'
        }]
    })

    return (
        <StyledBook style={props.style} mobilePadding>
            <OptionsContainer>
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
                <Link to="/app/book/filters" style={{ textDecoration: 'none' }}>
                    <TabSwticherCustomTab>
                        <img src={settings} alt="settings" />
                        <Title
                            size={'1rem'}
                            style={{ flex: 1 }}
                            weight={'600'}
                        >More Filtes</Title>
                    </TabSwticherCustomTab>
                </Link>
            </OptionsContainer>
            <Calendar weekMode={calendarTypeSwitcher.currentTab === 'week'} />
            <Flex>
                <Title style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>Thursday 08, October 2021</Title>
            </Flex>
            <BookClassCard
                title={'Abs Blast'}
                subTitle={'Strength'}
                duration={'45m'}
                iconType={'remote'}
                time={'20:00'}
                joined
            />
            <BookClassCard
                title={'Full Body Weighted'}
                subTitle={'Strength'}
                duration={'45m'}
                iconType={'remote'}
                time={'21:00'}
            />
            <BookClassCard
                title={'Abs Blast'}
                subTitle={'Strength'}
                duration={'45m'}
                iconType={'remote'}
                time={'22:00'}
                joined
            />
            <BookClassCard
                title={'Abs Blast'}
                subTitle={'Strength'}
                duration={'45m'}
                iconType={'remote'}
                time={'23:00'}
                joined
            />
            <BookClassCard
                title={'Abs Blast'}
                subTitle={'Strength'}
                duration={'45m'}
                iconType={'remote'}
                time={'23:00'}
                joined
            />
            <BookClassCard
                title={'Booked Appointment'}
                subTitle={'Appointment'}
                duration={'45m'}
                iconType={'one_to_one'}
                time={'23:00'}
                joined
                noCover
            />
        </StyledBook>
    )
}

function Appointment(props: BookProps) {

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
        <StyledBook style={props.style} mobilePadding>
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
            <StyledTextarea defaultValue={'What is this appointment about?'} />
            <ConfirmButton>
                <Button noMargin primary width={'20rem'} onClick={handleSubmit}>BOOK</Button>
            </ConfirmButton>
        </StyledBook>
    )
}

function Filters(props: BookProps) {

    const searchTypeSwitcher = useTabSwitcher({
        tabs: [{
            id: 'fitness',
            title: 'Fitness'
        }, {
            id: 'experiences',
            title: 'Experiences'
        }]
    })

    const targetAreaMultipleSelect = useMultipleSelect({
        buttons: [{
            id: 'fb',
            title: 'Full Body',
        }, {
            id: 'co',
            title: 'Core',
        }, {
            id: 'lb',
            title: 'Lower Body',
        }, {
            id: 'ub',
            title: 'Upper Body',
        }]
    })

    const categoryMultipleSelect = useMultipleSelect({
        buttons: [{
            id: 'cardio',
            title: 'Cardio',
        }, {
            id: 'hiit',
            title: 'HIIT',
        }, {
            id: 'strength',
            title: 'Strength',
        }, {
            id: 'stretch',
            title: 'Stretch',
        }]
    })

    const durationsMultipleSelect = useMultipleSelect({
        buttons: [{
            id: '5_10',
            title: '5-10',
        }, {
            id: '10_20',
            title: '10-20',
        }, {
            id: '20_30',
            title: '20-30',
        }, {
            id: '30',
            title: '30+',
        }]
    })

    const goalMultipleSelect = useMultipleSelect({
        buttons: [{
            id: 'active',
            title: 'Be More Active',
        }, {
            id: 'weight',
            title: 'Lose Weight',
        }, {
            id: 'toned',
            title: 'Stay Toned',
        }, {
            id: 'muscle',
            title: 'Build Muscle',
        }, {
            id: 'stress',
            title: 'Reduce Stress',
        }, {
            id: 'flex',
            title: 'Improve Flexibility',
        }]
    })

    const complatedMultipleSelect = useMultipleSelect({
        buttons: [{
            id: 'completed',
            title: 'Completed',
        }, {
            id: 'not_completed',
            title: 'Not Completed',
        }]
    })

    const categoryTitleProps = {
        weight: '500',
        noMargin: false,
    }

    const multipleSelectTitleProps = {
        size: '0.8rem'
    }

    return (
        <StyledBook style={props.style}>
            <AppointmentHeader>
                <Title style={{ marginLeft: '2rem' }}>Filters</Title>
                <Link to="/app/book">
                    <CloseButton>
                        <img src={closeButton} alt="" />
                    </CloseButton>
                </Link>
            </AppointmentHeader>
            <Category
                title="Durations"
                noScroll
                titleProps={categoryTitleProps}
            >
                <MultipleSelect
                    {...durationsMultipleSelect}
                    customStyledContainer={CustomMultipleSelectContainer}
                    titleProps={multipleSelectTitleProps}
                />
            </Category>
            <Category
                title="Target Area"
                noScroll
                titleProps={categoryTitleProps}
            >
                <MultipleSelect
                    {...targetAreaMultipleSelect}
                    customStyledContainer={CustomMultipleSelectContainer}
                    titleProps={multipleSelectTitleProps}
                />
            </Category>
            <Category
                title="Category"
                noScroll
                titleProps={categoryTitleProps}
            >
                <MultipleSelect
                    {...categoryMultipleSelect}
                    customStyledContainer={CustomMultipleSelectContainer}
                    titleProps={multipleSelectTitleProps}
                />
            </Category>
            <Category
                title="Goal"
                noScroll
                titleProps={categoryTitleProps}
            >
                <MultipleSelect
                    {...goalMultipleSelect}
                    customStyledContainer={CustomMultipleSelectContainer}
                    titleProps={multipleSelectTitleProps}
                />
            </Category>
            <Category
                title="Completed"
                noScroll
                titleProps={categoryTitleProps}
            >
                <MultipleSelect
                    {...complatedMultipleSelect}
                    customStyledContainer={CustomMultipleSelectContainer}
                    titleProps={multipleSelectTitleProps}
                />
            </Category>
            <Category
                title="Trainers"
                noScroll
                titleProps={categoryTitleProps}
                cardMinWidth={'6rem'}
            >
                {
                    Array(8).fill(null).map((el, i) =>
                        <Coach
                            key={i}
                            avatarUrl={example_avatar_3}
                            name="Coach"
                        />
                    )
                }
            </Category>
            <ConfirmButton>
                <Link to={'/app/book'}>
                    <Button primary width={'25rem'} noShadow>APPLY</Button>
                </Link>
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


const OptionsContainer = styled.div`
    display: flex;
    /* align-items: center; */
    margin-left: 1rem;
    padding-top: 1rem;
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

const CustomMultipleSelectContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
`