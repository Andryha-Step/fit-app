import React from 'react'
import { Title, Button, MultipleSelect, useMultipleSelect, Coach } from '../../Atoms'
import styled from 'styled-components'
import closeButton from '../../../assets/icons/closeButton.svg'
import { Link } from 'react-router-dom'
import Category from '../../Blocks/Category'
import example_avatar_3 from '../../../assets/images/example-avatar-3.png'

export default function Filters() {

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
        <StyledBook>
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

const CustomMultipleSelectContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
`