import React from 'react'
import styled from 'styled-components'
import { Logo, TabSwitcher, useTabSwitcher, Title } from '../../Atoms'
import calendarAdd from '../../../assets/icons/calendar-add.svg'
import settings from '../../../assets/icons/settings.svg'
import Calendar from '../../Blocks/Book/Calendar'
import BookClassCard from '../../Blocks/Book/BookClassCard'
import Flex from '../../Blocks/Flex'

export interface BookProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Book(props: BookProps): JSX.Element {

    const { style } = props
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
        <StyledBook style={style}>
            {/* <BookHeader>
                <Logo style={{ justifyContent: 'flex-start', paddingLeft: '1.5rem', height: '100%' }} flex={'1'} dark />
                <CalendarAdd src={calendarAdd} alt="calendar add" />
            </BookHeader> */}
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
                <TabSwticherCustomTab>
                    <img src={settings} alt="settings" />
                    <Title
                        size={'1rem'}
                        style={{ flex: 1 }}
                        weight={'600'}
                    >More Filtes</Title>
                </TabSwticherCustomTab>
            </OptionsContainer>
            <Calendar />
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

const StyledBook = styled.div`
    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 0 10vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 0 15vw;
    }

    @media screen and (min-width: 1200px) {
        padding: 0 20vw;
    }
`

// const BookHeader = styled.div`
//     height: 5rem;
//     display: flex;
//     justify-content: space-between;
// `

// const CalendarAdd = styled.img`
//     height: calc(100% - 2rem);
//     padding: 1rem;
// `

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
