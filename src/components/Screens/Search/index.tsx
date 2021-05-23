import React from 'react'
import styled from 'styled-components'
import closeButton from '../../../assets/icons/closeButton.svg'
import { Title, MultipleSelect, useMultipleSelect, Button, Coach } from '../../Atoms'
import Category from '../../Blocks/Category'
import example_avatar_3 from '../../../assets/images/example-avatar-3.png'
import { useHistory } from 'react-router'


export interface SearchProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Search(props: SearchProps): JSX.Element {

    const { style } = props

    const history = useHistory()

    const closeButtonClick = () => {
        history.goBack()
    }

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

    const titleProps = {
        weight: '500',
    }

    const multipleSelectTitleProps = {
        size: '0.8rem'
    }

    return (
        <StyledSearch style={style}>
            <SearchHeader>
                <Title style={{ flex: 1 }}>Search</Title>
                <img src={closeButton} alt="closeButton" onClick={closeButtonClick} />
            </SearchHeader>
            <Category
                title="Durations"
                noScroll
                titleProps={titleProps}
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
                titleProps={titleProps}
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
                titleProps={titleProps}
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
                titleProps={titleProps}
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
                titleProps={titleProps}
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
                titleProps={titleProps}
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
            <SearchButtonContainer>
                <Button primary width={'25rem'} noShadow>SEARCH</Button>
            </SearchButtonContainer>
        </StyledSearch>
    )
}

const StyledSearch = styled.div`

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

    padding-bottom: 5rem!important;
`

const SearchHeader = styled.div`
    display: flex;
    padding: 0 2rem;
    width: 100%;
    align-items: center;
    height: 5rem;
`

const CustomMultipleSelectContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
`

const SearchButtonContainer = styled.div`
    position: fixed;
    z-index: 10;
    bottom: .5rem;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;

    @media screen and (max-width: 600px) {
        background-color: white;
        padding-top: 1rem;
        border-top: 1px solid #EFEFEF;
    }
`