import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Title } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'
import Flex from '../../../Blocks/Flex'
import arrow from '../../../../assets/icons/arrow-down-black.svg'
import faq from '../../../../configs/faq.json'

export interface FaqsProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Faqs(props: FaqsProps): JSX.Element {

    const { style } = props

    return (
        <StyledFaqs style={style}>
            <BackHeader mb='2rem'>
                <Title weight='600' size='1.5rem'>FAQs</Title>
            </BackHeader>
            {
                faq.map(q => (
                    <Question
                        title={q.title}
                        body={q.body}
                    />
                ))
            }
        </StyledFaqs>
    )
}

const Question = (props: { title: string, body: string }): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
        return (
            <div
                style={{ borderBottom: '1px solid #F7F7F7', padding: '1.5rem 0', cursor: 'pointer' }}
            >
                <Flex
                    ai='center'
                    jc='space-between'
                    onClick={() => setIsOpen(false)}
                >
                    <Title mb='1rem'>{props.title}</Title>
                    <img src={arrow} alt='arrow' style={{ height: '.7rem', transform: 'rotate(180deg)' }} />
                </Flex>
                <Text size='1rem'>
                    {props.body}
                </Text>
            </div>
        )
    } else {
        return (
            <Flex
                ai='center'
                jc='space-between'
                style={{ borderBottom: '1px solid #F7F7F7', padding: '1.5rem 0', cursor: 'pointer' }}
                onClick={() => setIsOpen(true)}
            >
                <Title>{props.title}</Title>
                <img src={arrow} alt='arrow' style={{ height: '.7rem' }} />
            </Flex>
        )
    }
}

const StyledFaqs = styled.div`
    padding: 0 1.5rem;
    padding-bottom: 2rem;

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
