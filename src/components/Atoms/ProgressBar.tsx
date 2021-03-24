import React from 'react'
import styled from 'styled-components'
import Text from './Text'

export interface ProgressBarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    withText?: boolean
    progress: number,
    width?: string
}

export default function ProgressBar(props: ProgressBarProps): JSX.Element {

    const { withText, progress } = props

    return (
        <StyledProgressBar {...props}>
            <ProgressBarOuter>
                <ProgressBarInner {...props} />
            </ProgressBarOuter>
            {
                withText &&
                <Text style={{marginLeft: '1rem'}} size={'.6rem'} noMargin>
                    {~~(progress * 100)} % 
                </Text>
            }
        </StyledProgressBar>
    )
}

const StyledProgressBar = styled.div<ProgressBarProps>`
    display: flex;
    /* align-items: center; */

    ${p => p.width ? `
        width: ${p.width}
    ` : ''}
`

const ProgressBarOuter = styled.div`
    flex: 1;
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #F2F2F2;
    border-radius: 1rem;
    border: 0.1rem solid #F2F2F2;
`

const ProgressBarInner = styled.div<ProgressBarProps>`
    width: ${p => p.progress * 100}%;
    border-radius: 1rem;
    height: 0.6rem;
    background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);
`
