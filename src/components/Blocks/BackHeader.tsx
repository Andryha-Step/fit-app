import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import back from '../../assets/icons/arrow-back.svg'

export interface BackHeaderProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    backLink?: string
    onClick?: () => void
}

export default function BackHeader(props: BackHeaderProps): JSX.Element {

    const { style, children, backLink, onClick } = props
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
        <StyledBackHeader style={style}>
            <Back src={back} alt="" onClick={handleClick} />
            {children}
        </StyledBackHeader>
    )
}

const StyledBackHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 0;
`

const Back = styled.img`
    height: 3rem;
    margin-left: 2rem;
    margin-right: 1rem;
    cursor: pointer;
`