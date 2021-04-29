import React from 'react'
import styled from 'styled-components'
import { Title } from '.'
import Text from './Text'

export interface ProgressBarProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    withText?: boolean
    title?: string
    progress: number,
    width?: string,
    textColor?: string,
    size?: 'small' | 'big',
    mb?: string
}

export default function ProgressBar(props: ProgressBarProps): JSX.Element {

    const { withText, progress, textColor, size, title } = props

    return (
        <StyledProgressBar {...props} size={size}>
            <ProgressBarOuter {...props} size={size}>
                <ProgressBarInner {...props} size={size} />
            </ProgressBarOuter>
            {
                withText && (size === 'small' || !size) &&
                <Text style={{ marginLeft: '1rem' }} size={'.6rem'} color={textColor}>
                    {~~(progress * 100)} %
                </Text>
            }
            {
                withText && size === 'big' &&
                <BigText>
                    <Title color="white" style={{ marginLeft: '1rem' }} size="1rem">
                        {title}
                    </Title>
                    <Title color="white" style={{ marginRight: '1rem' }} size="1rem">
                        {~~(progress * 100)} %
                    </Title>
                </BigText>
            }
        </StyledProgressBar>
    )
}

const StyledProgressBar = styled.div<ProgressBarProps>`
    display: flex;
    /* align-items: center; */

    ${p => p.width ? `
        width: ${p.width};
    ` : ''}

    ${p => p.size === 'big' ? `
        position: relative;
    ` : ''}

    ${p => p.mb ? `
        margin-bottom: ${p.mb};
    ` : ''}
`

const ProgressBarOuter = styled.div<ProgressBarProps>`
    flex: 1;
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #F2F2F2;
    border-radius: 5rem;
    border: 2px solid #F2F2F2;

    ${p => p.size === 'big' ? `
        height: 2.5rem;
        border: 0;
        background-color: rgba(48, 143, 171, 0.3);
    ` : ''}
`

const ProgressBarInner = styled.div<ProgressBarProps>`
    width: ${p => p.progress * 100 >= 5 || p.progress === 0 ? p.progress * 100 + '%' : '0.6rem'};
    border-radius: 5rem;
    height: 0.6rem;
    background: linear-gradient(122.49deg, #429FBA 0%, #217E9A 100%);

    ${p => p.size === 'big' ? `
        height: 2.5rem;
    ` : ''}
`

const BigText = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`