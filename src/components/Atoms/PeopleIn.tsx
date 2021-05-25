import React from 'react'
import styled from 'styled-components'
import example_avatar_1 from '../../assets/images/example-avatar-1.png'
import example_avatar_2 from '../../assets/images/example-avatar-2.png'
import example_avatar_3 from '../../assets/images/example-avatar-3.png'
import Text from './Text'

export interface PeopleInProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    size?: string;
    count?: number;
}

export default function PeopleIn(props: PeopleInProps): JSX.Element {

    const { style, size, count } = props
    return (
        <StyledPeopleIn style={style}>
            <Avatars size={size}>
                {
                    Array(count || 3).fill(null).map((el, i) => {
                        return (
                            <img style={{ zIndex: i + 1, right: (parseInt(size || '1.3') / 2.5) * i + 'rem' }} src={[example_avatar_1, example_avatar_2, example_avatar_3][i]} alt="avatar" />
                        )
                    })
                }
                <div style={{ zIndex: (count || 3) + 1, right: (parseInt(size || '1.3') / 2.5) * (count || 3) + 'rem' }}><Text color={'white'}>+200</Text></div>
            </Avatars>
        </StyledPeopleIn>
    )
}

const StyledPeopleIn = styled.div`

`

const Avatars = styled.div<{ size?: string }>`
    display: flex;

    & > * {
        height: ${p => p.size || '1.3rem'};
        width: ${p => p.size || '1.3rem'};
        border-radius: 5rem;
        border: 1px solid white;
        position: relative;
    }

    & > div {
        background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);
        display: flex;
        justify-content: center;
        align-content: center;
    }

    & > div > span {
        display: flex;
        align-items: center;
        font-size: ${p => parseInt(p.size || '') / 2 || '.45'}rem;
        margin-top: 0.1rem;
    }
`