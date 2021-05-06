import React from 'react'
import styled from 'styled-components'
import Member from './Member'
import exampleAvatar from '../../../assets/images/example-avatar-5.png'
import exampleAvatar1 from '../../../assets/images/example-avatar-4.png'
import searchGray from '../../../assets/icons/searchGray.svg'
import { Input, TextInput, Title } from '../../Atoms'


export interface MembersProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Members(props: MembersProps): JSX.Element {

    const { style } = props

    return (
        <StyledMembers style={style}>
            {/* <div style={{ marginBottom: '1rem' }}>
                <Title weight='600'>250 members</Title>
            </div> */}
            <TextInput
                placeholder='Search members'
                leftInner={<img src={searchGray} alt='search' />}
                mb='1rem'
            />
            <MembersGrid>
                <Member
                    name='Anna Martin'
                    buttonText="MESSAGE"
                    avatarSrc={exampleAvatar}
                />
                {
                    Array(10).fill(<Member
                        name='Marho'
                        buttonText="START CLASS"
                        avatarSrc={exampleAvatar1}
                    />)
                }
            </MembersGrid>
        </StyledMembers>
    )
}

const StyledMembers = styled.div`
    padding: 1.5rem;
    @media screen and (min-width: 600px) and (max-width: 900px) {
        padding: 1.5rem 20vw;
        max-width: 60vw;
    }

    @media screen and (min-width: 900px) and (max-width: 1300px) {
        padding: 1.5rem 25vw;
        max-width: 50vw;
    }

    @media screen and (min-width: 1300px) {
        padding: 1.5rem 15vw;
        max-width: 70vw;
    }

    @media screen and (min-width: 1800px) {
        padding: 1.5rem 10vw;
        max-width: 80vw;
    }
`

const MembersGrid = styled.div`
    @media screen and (min-width: 1300px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`