import React from 'react'
import styled from 'styled-components'
import closeButton from '../../../assets/icons/closeButton.svg'
import { Title, TabSwitcher, Text, useTabSwitcher } from '../../Atoms'

export interface SearchProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Search(props: SearchProps): JSX.Element {

    const { style } = props

    const searchTypeSwitcher = useTabSwitcher({
        tabs: [{
            id: 'fitness',
            title: 'Fitness'
        }, {
            id: 'experiences',
            title: 'Experiences'
        }]
    })

    return (
        <StyledSearch style={style}>
            <SearchHeader>
                <Title noMargin style={{ flex: 1 }}>Search</Title>
                <CloseButton src={closeButton} alt="closeButton" />
            </SearchHeader>
            <TabSwitcherContainer>
                <TabSwitcher
                    {...searchTypeSwitcher.tabSwitcherProps}
                    customTab={({ tab, active, onClick }) => (
                        <TabSwticherCustomTab id={tab.id + ''} onClick={onClick} active={active}>
                            <Title
                                id={tab.id + ''}
                                size={'0.8rem'}
                            >{tab.title}</Title>
                        </TabSwticherCustomTab>
                    )}
                />
            </TabSwitcherContainer>
        </StyledSearch>
    )
}

const StyledSearch = styled.div`
    
`

const SearchHeader = styled.div`
    display: flex;
    padding: 0 2rem;
    width: calc(100vw - 4rem);
    align-items: center;
    height: 5rem;
`

const CloseButton = styled.img`

`

const TabSwitcherContainer = styled.div`

`

const TabSwticherCustomTab = styled.div<{ active?: boolean }>`
    padding: 0.5rem 2rem;
    border-radius: 5rem;

    ${p => p.active ? `
        background: rgba(48, 143, 171, 0.2);
    ` : `
        background: #F8F8F8;
    `}

`

