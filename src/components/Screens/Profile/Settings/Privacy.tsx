import React from 'react'
import styled from 'styled-components'
import text from '../../../../configs/privacy.json'
import { Text, Title } from '../../../Atoms'
import BackHeader from '../../../Blocks/BackHeader'

export interface PrivacyProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}

export default function Privacy(props: PrivacyProps): JSX.Element {

    const { style } = props

    return (
        <StyledPrivacy style={style}>
            <BackHeader>
                <Title weight='600' size='1.5rem'>Privacy Policy</Title>
            </BackHeader>
            {
                text.map(par => (
                    <p>
                        {
                            par.title && <Title weight='600' size='1.5rem'>{par.title}</Title>
                        }
                        {
                            par.text && <Text size='1.1rem'>{par.text}</Text>
                        }
                    </p>
                ))
            }
        </StyledPrivacy>
    )
}

const StyledPrivacy = styled.div`
    padding: 0 1.5rem;

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