import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import arrow from '../assets/icons/arrow-right.svg'

interface useArrowsHook {
    leftArrow: JSX.Element
    rightArrow: JSX.Element
    scrollContainerRef: React.Ref<HTMLDivElement>
    onContainerScroll: (e:React.UIEvent<HTMLDivElement>) => void
}

export default function useArrows(): useArrowsHook {


    const [showRightArrow, setRightArrow] = useState<boolean>(false)
    const [showLeftArrow, setLeftArrow] = useState<boolean>(false)

    const scrollContainerRef: React.Ref<HTMLDivElement> = useRef(null)

 
    useEffect(() => {

        setRightArrow((scrollContainerRef.current?.scrollWidth || 0) > (scrollContainerRef.current?.clientWidth || 0))

    }, [scrollContainerRef])


    const onArrowClick = (e: React.MouseEvent<HTMLDivElement>) => {

        const isLeft = (e.target as HTMLDivElement).id === 'left'

        const card = scrollContainerRef.current?.getElementsByTagName('div')[0]
        if (card) {
            const style = getComputedStyle(card);
            const cardMarginHorizontal = parseInt(style.marginLeft) + parseInt(style.marginRight);
            const cardWidth = card?.offsetWidth
            const cardFullWidth = cardWidth + cardMarginHorizontal

            if (isLeft) {
                scrollContainerRef.current?.scrollTo(scrollContainerRef.current?.scrollLeft - cardFullWidth, 0);
            } else {
                scrollContainerRef.current?.scrollTo(scrollContainerRef.current?.scrollLeft + cardFullWidth, 0);
            }

        } else {
            if (isLeft) {
                scrollContainerRef.current?.scrollTo(scrollContainerRef.current?.scrollLeft - 300, 0);
            } else {
                scrollContainerRef.current?.scrollTo(scrollContainerRef.current?.scrollLeft + 300, 0);
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

    const leftArrow = (
        <Arrow id={'left'} onClick={onArrowClick} left hideArrow={!showLeftArrow}>
            <img src={arrow} alt="" id={'left'}/>
        </Arrow>
    )

    const rightArrow = (
        <Arrow id={'right'} onClick={onArrowClick} hideArrow={!showRightArrow}>
            <img src={arrow} alt="" id={'right'}/>
        </Arrow>
    )   

    return {
        leftArrow, 
        rightArrow,
        scrollContainerRef,
        onContainerScroll
    }
}

const Arrow = styled.div<{left?: boolean, hideArrow: boolean}>`
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
    transition: opacity .2s;

    ${p => p.left ? `
        transform: rotate(180deg);
    ` : ''}

    ${p => p.hideArrow ? `
        opacity: 0;
    ` : ''}

`