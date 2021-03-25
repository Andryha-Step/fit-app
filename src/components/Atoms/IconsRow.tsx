import React from 'react'
import styled from 'styled-components'
import Text from './Text'

export interface IconsRowProps {
    children?: React.ReactNode
    style?: React.CSSProperties,
    icons?: Icon[]
    iconSize?: string
    fontSize?: string
}

interface Icon {
    src: string
    alt: string
    title: string;
}

export default function IconsRow(props: IconsRowProps): JSX.Element {

    const { icons } = props

    return (
        <IconsWrapper {...props}>
            {
                icons && icons.map((icon, i) => (
                    <IconsElement key={i} {...props}>
                        <IconImg {...props} src={icon.src} alt={icon.alt}/>
                        <Text color="black">{icon.title}</Text>
                    </IconsElement>
                ))
            }
        </IconsWrapper>
    )
}

const IconsWrapper = styled.div`
    display: flex;
`

const IconsElement = styled.div<IconsRowProps>`
    display: flex;
    margin-right: 1rem;
    align-items: center;

    & span {
        margin: 0;
        font-size: ${p => p.fontSize || '0.8rem'};
    }

    @media only screen and (max-width: 350px) {
        & span {
            font-size: 0.7rem;
        }
    }
`

const IconImg = styled.img<IconsRowProps>`
    margin-right: 0.3rem;
    height: ${p => p.iconSize || '1.2rem'};
`