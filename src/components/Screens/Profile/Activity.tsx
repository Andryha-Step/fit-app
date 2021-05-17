import React from 'react'
import styled from 'styled-components'
import { PeopleIn } from '../../Atoms'
import Calendar from '../Book/Calendar'
import Post from '../Community/Post'

export interface ActivityProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Activity(props: ActivityProps): JSX.Element {

    const { style } = props

    return (
        <StyledActivity style={style}>
            <Calendar
                weekMode
            />
            {
                Array(3).fill(
                    <Post
                        type='completed-card'
                        contact='Sansa, Laura, Marho, David...'
                        likes={1892}
                        comments={72}
                        time='Just now'
                        avatar={<PeopleIn size={"2.8rem"} count={1} />}
                    />
                )
            }
        </StyledActivity>
    )
}

const StyledActivity = styled.div`

`