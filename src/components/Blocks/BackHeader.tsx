import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import back from '../../assets/icons/arrow-back.svg'
import Flex from './Flex'

export interface BackHeaderProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    backLink?: string
    onClick?: () => void
    mb?: string
}

// A header component with back button

export default function BackHeader(props: BackHeaderProps): JSX.Element {

    const { style, children, backLink, onClick, mb } = props
    const history = useHistory()

    const handleClick = () => {
        if (backLink) {
            history.push(backLink)
        } else {
            if (onClick) {
                onClick()
            } else {
                history.goBack();
            }
        }

    }

    return (
        <StyledBackHeader style={style} mb={mb}>
            <Back src={back} alt="" onClick={handleClick} />
            <Flex ai="center">
                {children}
            </Flex>
        </StyledBackHeader>
    )
}

const StyledBackHeader = styled.header<{ mb?: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 0;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
`

const Back = styled.img`
    height: 3rem;
    margin-right: 1rem;
    cursor: pointer;
`