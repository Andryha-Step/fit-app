import React from 'react'
import styled from 'styled-components'
import { Logo, TabSwitcher, useTabSwitcher, Title } from '../../Atoms'
import calendarAdd from '../../../assets/icons/calendar-add.svg'
import settings from '../../../assets/icons/settings.svg'
import Calendar from '../../Blocks/Book/Calendar'
import BookClassCard from '../../Blocks/Book/BookClassCard'

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
            <BookHeader>
                <Logo style={{ justifyContent: 'flex-start', paddingLeft: '1.5rem', height: '100%' }} flex={'1'} dark />
                <CalendarAdd src={calendarAdd} alt="calendar add" />
            </BookHeader>
            <OptionsContainer>
                <TabSwitcher
                    {...calendarTypeSwitcher.tabSwitcherProps}
                    width={'unset'}
                    customTab={({ tab, active, onClick }) => (
                        <TabSwticherCustomTab key={tab.id} id={tab.id + ''} onClick={onClick} active={active}>
                            <Title
                                id={tab.id + ''}
                                size={'1rem'}
                            >{tab.title}</Title>
                        </TabSwticherCustomTab>
                    )}
                />
                <TabSwticherCustomTab>
                    <img src={settings} alt="settings" />
                    <Title
                        size={'1rem'}
                        style={{ flex: 1 }}
                    >More Filtes</Title>
                </TabSwticherCustomTab>
            </OptionsContainer>
            <Calendar />
            <BookClassCard />
        </StyledBook>
    )
}

const StyledBook = styled.div`

`

const BookHeader = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;

`

const CalendarAdd = styled.img`
    height: calc(100% - 2rem);
    padding: 1rem;
`

const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

const TabSwticherCustomTab = styled.div<{ active?: boolean }>`
    padding: 0.5rem 2rem;
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
