import React, { useState } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { TitleProps } from '.'
import Title from './Title'

export interface Button {
    id: string,
    title: string
}

export interface MultipleSelectHookArgs {
    customButton?: (args: { active: boolean, button: Button, onClick: React.MouseEventHandler<HTMLDivElement> }) => JSX.Element
    buttons: Button[],
}

export interface MultipleSelectHook {
    props: MultipleSelectProps
}


export type MultipleSelectProps = {
    children?: React.ReactNode
    style?: React.CSSProperties,
    onButtonClick?: (id: string) => void,
    activeButtons: string[],
    customStyledContainer?: StyledComponent<"div", any>
    titleProps?: TitleProps
} & MultipleSelectHookArgs



export default function MultipleSelect(props: MultipleSelectProps): JSX.Element {

    const { style, buttons, customButton, activeButtons, onButtonClick, customStyledContainer, titleProps } = props

    const isButtonActive = (button: Button): boolean => !!activeButtons.find(b => b === button.id)

    const handleButtonClick: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement
        console.log(event)
        onButtonClick && onButtonClick(target.id);
    }

    let StyledMultipleSelectContainer;
    if (customStyledContainer) {
        StyledMultipleSelectContainer = customStyledContainer;
    } else {
        StyledMultipleSelectContainer = StyledMultipleSelect
    }

    return (
        <StyledMultipleSelectContainer style={style}>
            {
                buttons.map(button => customButton ? customButton({ active: isButtonActive(button), button, onClick: handleButtonClick }) :
                    <StyledButton key={button.id} id={button.id} onClick={handleButtonClick} active={isButtonActive(button)}>
                        <Title weight={'500'} size={'1rem'} id={button.id} noMargin center {...titleProps}>{button.title}</Title>
                    </StyledButton>
                )
            }
        </StyledMultipleSelectContainer>
    )
}

export function useMultipleSelect(params: MultipleSelectHookArgs): MultipleSelectProps {

    const { buttons } = params

    const [activeButtons, setActiveButtons] = useState<string[]>([]);

    const handleClick = (id: string) => {
        if (!!activeButtons.find(b_id => b_id === id)) {
            setActiveButtons(activeButtons.filter(b_id => b_id !== id))
        } else {
            setActiveButtons([...activeButtons, id])
        }
    }

    return {
        buttons,
        activeButtons,
        onButtonClick: handleClick
    }

}

const StyledMultipleSelect = styled.div`
    display: flex;
    margin: 1rem 0;
`

const StyledButton = styled.div<{ active?: boolean }>`

    border-radius: 5rem;
    padding: 0.8rem 1rem;
    margin: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${p => p.active ? `
        background: rgba(48, 143, 171, 0.3);
    ` : `
        background: #F8F8F8;
    `}
`