import React from 'react'
import styled from 'styled-components'
// import Flex from '../Blocks/Flex'
import Text from './Text'

export interface CoachProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    avatarUrl?: string
    name?: string
}

export default function Coach(props: CoachProps): JSX.Element {

    const { style, avatarUrl, name } = props

    return (
        <StyledCoach style={style}>
            <Avatar src={avatarUrl} alt="coach" />
            <Text weight={'600'} color={"black"} center>{name}</Text>
        </StyledCoach>
    )
}

const StyledCoach = styled.div`
    min-width: 5rem;
    margin: 0 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Avatar = styled.img`
    border-radius: 5rem;
    height: 4rem;
    width: 4rem;
    margin-bottom: 1rem;
`
