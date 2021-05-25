import React from 'react'
import styled from 'styled-components'
import Avatar from '../Screens/Chat/Avatar'
// import Flex from '../Blocks/Flex'
import Text from './Text'

export interface CoachProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    avatarUrl?: string
    name?: string

    horizontal?: boolean
}

export default function Coach(props: CoachProps): JSX.Element {

    const { style, avatarUrl, name, horizontal } = props

    return (
        <StyledCoach style={style} horizontal={horizontal}>
            {
                horizontal && <Avatar mr='.5rem' size={'2.5rem'} />
            }
            {
                !horizontal && <Avatar mb='1rem' size={'4rem'} />
            }
            <Text weight={'600'} color={"black"} center size='1rem'>{name}</Text>
        </StyledCoach>
    )
}

const StyledCoach = styled.div<{ horizontal?: boolean }>`
    min-width: 5rem;
    margin: 0 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${p => p.horizontal ? `
        flex-direction: row;
        margin: 0;
    ` : ''}
`

