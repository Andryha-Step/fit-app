import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import closeButton from '../../assets/icons/closeButton.svg'
import Flex from './Flex'

export interface CloseHeaderProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    backLink?: string
    onClick?: () => void
    mb?: string
    pb?: string
}

// A header component with close button

export default function CloseHeader(props: CloseHeaderProps): JSX.Element {

    const { style, children, backLink, onClick, mb, pb } = props
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
        <StyledCloseHeader style={style} mb={mb} pb={pb}>
            <Flex ai="center">
                {children}
            </Flex>
            <Close src={closeButton} alt="close button" onClick={handleClick} />
        </StyledCloseHeader>
    )
}

const StyledCloseHeader = styled.header<{ mb?: string, pb?: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
    ${p => p.pb ? `
        padding-bottom: ${p.pb};
    ` : ''}
`

const Close = styled.img`
    height: 3rem;
    cursor: pointer;
`