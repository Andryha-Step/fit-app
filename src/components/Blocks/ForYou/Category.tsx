import React, { useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Title, TabSwitcher, Text } from '../../Atoms'
import arrow from '../../../assets/icons/arrow-right.svg'

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
    const [showRightArrow, setRightArrow] = useState<Boolean>(false)
    const [showLeftArrow, setLeftArrow] = useState<Boolean>(false)

    const ClassesContainerNode: React.Ref<HTMLDivElement> = useRef(null)

    useEffect(() => {

        setRightArrow((ClassesContainerNode.current?.scrollWidth || 0) > (ClassesContainerNode.current?.clientWidth || 0))

    }, [ClassesContainerNode])


    const onArrowClick = (e: React.MouseEvent<HTMLDivElement>) => {

        const isLeft = (e.target as HTMLDivElement).id === 'left'

        const card = ClassesContainerNode.current?.getElementsByTagName('div')[0]
        if (card) {
            const style = getComputedStyle(card);
            const cardMarginHorizontal = parseInt(style.marginLeft) + parseInt(style.marginRight);
            const cardWidth = card?.offsetWidth
            const cardFullWidth = cardWidth + cardMarginHorizontal

            if (isLeft) {
                ClassesContainerNode.current?.scrollTo(ClassesContainerNode.current?.scrollLeft - cardFullWidth, 0);
            } else {
                ClassesContainerNode.current?.scrollTo(ClassesContainerNode.current?.scrollLeft + cardFullWidth, 0);
            }

            console.log(cardFullWidth, ClassesContainerNode.current?.scrollLeft, isLeft, (e.target as HTMLDivElement).id)

        } else {
            if (isLeft) {
                ClassesContainerNode.current?.scrollTo(ClassesContainerNode.current?.scrollLeft - 300, 0);
            } else {
                ClassesContainerNode.current?.scrollTo(ClassesContainerNode.current?.scrollLeft + 300, 0);
            }
        }

    }

    function onContainerScroll(e:React.UIEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement

        if (target.scrollWidth > (target.clientWidth + target.scrollLeft)) {
            setRightArrow(true)
        } else if (target.scrollWidth === (target.clientWidth + target.scrollLeft)) {
            setRightArrow(false)
        } 

        if (target.scrollLeft === 0) {
            setLeftArrow(false)
        } else {
            setLeftArrow(true)
        }
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
                            tabs={tabs}
                            currentTab={currentTab}
                            onSwitch={onSwitch}
                            borderIndicatior
                            containerClassName={'category-switcher'}
                            tabClassName={'category-switcher-tab'}
                        />
                }
            </HeaderContainer>
            <ArrowsContainer>
                <ArrowContainer hide={!showRightArrow}>
                    <Arrow id={'right'} onClick={onArrowClick}>
                        <img src={arrow} alt="" id={'right'}/>
                    </Arrow>
                </ArrowContainer>
                <ArrowContainer hide={!showLeftArrow} left>
                    <Arrow id={'left'} onClick={onArrowClick} left>
                        <img src={arrow} alt="" id={'left'}/>
                    </Arrow>
                </ArrowContainer>
                 <ClassesContainer onScroll={onContainerScroll} ref={ClassesContainerNode}> 
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

    & > div:last-child {
        margin-right: 2rem;
    }

    ${p => p.tabs ? `
        margin: 1rem 0rem;
    ` : ''}

    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Arrow = styled.div<{left?: boolean}>`
    width: 3rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;

    ${p => p.left ? `
        transform: rotate(180deg);
    ` : ''}
`

const ArrowContainer = styled.div<{hide?: boolean, left?: boolean}>`
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: opacity .2s;

    ${p => p.left ? `
        left: 2rem;
    ` : ''}

    ${p => !p.left ? `
        right: 2rem;
    ` : ''}

    ${p => p.hide ? `
        opacity: 0;
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
