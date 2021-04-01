import React, { useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Title, TabSwitcher, Text } from '../../Atoms'
// import arrow from '../../../assets/icons/arrow-right.svg'
import useArrows from '../../../hooks/useArrows';

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
    noScroll?: boolean,
    cardMinWidth?: string;
}

export default function Category(props: CategoryProps): JSX.Element {

    const { children, link, title, tabs, currentTab, onSwitch, style, subtitle, noScroll, cardMinWidth } = props

    const {
        leftArrow, 
        rightArrow,
        scrollContainerRef,
        onContainerScroll
    } = useArrows();

    const SwitcherContainerRef: React.Ref<HTMLDivElement> = useRef(null)
 
    function onTabSwitch(id: string) {
        onSwitch && onSwitch(id)
    }

    return (
        <StyledCatagory style={style}>
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
                            containerRef={SwitcherContainerRef}
                            tabs={tabs}
                            currentTab={currentTab}
                            onSwitch={onTabSwitch}
                            borderIndicatior
                            containerClassName={'category-switcher'}
                            tabClassName={'category-switcher-tab'}
                            withScroll
                        />
                }
            </HeaderContainer>
            <ArrowsContainer>
                {
                    !noScroll && <ArrowContainer>
                        { rightArrow }
                    </ArrowContainer>
                }
                {
                    !noScroll && <ArrowContainer left>
                        { leftArrow }
                    </ArrowContainer>
                }
                 <ClassesContainer cardMinWidth={cardMinWidth} noScroll={noScroll} onScroll={onContainerScroll} ref={scrollContainerRef}> 
                    {
                        children
                    }
                </ClassesContainer>
            </ArrowsContainer>
        </StyledCatagory>
    )
}

const StyledCatagory = styled.div`
    position: relative;
`

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

const ArrowsContainer = styled.div`
    width: 100%;
    position: relative;
`

const ClassesContainer = styled.div<CategoryProps>`
    display: flex;
    width: calc(100vw - 3rem);
    padding: 0 1rem;
    margin-right: 1rem;

    ${p => p.tabs ? `
        margin: 1rem 0rem;
    ` : ''}

    ${p => !p.noScroll ? `
        overflow-x: scroll;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }

        & > div:last-child {
            margin-right: 2rem;
        }
    ` : `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${p.cardMinWidth}, 1fr));
    `}
`



const ArrowContainer = styled.div<{hide?: boolean, left?: boolean}>`
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    ${p => p.left ? `
        left: 2rem;
    ` : ''}

    ${p => !p.left ? `
        right: 2rem;
    ` : ''}

    @media screen and (max-width: 992px) {
        display: none;
    }
`

const CategorySwitcherStyle = createGlobalStyle`
    .category-switcher {
        height: 100%;
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
