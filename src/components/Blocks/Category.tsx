import React, { useRef } from 'react'
import styled from 'styled-components'
import { Title, TabSwitcher, Text, useTabSwitcher, TitleProps } from '../Atoms'
// import arrow from '../../../assets/icons/arrow-right.svg'
import useArrows from '../../hooks/useArrows';

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
    titleProps?: TitleProps
    withBorder?: boolean
    mb?: string
}

export default function Category(props: CategoryProps): JSX.Element {

    const { children, link, title, tabs, currentTab, onSwitch, style, subtitle, noScroll, cardMinWidth, titleProps, mb } = props
    const scrollContainerRef: React.RefObject<HTMLDivElement> = useRef(null)
    const tabSwitcherContainerRef: React.RefObject<HTMLDivElement & { cardNumber?: number }> = useRef(null);

    const {
        leftArrow,
        rightArrow,
        onContainerScroll: onContainerScrollArrows
    } = useArrows(scrollContainerRef);


    const tabSwitcher = useTabSwitcher({
        tabs: tabs || [],
        fontSize: '0.9rem',
        visualStyle: 'text-vertical-padding',
        borderIndicatior: true,
        withScroll: true,
        onSwitch: onTabSwitch
    })

    function onTabSwitch(id: string) {
        onSwitch && onSwitch(id)
    }

    function onContainerScroll(e: React.UIEvent<HTMLDivElement>) {
        console.log(e);
        const target = e.target as HTMLDivElement

        // if (!scrollContainerRef) return;
        // // target.scrollWidth target.clientWidth target.scrollLeft

        const card = target.getElementsByTagName('div')[0]
        if (card) {
            const style = getComputedStyle(card);
            const cardMarginHorizontal = parseInt(style.marginLeft) + parseInt(style.marginRight);
            const cardWidth = card?.offsetWidth
            const cardFullWidth = cardWidth + cardMarginHorizontal
            if (tabs) {
                // console.log(tabs, tabs[~~(target.scrollLeft / cardFullWidth)], ~~(target.scrollLeft / cardFullWidth))
                tabSwitcher.setTab(tabs[~~(target.scrollLeft / cardFullWidth)].id)
            }

            // scroll to right time
            if (tabSwitcherContainerRef.current) {
                const timeTab = tabSwitcherContainerRef.current.getElementsByTagName('div')[0].getElementsByTagName('div')[0]
                const style = getComputedStyle(timeTab);
                const timeMarginHorizontal = parseInt(style.marginLeft) + parseInt(style.marginRight);
                const timeWidth = timeTab.offsetWidth
                const timeFullWidth = timeWidth + timeMarginHorizontal
                console.log(timeWidth, timeMarginHorizontal, timeFullWidth);
                if (tabSwitcherContainerRef.current.cardNumber !== ~~(target.scrollLeft / cardFullWidth)) {
                    tabSwitcherContainerRef.current.cardNumber = ~~(target.scrollLeft / cardFullWidth)
                    tabSwitcherContainerRef.current.scrollLeft = tabSwitcherContainerRef.current.cardNumber * timeFullWidth;
                }
            }
        }

        onContainerScrollArrows && onContainerScrollArrows(e)
    }

    return (
        <StyledCatagory style={style} mb={mb}>
            <HeaderContainer tabs={props.tabs} withBorder={props.withBorder}>
                <Header tabs={props.tabs}>
                    <Title color='black' {...titleProps}>{title}</Title>
                    {
                        link &&
                        <Title noWrap weight={"500"} size={'0.9rem'} color="#429FBA" clickable onClick={props.onLinkClick}>
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
                    <TabSwitcherContainer
                        ref={tabSwitcherContainerRef}
                    >
                        <TabSwitcher
                            {...tabSwitcher.tabSwitcherProps}
                            fontSize={'0.9rem'}
                        />
                    </TabSwitcherContainer>
                    // <TabSwitcher
                    //     containerRef={SwitcherContainerRef}
                    //     tabs={tabs}
                    //     currentTab={currentTab}
                    //     onSwitch={onTabSwitch}
                    //     borderIndicatior
                    //     containerClassName={'category-switcher'}
                    //     tabClassName={'category-switcher-tab'}
                    //     withScroll
                    // />
                }
            </HeaderContainer>
            <ArrowsContainer>
                {
                    !noScroll && <ArrowContainer>
                        {rightArrow}
                    </ArrowContainer>
                }
                {
                    !noScroll && <ArrowContainer left>
                        {leftArrow}
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

const StyledCatagory = styled.div<{ mb?: string }>`
    position: relative;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
`

const Header = styled.div<CategoryProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${p => p.tabs ? '0.5rem' : '0'};
`

const HeaderContainer = styled.div<CategoryProps>`
    width: calc(100% - 4rem);
    ${p => p.withBorder ? `
        border-top: 1px solid #E6E5E5;
    ` : ''}
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
    width: calc(100% - 3rem);
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



const ArrowContainer = styled.div<{ hide?: boolean, left?: boolean }>`
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

const TabSwitcherContainer = styled.div`
    max-width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`

