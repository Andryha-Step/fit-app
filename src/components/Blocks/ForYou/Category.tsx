import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Title, TabSwitcher, Text } from '../../Atoms'

interface Tab {
    title: string
    id: string | number
}

export interface CategoryProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    title?: string
    link?: string
    tabs?: Tab[]
    currentTab?: string | number,
    onSwitch?: Function,
    onLinkClick?: React.MouseEventHandler<HTMLSpanElement>
    subtitle?: string | JSX.Element | (() => JSX.Element)
}

export default function Category(props: CategoryProps): JSX.Element {

    const { children, link, title, tabs, currentTab, onSwitch, style, subtitle } = props

    return (
        <div style={style}>
            <CategorySwitcherStyle />
            <HeaderContainer tabs={props.tabs}>
                <Header tabs={props.tabs}>
                    <Title noMargin color='black'>{title}</Title>
                    {
                        link &&
                        <Title noWrap noMargin weight={"500"} size={'0.9rem'} color="#429FBA" clickable onClick={props.onLinkClick}>
                            {link}
                        </Title>
                    }
                </Header>
                {
                    subtitle &&
                    <Text color="black" size="1rem" weight="500">{subtitle}</Text>
                }
                {
                    tabs && currentTab &&
                        <TabSwitcher
                            tabs={tabs}
                            currentTab={currentTab}
                            onSwitch={onSwitch}
                            borderIndicatior
                            containerClassName={'category-switcher'}
                            tabClassName={'category-switcher-tab'}
                        />
                }
            </HeaderContainer>
            {
                children
            }
        </div>
    )
}

const Header = styled.div<CategoryProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${p => p.tabs ? '0.5rem' : '0'};
`

const HeaderContainer = styled.div<CategoryProps>`
    width: calc(100vw - 4rem);
    border-top: 1px solid #E6E5E5;
    ${p => p.tabs ? `
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    ` : ''}
    margin-top: 1rem;
    margin-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    ${p => p.tabs ? `
        border: unset;
        padding-left: 2rem;
        padding-top: 2rem;
        margin-left: 0;
        margin-top: 0;
    ` : ''}
`

const CategorySwitcherStyle = createGlobalStyle`
    .category-switcher {
        overflow-x: scroll;
        height: 100%;
        justify-content: flex-start;
    }

    .category-switcher-tab {
        margin: 0 1.5rem;
        font-size: 0.9rem;
        font-weight: 400;
    }

    .category-switcher-tab > span {
        padding: 0.5rem 0;
    }

    .category-switcher::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 900px) {
        .category-switcher-tab {
            margin: 0 4rem;
        }
    }
`