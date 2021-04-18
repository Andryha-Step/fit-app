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
}

export default function PeopleIn(props: PeopleInProps): JSX.Element {

    const { style, size } = props
    return (
        <StyledPeopleIn style={style}>
            <Avatars size={size}>
                <img style={{ zIndex: 1, right: (parseInt(size || '1.3') / 2) * 0 + 'rem' }} src={example_avatar_1} alt="avatar" />
                <img style={{ zIndex: 2, right: (parseInt(size || '1.3') / 2) * 1 + 'rem' }} src={example_avatar_2} alt="avatar" />
                <img style={{ zIndex: 3, right: (parseInt(size || '1.3') / 2) * 2 + 'rem' }} src={example_avatar_3} alt="avatar" />
                <div style={{ zIndex: 4, right: (parseInt(size || '1.3') / 2) * 3 + 'rem' }}><Text color={'white'}>+200</Text></div>
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
        font-size: 0.45rem;
        margin-top: 0.1rem;
    }
`