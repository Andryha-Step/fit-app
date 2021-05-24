import React from 'react'
import styled from 'styled-components'
import { TabSwitcher, useTabSwitcher, Title } from '../../Atoms'
import settings from '../../../assets/icons/settings.svg'
import Calendar from './Calendar'
import BookClassCard from './BookClassCard'
import Flex from '../../Blocks/Flex'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Appointment from './Appointment'
import Filters from './Filters'

export interface BookProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Book(props: BookProps): JSX.Element {

    const { style } = props
    const history = useHistory();

    if (history.location.pathname === '/app/book') {
        return <Main style={style} />
    }

    if (history.location.pathname === '/app/book/book-appointment') {
        return <Appointment />
    }

    if (history.location.pathname === '/app/book/filters') {
        return <Filters />
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
                            noWrap
                        >More Filters</Title>
                    </TabSwticherCustomTab>
                </Link>
            </OptionsContainer>
            <Calendar weekMode={calendarTypeSwitcher.currentTab === 'week'} style={{ margin: "1.5rem" }} />
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


const StyledBook = styled.div<{ mobilePadding?: boolean }>`
    margin-bottom: 8rem;
    ${p => p.mobilePadding ? `
        padding: 0 1rem;
    ` : ''}
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
    display: flex;

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
